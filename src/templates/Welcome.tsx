import React from 'react';

import Link from 'next/link';

const Welcome = () => (
  <div className="main-screen flex">
    <div className="flex-grow">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center xl:w-2/3 md:w-4/5 w-full">
          {/* <div> */}
          <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            <h1 className="heading">ANTI DETECT BROWSER</h1>
            <span className="text-primary-500">
              To Glide Smoothly and Effortlessly.
            </span>
          </h1>
          <div className="text-2xl my-4">
            Create and manage multi-session browsing identities on your computer
          </div>

          <div className="flex justify-center flex-col space-y-4">
            <div>
              <Link href="#">
                <a className="inline-flex text-center text-lg text-white bg-green-600 py-3 pl-5 pr-5 hover:bg-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Now
                </a>
              </Link>
            </div>
            <h6>Fully support Windows, Apple M1 & macOS Big Sur & Monterey!</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Welcome };
