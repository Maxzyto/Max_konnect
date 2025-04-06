import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

// Helper to format bytes
const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const useFileStore = create(
  persist(
    (set, get) => ({
      // --- State ---
      uploads: [], 
      receipts: {}, 
      temporalFiles: {}, 

      // --- Actions ---
      addTemporalFile: (file) => {
        const tempId = uuidv4();
       
        set((state) => ({
          temporalFiles: {
            ...state.temporalFiles,
            [tempId]: {
              file: file, 
              name: file.name,
              size: file.size,
              type: file.type,
            },
          },
        }));
        console.log("Temporal file added (in memory):", tempId, file.name);
        return tempId; // Return the temp ID so the UI can reference it
      },

      removeTemporalFile: (tempId) => {
        set((state) => {
          const newTemporalFiles = { ...state.temporalFiles };
          delete newTemporalFiles[tempId];
          return { temporalFiles: newTemporalFiles };
        });
        console.log("Temporal file removed (from memory):", tempId);
      },

      confirmUpload: (tempId) => {
        const temporalFileEntry = get().temporalFiles[tempId];
        if (!temporalFileEntry) {
          console.error("Temporal file not found for confirmation:", tempId);
          return null; // Indicate failure
        }

        const { name, size, type } = temporalFileEntry;
        const timestamp = new Date().toISOString();
        const receiptId = uuidv4(); 
        const uploadId = uuidv4(); 

        // 1. Create Receipt
        const newReceipt = {
          id: receiptId,
          filename: name,
          sizeFormatted: formatBytes(size),
          type: type,
          uploadTimestamp: timestamp,
          status: "Successfully Processed", // Example detail
          cost: (size * 0.00005).toFixed(2), // Example calculation
        };

        // 2. Create History Entry
        const newUploadHistory = {
          id: uploadId,
          receiptId: receiptId,
          filename: name,
          timestamp: timestamp,
          status: "Completed",
        };

        // 3. Update State
        set((state) => {
          // Remove the processed temporal file
          const newTemporalFiles = { ...state.temporalFiles };
          delete newTemporalFiles[tempId];

          return {
            receipts: { ...state.receipts, [receiptId]: newReceipt },
            uploads: [newUploadHistory, ...state.uploads], // Add to beginning of history
            temporalFiles: newTemporalFiles,
          };
        });
        console.log("Upload confirmed:", name, "Receipt ID:", receiptId);

        return receiptId; // Return receipt ID for navigation
      },

      // --- Selectors (optional, can also compute in components) ---
      getReceiptById: (id) => get().receipts[id],
      getTemporalFileIds: () => Object.keys(get().temporalFiles),
    }),
    {
      name: "file-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        uploads: state.uploads,
        receipts: state.receipts,
       
      }),
    }
  )
);

export default useFileStore;
