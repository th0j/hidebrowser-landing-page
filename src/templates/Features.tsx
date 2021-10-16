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
  <div>
    {/* <div className="container mx-auto">
      <div className="grid grid-cols-2 py-16 ">
        <div className="mx-auto">
          <img alt="" src="https://lcdn.gologin.com/img/anim-page.webp" />
        </div>

        <div>
          <div className="mb-4">
            <span className="text-3xl font-semibold text-black ">
              Why Do You Need Anonymous Surfing?
            </span>
          </div>
          <div>
            <p className="text-black text-lg leading-8 p-4">
              Governments, corporations and hackers know the meaning of
              anonymity and track your Internet identity all the time. Some
              simply collect information about users for their own or
              other&apos;s purposes. Others just strictly limit suspicious
              activities such as multi-accounting.
            </p>

            <p className="text-black text-lg leading-8 p-4">
              How do sites determine that these very accounts are being used on
              the same device? Through your digital fingerprint! They identify
              your device by that; and if you do something they find
              inappropriate or suspicious, your anonymous surfing may very
              easily come to an end.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    <div className="landing-gradient my-8 py-14">
      <div className="container mx-auto flex px-16  text-white">
        <div className="px-16">
          <div className="font-bold text-3xl tracking-wider">
            Manage Fingerprint
          </div>
          <div className="py-4 text-lg">
            Customize each parameter of your fingerprint. More than 50
            connection characteristics are currently available.
          </div>
        </div>
        <div className="px-16">
          <div className="font-bold text-3xl tracking-wider">
            Separated Profiles
          </div>
          <div className="py-4 text-lg">
            Each browser profile is located separately in your cloud or localy,
            guaranteeing the protection of your data and web anonymity.
          </div>
        </div>
        <div className="px-16">
          <div className="font-bold text-3xl tracking-wider">Teamwork</div>
          <div className="py-4 text-lg">
            Convenient ecosystem for effective teamwork. Share profiles and
            proxies and assign rights to each team member.
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto pb-16">
      <div className="flex items-center">
        <div className="mx-auto">
          <div className="pb-4">
            <div className="text-3xl font-semibold text-black text-center">
              THE OLD WAY
            </div>
            <div className="text-center">Using physical devices or VPS</div>
          </div>

          <img alt="" src="assets/images/oldway.svg" />
        </div>
        <div className="mx-auto">
          <div className="pb-4">
            <div className="text-3xl font-semibold text-black text-center">
              THE NEW WAY
            </div>
            <div className="text-center">Using device simulation</div>
          </div>

          <img alt="" src="assets/images/newway.svg" />
        </div>
      </div>
    </div>

    <div className="landing-gradient">
      <div className="container mx-auto px-16 grid grid-cols-2 py-16">
        <div className=" mb-12">
          <div>
            <span className="text-3xl font-semibold text-white ">
              What is Digital Fingerprint?
            </span>
          </div>

          <div>
            <p className="text-white text-lg leading-8 p-2">
              This is an ID-code that is composed of all possible information
              about your system, location, installed plugins and many other
              things related to your device. Here are just a few of them that
              make up your digital fingerprint:
            </p>

            <p className="text-white text-lg leading-8 p-2">
              You can always be identified by them, even after changing your IP,
              using a secure browser and clearing cookies. They always get in
              the way of anonymous web surfing. Therefore, it is necessary to
              mask this information. And InPrivate browsing won&apos;t fix this
              problem. Not even the safest browser!
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <img alt="" src="assets/images/fingerprintText.webp" />
        </div>
      </div>
    </div>

    {/* <div className="container mx-auto px-32">
      <div className="grid grid-cols-2 py-16">
        <div className="mx-auto">
          <img alt="" src="https://lcdn.gologin.com/img/fingerprint.svg" />
        </div>

        <div>
          <div className="mb-4">
            <span className="text-3xl font-semibold text-black ">
              Surfing Anonymously with Anti Detect Browser
            </span>
          </div>
          <div>
            <p className="text-black text-lg leading-8 p-4">
              There are browser identity management platforms that allow you to
              use all the facilities of the regular browser, simultaneously
              hiding your identity. These platforms mask all monitored data.
              With them you can also configure different profiles and use each
              one of them separately. It isn&apos;t just an anonymous web
              browser. This software is much better because while, for instance,
              using Tor, you are identified as another Tor user. Hence, sites
              will be often checking on you. To avoid that, we developed the
              safest antidetect web browser Hidebrowser.
            </p>
          </div>
        </div>
      </div>
    </div> */}

    <div className="container mx-auto p-16">
      {/* <div className="container mx-auto p-16 grid grid-cols-2 gap-x-10"> */}
      <div className="flex flex-wrap items-center">
        <div className="lg:w-1/2">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
          >
            {/* <SwiperSlide>
              <img src="https://lcdn.gologin.com/img/glslider1.webp" alt="" />
            </SwiperSlide> */}
            <SwiperSlide>
              <img src="assets/images/hb-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/hb-3.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:w-1/2 p-8">
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
