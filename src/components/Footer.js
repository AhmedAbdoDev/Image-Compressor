/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8 mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm leading-relaxed">
            This is a fast and free online tool for compressing your images.
            It's designed to reduce file sizes without losing noticeable
            quality, making your websites and projects load faster. This
            personal project was built using Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <div className="flex justify-center space-x-4 text-sm">
            <a
              href="https://github.com/AhmedAbdoDev"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/3bkrenoDev"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://ahmedabdodev.github.io/Portfolio"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Image Compressor. All Rights Reserved.
      </div>
    </footer>
  );
}
