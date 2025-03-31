import React from 'react'

const Upload = () => {
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Upload
          </button>
        </div>
      </form>
    </div>
  )
}

export default Upload
