import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

const Feature = (props: any) => {
  return (
    <p className="py-2 tracking-wider">
      <span className="w-4 h-4 mr-3 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          className="w-3 h-3"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {props.children}
    </p>
  );
};

const Plan = (props: any) => {
  const borderColor = props.primary
    ? 'border-2 border-yellow-500'
    : 'border border-gray-200';

  const popular = props.primary ? (
    <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
      POPULAR
    </span>
  ) : (
    ''
  );

  const primaryChoose = props.primary
    ? 'bg-yellow-500 text-white'
    : 'bg-yellow-200 text-yellow-500';

  const renderFeature = () => {
    if (props.features) {
      return props.features.map((feature: string, index: number) => (
        <div key={index}>
          <Feature>{feature}</Feature>
        </div>
      ));
    }
    return '';
  };

  return (
    <div className="text-gray-900 ">
      <div
        className={`relative overflow-hidden p-6 m-4 rounded-lg ${borderColor}`}
      >
        {popular}
        <div className="text-3xl">{props.name}</div>
        {/* <div>For freelanceers that need unique Internet identities</div> */}
        <div className="flex items-center justify-between">
          <div className="text-5xl">{props.price}/mo.</div>
          <div>
            <s className="text-2xl text-gray-500">{props.compareAtPrice}/mo.</s>
          </div>
        </div>
        <hr className="my-6 text-gray-300" />
        <div className="h-80 w-80">{renderFeature()}</div>

        <div className="text-center">
          <a
            className={`${primaryChoose} tracking-wider font-bold py-2 px-4 w-full rounded-lg`}
            type="button"
            download
            href={`/${AppConfig.app_version}`}
          >
            SELECT PLAN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
