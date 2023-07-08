import React from 'react';
import {
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
      <div className="offset">
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
      </div>
    );
  }
}

export default AwardsPage;
