import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from './Features';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { Welcome } from './Welcome';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navigation />
    <Welcome />

    <Features />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
