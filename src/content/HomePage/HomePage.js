import React from 'react';
import { Theme } from '@carbon/react';
import PageHeader from '../../components/PageHeader';

const LandingPage = _ => {
  return (
    <Theme
      className="offset"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/cover.png)`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <PageHeader />
    </Theme>
  );
};

export default LandingPage;
