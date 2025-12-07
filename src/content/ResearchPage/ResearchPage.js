import React from 'react';
import { generateImageUrl } from '../../components/Info';
import { Grid, Column, Theme, Tile, Tag, Button } from '@carbon/react';
import { VideoAdd, Http, Document, LogoGithub } from '@carbon/icons-react';

import PageHeader from '../../components/PageHeader';
import DATA from './Data.js';

import { TAGS } from '../PublicationsPage/Data.js';

const url_type_map = {
  code: LogoGithub,
  paper: Document,
  website: Http,
  video: VideoAdd,
};

const Project = props => {
  return (
    <Tile style={{ marginBottom: '32px', padding: '0' }}>
      {props.data.image && (
        <img
          alt=""
          src={generateImageUrl(props.data.image)}
          width="100%"
          height="auto"
        />
      )}

      <div style={{ padding: '16px' }}>
        {Object.keys(TAGS).map((item, key) => (
          <React.Fragment key={key}>
            {props.data.tags.indexOf(item) > -1 && (
              <Tag type="purple" className={'explore-tags ' + item}>
                {TAGS[item]}
              </Tag>
            )}
          </React.Fragment>
        ))}
        <br />
        <br />

        <h6>{props.data.name}</h6>

        <div style={{ marginTop: '8px' }}>{props.data.description}</div>
        <br />

        {props.data.links && (
          <>
            {props.data.links.map((item, id) => (
              <Button
                key={id}
                target="_blank"
                href={item.url}
                className="project-button"
                kind="ghost"
                size="md"
                hasIconOnly
                renderIcon={url_type_map[item.type]}
                iconDescription={item.type}></Button>
            ))}

            {props.data.links.length === 0 && (
              <Button kind="tertiary" size="sm" disabled>
                Coming soon
              </Button>
            )}
          </>
        )}
      </div>
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
              <Column lg={12} md={8} sm={4}>
                <h6>Current Projects</h6>
                <hr />
                <br />
                <Grid>
                  {[0, 1, 2].map(index => (
                    <Column lg={4} md={4} sm={4}>
                      {DATA.filter(item => item.active)
                        .filter((_, id) => id % 3 === index)
                        .map(item => (
                          <Project key={item.id} data={item} />
                        ))}
                    </Column>
                  ))}
                </Grid>
              </Column>
              <Column lg={12} md={8} sm={4}>
                <h6>Past Projects</h6>
                <hr />
                <br />
                <Grid>
                  {[0, 1, 2].map(index => (
                    <Column lg={4} md={4} sm={4}>
                      {DATA.filter(item => !item.active)
                        .filter((_, id) => id % 3 === index)
                        .map(item => (
                          <Project key={item.id} data={item} />
                        ))}
                    </Column>
                  ))}
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
