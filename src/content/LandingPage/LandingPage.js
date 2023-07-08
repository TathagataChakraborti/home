import React from 'react';
import { Grid, Column, ProgressIndicator } from '@carbon/react';
import { ProgressStepNew } from '../../components/Info';

import DATA from './Data.js';

class LandingPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      folded: false,
    };
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/cover.png)`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Grid>
          <Column lg={4} md={4} sm={4} className="offset-progress-area">
            <ProgressIndicator vertical currentIndex={1}>
              {DATA.map((item, key) => (
                <React.Fragment key={key}>
                  <ProgressStepNew props={item} />
                </React.Fragment>
              ))}
            </ProgressIndicator>
          </Column>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
