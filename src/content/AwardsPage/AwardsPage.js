import React from 'react';
import {
  Grid,
  Column,
  StructuredListCell,
  StructuredListRow,
  StructuredListHead,
  StructuredListWrapper,
  StructuredListBody,
} from '@carbon/react';

import DATA from './Data.js';

class AwardsPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: DATA,
    };
  }

  render() {
    return (
      <Grid className="offset">
        <Column lg={{ start: 4, end: 16 }} md={{ start: 2, end: 9 }} sm={4}>
          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head>Awards</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {this.state.data.map((item, key) => (
                <React.Fragment key={key}>
                  <StructuredListRow>
                    <StructuredListCell>{item}</StructuredListCell>
                  </StructuredListRow>
                </React.Fragment>
              ))}
            </StructuredListBody>
          </StructuredListWrapper>
        </Column>
      </Grid>
    );
  }
}

export default AwardsPage;
