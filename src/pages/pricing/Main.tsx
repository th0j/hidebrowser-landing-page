import React from 'react';

import Plan from './Plan';

const plans = [
  {
    name: 'Starter',
    price: '5$',
    compareAtPrice: '9$',
    features: [
      '20 Browser Profiles',
      'Fingerprints Database',
      'HTTP(S) And SOCKS5 Proxy',
      'No Hidden Fees',
      'Local Storage',
    ],
  },
  {
    name: 'Solo',
    price: '15$',
    compareAtPrice: '29$',
    features: [
      '100 Browser Profiles',
      'Fingerprints Database',
      '100 Shareable Profiles',
      '5 Groups',
      'HTTP(S) And SOCKS5 Proxy',
      'No Hidden Fees',
      'Local Storage',
    ],
  },
  {
    name: 'Professional',
    price: '24$',
    compareAtPrice: '49$',
    features: [
      '200 Browser Profiles',
      'Fingerprints Database',
      '200 Shareable Profiles',
      '10 Groups',
      'HTTP(S) And SOCKS5 Proxy',
      'No Hidden Fees',
      'Cloud Storage',
    ],
  },
  {
    name: 'Business',
    price: '49$',
    compareAtPrice: '99$',
    features: [
      '500 Browser Profiles',
      'Fingerprints Database',
      '500 Shareable Profiles',
      '20 Groups',
      'HTTP(S) And SOCKS5 Proxy',
      'No Hidden Fees',
      'Cloud Storage',
    ],
  },
];

const Main = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto items-center justify-center flex flex-col p-8">
        <div className="text-3xl text-gray-900 font-bold tracking-wider">
          PLAN & PRICING
        </div>
        <div className="text-xl text-gray-500 font-light tracking-wider">
          Get Discount Up To 50%!
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto items-center justify-center flex">
          {plans.map((plan, index: number) =>
            index === 1 ? (
              <div key={plan.name}>
                <Plan
                  price={plan.price}
                  compareAtPrice={plan.compareAtPrice}
                  features={plan.features}
                  name={plan.name}
                  primary
                ></Plan>
              </div>
            ) : (
              <div key={plan.name}>
                <Plan
                  price={plan.price}
                  compareAtPrice={plan.compareAtPrice}
                  features={plan.features}
                  name={plan.name}
                ></Plan>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
