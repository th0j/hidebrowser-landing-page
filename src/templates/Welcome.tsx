import React from 'react';

import { AppConfig } from '../utils/AppConfig';

const Welcome = () => (
  <div className="section-top-a">
    <div className="container mx-auto px-5 lg:pt-32">
      <div className="text-center w-full flex items-center justify-center flex-col">
        <div className="lg:text-5xl text-2xl text-gray-900 font-bold whitespace-pre-line ">
          <div className="tracking-widest">ANTI DETECT BROWSER</div>
          <div className="text-primary-500 hidden lg:inline">
            To Glide Smoothly and Effortlessly.
          </div>
        </div>

        <h5 className="lg:text-xl text-gray-500">
          Create and manage multi-session browsing identities on your computer
        </h5>

        <div className="flex justify-center flex-col space-y-2 py-8">
          <div>
            <a
              className="inline-flex text-center text-lg py-3 pl-5 pr-5 btn tracking-widest"
              href={`/${AppConfig.app_version}`}
              download
            >
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
              Download for Windows
            </a>
          </div>
          <h6 className="text-gray-500">
            Fully support Windows, Apple M1 & macOS Big Sur & Monterey!
          </h6>
        </div>
      </div>
    </div>
  </div>
);

export { Welcome };
