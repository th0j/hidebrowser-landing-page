import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navigation = () => (
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
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Download</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </div>
  </div>
);

export { Navigation };
