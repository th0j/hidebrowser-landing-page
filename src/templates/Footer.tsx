import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Footer = () => (
  <>
    <Section>
      {/* <CenteredFooter
        
        iconList={
          <>
            <Link href="/">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
            </Link>

            <Link href="/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </Link>
          </>
        }
      ></CenteredFooter> */}

      <div className="footer-trial container grid grid-cols-1 gap-2 py-4 mb-16">
        <div className="footer-left mx-auto text-center">
          <div className="text-6xl text-white uppercase">Try Free Trial</div>
          <p className="text-black text-2xl py-4">
            We have a free 7-day trial period with full access to all functions
          </p>
          <Button>DOWNLOAD NOW</Button>
        </div>

        <div></div>
      </div>

      <div className="footer grid grid-cols-5 gap-4">
        <div className="col-span-2">HIDEBROWSER</div>

        <div className="text-left">
          <div className="footer-title">HIDEBROWSER</div>
          <ul className="">
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              {' '}
              <Link href="#">Download</Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <div className="footer-title">Support</div>

          <ul>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Email Support</Link>
            </li>

            <li>
              <Link href="#">Telegram Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Legal</div>
          <ul>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>

            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 pt-4">
        Copyright ©2021 Hidebrowser. All rights reserved
      </div>
    </Section>
  </>
);

export { Footer };
