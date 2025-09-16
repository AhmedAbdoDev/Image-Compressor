"use client";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import ImageUploader from "@/components/ImageUploader";
import ImageDisplay from "@/components/ImageDisplay";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originalSize, setOriginalSize] = useState(null);
  const [compressedSize, setCompressedSize] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setOriginalImage(null);
    setCompressedImage(null);
    setOriginalSize(null);
    setCompressedSize(null);
    setOriginalImage(URL.createObjectURL(file));
    setOriginalSize((file.size / 1024 / 1024).toFixed(2));
    setLoading(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: "image/jpeg",
    };
    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedImage(URL.createObjectURL(compressedFile));
      setCompressedSize((compressedFile.size / 1024 / 1024).toFixed(2));
    } catch (error) {
      console.error("Error compressing image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!compressedImage) return;
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = `compressed_${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-900 text-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Image Compressor
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Compress your images with a single click. Fast, free, and completely
          secure.
        </p>
      </div>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-4xl text-center">
        <ImageUploader
          handleImageUpload={handleImageUpload}
          loading={loading}
        />
        {!loading && (originalImage || compressedImage) && (
          <ImageDisplay
            originalImage={originalImage}
            compressedImage={compressedImage}
            originalSize={originalSize}
            compressedSize={compressedSize}
            handleDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
};
export default ImageCompressor;
