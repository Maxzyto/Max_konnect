import React from 'react'

const Upload = () => {
  const [files, setFiles] = React.useState([]);
  const fileInputRef = React.useRef(null);
const onUploadComplete = (fileDetails) => {
  console.log('File uploaded:', fileDetails);
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            Upload File
          </label>
          <input type="file" id="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Upload
          </button>
        </div>
      </form>
    </div>
  )
}

export default Upload
