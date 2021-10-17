import React from 'react';

import { Meta } from '../../layout/Meta';
import { Footer } from '../../templates/Footer';
import { Navigation } from '../../templates/Navigation';
import { AppConfig } from '../../utils/AppConfig';
import { Main } from './Main';

const Index = () => {
  return (
    <div className="text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navigation />
      <Main></Main>
      <Footer />
    </div>
  );
};

export default Index;
