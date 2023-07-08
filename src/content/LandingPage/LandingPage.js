import React from 'react';
import {
  Grid,
  Column,
  Link,
  ProgressStep,
  ProgressIndicator,
} from '@carbon/react';

import DATA from './Data.js';

const ProgressStepNew = props => {
  return (
    <ProgressStep
      style={{ marginBottom: '20px', minHeight: '0', width: '85%' }}
      complete={props.props.complete}
      current={props.props.current}
      label={
        <div style={{ marginBottom: '5px' }}>
          {!props.props.link && (
            <span style={{ color: 'white' }}>{props.props.title}</span>
          )}
          {props.props.link && (
            <Link
              style={{ color: 'white' }}
              href={props.props.link}
              target="_blank">
              {props.props.title}
            </Link>
          )}
        </div>
      }
      secondaryLabel={
        <span style={{ color: 'silver' }}>{props.props.description}</span>
      }
    />
  );
};

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
