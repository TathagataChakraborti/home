import React from 'react';
import {
  Grid,
  Column,
  Link,
  StructuredListCell,
  StructuredListRow,
  StructuredListHead,
  StructuredListWrapper,
  StructuredListBody,
} from '@carbon/react';

import DATA from './Data.js';

class TalksPage extends React.Component {
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
                <StructuredListCell head>Talks and Panels</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {this.state.data.map((item, key) => (
                <React.Fragment key={key}>
                  <StructuredListRow>
                    <StructuredListCell>
                      <strong> {item.title} </strong> | <em> {item.venue} </em>{' '}
                      {item.link && (
                        <span>
                          {' '}
                          |{' '}
                          <Link href={item.link} target="_blank">
                            Link
                          </Link>
                        </span>
                      )}
                    </StructuredListCell>
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

export default TalksPage;
