import React from 'react';
import copy from 'copy-to-clipboard';
import { Link as NewLink } from 'react-router-dom';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ProgressStep,
  Button,
  Tile,
  Link,
  Tag,
  CodeSnippet,
} from '@carbon/react';

import { Download, Copy, Quotes, Trophy, VideoAdd } from '@carbon/icons-react';

const LinkList = ({
  primaryUrlName,
  primaryUrl,
  secondaryUrlName,
  secondaryUrl,
}) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={primaryUrl}>{primaryUrlName}</Link>
    </li>
    {secondaryUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={secondaryUrl}>{secondaryUrlName}</Link>
      </li>
    )}
  </ul>
);

const generateImageUrl = (imageUrl, imageType) => {
  if (!imageType) imageType = 'png';

  return `${process.env.PUBLIC_URL}/images/${imageUrl}.${imageType}`;
};

const Project = props => {
  return (
    <Tile style={{ margin: '10px', backgroundColor: 'white' }}>
      <div>
        {props.props.image && (
          <div style={{ textAlign: 'center' }}>
            <img
              style={{
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image, props.props.image_type)}
              alt="Carbon illustration"
            />
          </div>
        )}

        {props.props.primary && props.props.name && (
          <>
            <div className="bx--row">
              <div className="bx--col-lg-12">
                <h1>{props.props.name}</h1>
              </div>
            </div>
            <br />
            <br />
          </>
        )}

        {props.props.primary && (
          <>
            <NewLink
              to={{
                pathname: '/publications',
                state: { tags: props.props.tags },
              }}
              className="no-decoration-enforce">
              <Button kind="secondary" size="md">
                Learn More
              </Button>
              <br />
              <br />
            </NewLink>
          </>
        )}

        {props.props.secondary && (
          <>
            <NewLink
              to={{
                pathname: '/publications',
                state: { tags: props.props.tags },
              }}
              className="no-decoration-enforce">
              <Button kind="secondary" size="md">
                {props.props.name}
              </Button>
              <br />
              <br />
            </NewLink>
          </>
        )}

        {props.props.tertiary && (
          <>
            <Link
              href={props.props.link}
              target="_blank"
              className="no-decoration-enforce">
              <Button kind="secondary" size="md">
                {props.props.name}
              </Button>
            </Link>
            <br />
            <br />
          </>
        )}
      </div>
    </Tile>
  );
};

const Project3 = props => {
  return (
    <Tile
      className="tertiary-project"
      style={{ margin: '10px', backgroundColor: 'white' }}
      onClick={() => window.open(props.props.link, '_blank')}>
      <div className="bx--col-lg-16">
        {props.props.name && (
          <>
            <h4>{props.props.name}</h4>
          </>
        )}
      </div>
    </Tile>
  );
};

const copyInfo = (data, e) => {
  var info =
    data.title +
    '. ' +
    data.authors +
    '. ' +
    data.venue.replace('xxxx', data.year) +
    '.';
  copy(info);
};

const copyTex = (data, e) => {
  var id = '[AUTHOR]-[VENUE]-[YEAR]-[TITLE]'
    .replace(
      '[AUTHOR]',
      data.authors
        .replace(',', '')
        .split(' ')[1]
        .toLowerCase()
    )
    .replace('[VENUE]', data.venue.split(' ')[0].toLowerCase())
    .replace('[YEAR]', data.year)
    .replace('[TITLE]', data.title.replaceAll(' ', '-').toLowerCase());

  var tex = '@inproceedings{[ID],\n author = {[AUTHORS]},\n title = {{[TITLE]}},\n booktitle = {[VENUE]},\n year = {[YEAR]}\n}'
    .replace('[ID]', id)
    .replace(
      '[AUTHORS]',
      data.authors.replaceAll(', and', ',').replaceAll(',', ' and')
    )
    .replace('[TITLE]', data.title)
    .replace('[VENUE]', data.venue.replace(' xxxx', ''))
    .replace('[YEAR]', data.year);

  copy(tex);
};

const createVenue = (venue, year) => {
  return venue.replace('xxxx', year);
};

const Paper = props => {
  return (
    <StructuredListWrapper
      style={{ marginBottom: '0' }}
      ariaLabel="Structured list">
      <StructuredListHead>
        <StructuredListRow>
          <StructuredListCell head>
            {props.props.title} |{' '}
            {createVenue(props.props.venue, props.props.year)}
            <br />
            <em style={{ fontWeight: 'normal' }}>by {props.props.authors}.</em>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow className="no-border">
          <StructuredListCell>
            {props.props.award && (
              <>
                <span style={{ color: '#9f1853' }}>
                  <Trophy /> {props.props.award}
                </span>
                <br />
                <br />
              </>
            )}
            <div>{props.props.abstract}</div>
            <br />
            <div>
              {props.props.nlp && <Tag type="purple"> NLP </Tag>}
              {props.props.xai && <Tag type="magenta"> XAI </Tag>}
              {props.props.bpm && <Tag type="purple"> BPM </Tag>}
              {props.props.hri && <Tag type="teal"> HRI </Tag>}
              {props.props.support && <Tag type="blue"> Support </Tag>}
              {props.props.advml && <Tag type="green"> Adv ML </Tag>}
              {props.props.ai4code && <Tag type="cyan"> AI4Code </Tag>}
              {props.props.vamhri && <Tag type="red"> Mixed Reality </Tag>}
              {props.props.humanai && <Tag type="warm-gray"> Human & AI </Tag>}
              {props.props.link && (
                <Link href={props.props.link} target="_blank">
                  <Button kind="ghost" size="small">
                    {' '}
                    <Download />{' '}
                  </Button>
                </Link>
              )}
              {props.props.video && (
                <Link href={props.props.video} target="_blank">
                  <Button kind="ghost" size="small">
                    {' '}
                    <VideoAdd />{' '}
                  </Button>
                </Link>
              )}
              <CodeSnippet
                type="inline"
                onClick={copyInfo.bind(this, props.props)}>
                <Copy />
              </CodeSnippet>
              <CodeSnippet
                type="inline"
                onClick={copyTex.bind(this, props.props)}>
                <Quotes />
              </CodeSnippet>
            </div>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

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

export { LinkList, Project, Project3, ProgressStepNew, Paper };
