import React from 'react';
import { Link as NewLink } from 'react-router-dom';
import { generateImageUrl } from '../../components/Info';
import { Grid, Column, Theme, Tile, Button } from '@carbon/react';

import PageHeader from '../../components/PageHeader';
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
            <Button kind="secondary" size="md" disabled={props.props.patch}>
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
  render() {
    return (
      <Theme theme="g10">
        <PageHeader />
        <Grid className="offset">
          <Column lg={{ start: 4, end: 16 }} md={{ start: 2, end: 9 }} sm={4}>
            <Grid>
              <Column lg={2} md={4} sm={4}>
                <Project props={DATA[0]} />
                <Project3 props={DATA[1]} />
                <Project3 props={DATA[2]} />
                <Project props={DATA[4]} />
                <Project3 props={DATA[6]} />
                <Project3 props={DATA[7]} />
                <Project3 props={DATA[8]} />
              </Column>

              <Column lg={2} md={4} sm={4}>
                <Grid>
                  <Column lg={4} md={4} sm={4}>
                    <Project props={DATA[3]} />
                    <Project props={DATA[9]} />
                    <Project props={DATA[5]} />
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Theme>
    );
  }
}

export default ResearchPage;
