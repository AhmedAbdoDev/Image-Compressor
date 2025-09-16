const ImageUploader = ({ handleImageUpload, loading }) => (
  <div className="flex justify-center items-center mb-8">
    <label
      htmlFor="file-upload"
      className="flex flex-col items-center justify-center px-6 py-12 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:bg-gray-700 transition-colors duration-300"
    >
      <svg
        className="w-16 h-16 text-blue-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        ></path>
      </svg>
      <span className="text-lg font-semibold text-gray-300">
        Drag & Drop your image here, or
        <span className="text-blue-400 hover:underline ml-1">Browse</span>
      </span>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>
    {loading && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          className="animate-spin h-8 w-8 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )}
  </div>
);

export default ImageUploader;
