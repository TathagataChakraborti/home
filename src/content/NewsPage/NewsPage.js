import React from 'react';
import {
  Grid,
  Column,
  StructuredListCell,
  StructuredListRow,
  StructuredListHead,
  StructuredListWrapper,
  StructuredListBody,
  Link,
} from '@carbon/react';

import DATA from './Data.js';

import { LogoTwitter } from '@carbon/icons-react';

class NewsPage extends React.Component {
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
                <StructuredListCell head>
                  News and Media{' '}
                  <Link href="https://twitter.com/tchakra2" target="_blank">
                    <LogoTwitter />
                  </Link>
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {this.state.data.map((item, key) => (
                <React.Fragment key={key}>
                  <StructuredListRow>
                    <StructuredListCell>
                      {item.title} |{' '}
                      <Link href={item.link} target="_blank">
                        {item.author}
                      </Link>
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

export default NewsPage;
