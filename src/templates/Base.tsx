import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Features />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
