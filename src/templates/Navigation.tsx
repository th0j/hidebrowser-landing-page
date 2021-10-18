import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Navigation = () => {
  return (
    <div className="container mx-auto p-5">
      <div className=" flex flex-wrap md:flex-col lg:flex-row justify-between items-center">
        <div className="md:w-1/2 lg:w-1/5">
          <Link href="/">
            <a>
              <Logo xl />
            </a>
          </Link>
        </div>

        <div className="md:w-1/2 w-full">
          <nav>
            <ul className="navbar flex flex-wrap items-center justify-center font-medium text-xl text-gray-800">
              <li>
                <Link href="/">
                  <a>Use Cases</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
              <li className="md:py-8 lg:p-0">
                <a
                  className="inline-flex items-center bg-yellow-300 rounded py-1 px-4 "
                  href={`/${AppConfig.app_version}`}
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
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
                  Download
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { Navigation };
