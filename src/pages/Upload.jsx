import React from 'react'

const Upload = () => {
  const [files, setFiles] = React.useState([]);
  const fileInputRef = React.useRef(null);
const onUploadComplete = (fileDetails) => {
  console.log('File uploaded:', fileDetails);
  };
  
    const handleRemoveFile = (index) => {
      setFiles(files.filter((_, i) => i !== index));
    };

const handleSubmit = (e) => {
   e.preventDefault();
   if (files.length > 0) {
     files.forEach((file) => {
       const fileDetails = {
         fileName: file.name,
         date: new Date().toLocaleDateString(),
         id: Date.now(),
       };
       onUploadComplete(fileDetails);
     });
     setFiles([]); // Clear the files after upload
   }
 };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <ul>
          {files.map((file, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-2"
            >
              {" "}
              {/* Responsive flex direction */}
              <span className="flex items-center mb-1 sm:mb-0">
                {" "}
                {/* Responsive margin */}
                {file.type.includes("pdf") && (
                  <span className="text-red-500 mr-2">PDF</span>
                )}
                {file.type.includes("image") && (
                  <span className="text-orange-500 mr-2">IMG</span>
                )}
                {file.type.includes("photoshop") && (
                  <span className="text-blue-500 mr-2">PS</span>
                )}
                {file.name}
              </span>
              <button
                onClick={() => handleRemoveFile(index)}
                className="text-red-500"
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload
