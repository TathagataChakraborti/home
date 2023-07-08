import React from 'react';
import { Grid, Column, Theme } from '@carbon/react';
import { Project, Project3 } from '../../components/Info';

import DATA from './Data.js';

class ResearchPage extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Theme theme="g0">
        <div className="offset">
          <Grid>
            <Column lg={8} md={4} sm={4}>
              <Project props={DATA[0]} />
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Grid>
                <Column lg={4} md={4} sm={4}>
                  <div className="bx--col-lg-16">
                    <Project props={DATA[6]} />
                  </div>

                  <div className="bx--col-lg-16">
                    <Project props={DATA[1]} />
                  </div>

                  <div className="bx--col-lg-16">
                    <Project props={DATA[2]} />
                  </div>
                </Column>

                <Column lg={4} md={4} sm={4}>
                  <div className="bx--col-lg-16">
                    <Project props={DATA[8]} />
                  </div>

                  <div className="bx--col-lg-16">
                    <Project props={DATA[7]} />
                  </div>
                  <div className="bx--col-lg-16">
                    <Project3 props={DATA[3]} />
                  </div>

                  <div className="bx--col-lg-16">
                    <Project3 props={DATA[4]} />
                  </div>

                  <div className="bx--col-lg-16">
                    <Project3 props={DATA[5]} />
                  </div>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </div>
      </Theme>
    );
  }
}

export default ResearchPage;
