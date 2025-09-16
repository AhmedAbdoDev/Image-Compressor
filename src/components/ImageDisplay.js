/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageDisplay = ({
  originalImage,
  compressedImage,
  originalSize,
  compressedSize,
  handleDownload,
}) => (
  <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 mt-12">
    {originalImage && (
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Original</h2>
        <div className="bg-gray-700 rounded-lg p-2 max-w-full">
          <img
            src={originalImage}
            alt="Original"
            className="max-w-full h-auto rounded-lg shadow-md border border-gray-600"
          />
        </div>
        {originalSize && (
          <p className="mt-2 text-lg text-gray-400">Size: {originalSize} MB</p>
        )}
      </div>
    )}

    {compressedImage && (
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Compressed</h2>
        <div className="bg-gray-700 rounded-lg p-2 max-w-full">
          <img
            src={compressedImage}
            alt="Compressed"
            className="max-w-full h-auto rounded-lg shadow-md border border-gray-600"
          />
        </div>
        {compressedSize && (
          <p className="mt-2 text-lg text-gray-400">
            Size: {compressedSize} MB (
            <span className="text-green-400">
              -
              {(((originalSize - compressedSize) / originalSize) * 100).toFixed(
                2
              )}
              %
            </span>
            )
          </p>
        )}
        <button
          onClick={handleDownload}
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
        >
          Download Compressed
        </button>
      </div>
    )}
  </div>
);

export default ImageDisplay;
