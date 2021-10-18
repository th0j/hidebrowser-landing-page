import React from 'react';

import SwiperCore, {
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Features = () => (
  <div className="py-8">
    <div className="landing-gradient py-8 px-5">
      <div className="container mx-auto flex flex-wrap text-white">
        <div className="md:w-full lg:w-1/3 lg:px-16">
          <div className="font-bold text-3xl tracking-wider">
            Manage Fingerprint
          </div>
          <div className="py-4 text-lg">
            Customize each parameter of your fingerprint. More than 50
            connection characteristics are currently available.
          </div>
        </div>
        <div className="md:w-full lg:w-1/3 lg:px-16">
          <div className="font-bold text-3xl tracking-wider">
            Separated Profiles
          </div>
          <div className="py-4 text-lg">
            Each browser profile is located separately in your cloud or localy,
            guaranteeing the protection of your data and web anonymity.
          </div>
        </div>
        <div className="md:w-full lg:w-1/3 lg:px-16">
          <div className="font-bold text-3xl tracking-wider">Teamwork</div>
          <div className="py-4 text-lg">
            Convenient ecosystem for effective teamwork. Share profiles and
            proxies and assign rights to each team member.
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-8 px-5">
      <div className="flex flex-wrap">
        <div className="mx-auto lg:w-1/2 py-8">
          <div className="flex flex-col items-center">
            <div className="pb-4">
              <div className="text-3xl font-semibold text-black text-center">
                THE OLD WAY
              </div>
              <div className="text-center">Using physical devices or VPS</div>
            </div>
            <div>
              <img alt="" src="/assets/images/oldway.svg" />
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2 py-8">
          <div className="flex flex-col items-center">
            <div className="pb-4">
              <div className="text-3xl font-semibold text-black text-center">
                THE NEW WAY
              </div>
              <div className="text-center">Using device simulation</div>
            </div>
            <div>
              <img alt="" src="/assets/images/newway.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-gradient py-8 px-5">
      <div className="container mx-auto flex flex-wrap text-white">
        <div className="lg:w-1/2">
          <div>
            <span className="text-3xl font-semibold  ">
              What is Digital Fingerprint?
            </span>
          </div>

          <div>
            <p className="text-lg leading-8 p-2">
              This is an ID-code that is composed of all possible information
              about your system, location, installed plugins and many other
              things related to your device. Here are just a few of them that
              make up your digital fingerprint:
            </p>

            <p className="text-lg leading-8 p-2">
              You can always be identified by them, even after changing your IP,
              using a secure browser and clearing cookies. They always get in
              the way of anonymous web surfing. Therefore, it is necessary to
              mask this information. And InPrivate browsing won&apos;t fix this
              problem. Not even the safest browser!
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img alt="" src="/assets/images/fingerprintText.webp" />
        </div>
      </div>
    </div>

    <div className="container mx-auto py-8 px-5">
      <div className="flex flex-wrap items-center">
        <div className="lg:w-1/2 w-full">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src="/assets/images/hb-2.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/hb-3.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:w-1/2 p-8 w-full">
          <div>
            <span className="text-3xl font-semibold text-black ">
              What is Hidebrowser?
            </span>
          </div>

          <div>
            <p className="text-black text-lg leading-8 p-2">
              Hidebrowser is software that lets you hide and control your
              digital fingerprint by spoofing all parameters that sites can see.
              By masking these settings, you can imitate a real Internet
              identity to bypass anti-fraud systems.
            </p>

            <p className="text-black text-lg leading-8 p-2">
              Hidebrowser helps you create a large number of profiles and each
              of them will have its own digital fingerprint. These profiles do
              not overlap with each other, so websites will not ban your
              accounts. This can be useful for performing various tasks on the
              Internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export { Features };
