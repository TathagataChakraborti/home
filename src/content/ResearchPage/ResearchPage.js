import React from 'react';
import { Link as NewLink } from 'react-router-dom';
import { generateImageUrl } from '../../components/Info';
import { Grid, Column, Theme, Tile, Button } from '@carbon/react';

import DATA from './Data.js';

const Project = props => {
  return (
    <Tile style={{ marginBottom: '30px', backgroundColor: 'white' }}>
      <div>
        {props.props.image && (
          <div style={{ textAlign: 'center' }}>
            <img
              style={{
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image, props.props.image_type)}
              alt="Illustration"
            />
          </div>
        )}

        {props.props.primary && props.props.name && (
          <div style={{ marginBottom: '20px', width: '75%' }}>
            <h1>{props.props.name}</h1>
          </div>
        )}

        {props.props.primary && (
          <NewLink
            to={{
              pathname: '/publications',
              state: { tags: props.props.tags },
            }}
            className="no-decoration-enforce">
            <Button kind="secondary" size="md">
              Learn More
            </Button>
          </NewLink>
        )}

        {props.props.secondary && (
          <NewLink
            to={{
              pathname: '/publications',
              state: { tags: props.props.tags },
            }}
            className="no-decoration-enforce">
            <Button kind="secondary" size="md">
              {props.props.name}
            </Button>
          </NewLink>
        )}

        {props.props.tertiary && (
          <Button
            href={props.props.link}
            target="_blank"
            className="no-decoration-enforce"
            kind="secondary"
            size="md">
            {props.props.name}
          </Button>
        )}
      </div>
    </Tile>
  );
};

const Project3 = props => {
  return (
    <Tile
      className="tertiary-project"
      style={{ marginBottom: '20px', backgroundColor: 'white' }}
      onClick={() => window.open(props.props.link, '_blank')}>
      {props.props.name && (
        <>
          <h4>{props.props.name}</h4>
        </>
      )}
    </Tile>
  );
};

class ResearchPage extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Theme theme="g10">
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
                </Column>

                <Column lg={4} md={4} sm={4}>
                  <div className="bx--col-lg-16">
                    <Project props={DATA[2]} />
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
