import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
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
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Anti detect browser\n'}
            {/* <span className="text-primary-500">React developers</span> */}
          </>
        }
        description="Create and manage multiple browser profiles on your computer"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Now</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
