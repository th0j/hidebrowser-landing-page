import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Navigation = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-3 py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
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
          <li>
            <a
              className="inline-flex items-center bg-yellow-300 rounded py-1 px-4"
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
        </NavbarTwoColumns>
      </div>
    </div>
  );
};

export { Navigation };
