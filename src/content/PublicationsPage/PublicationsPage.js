import React from 'react';
import { createVenue, copyTex, copyInfo } from '../../components/Info';
import {
  Grid,
  Column,
  Theme,
  Search,
  Tag,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Button,
  CodeSnippet,
} from '@carbon/react';
import {
  Download,
  Copy,
  Quotes,
  TrophyFilled,
  VideoAdd,
} from '@carbon/icons-react';

import { DATA, TAGS } from './Data.js';

const Paper = props => {
  return (
    <StructuredListWrapper className="paper-card" ariaLabel="Structured list">
      <StructuredListHead>
        <StructuredListRow>
          <StructuredListCell head>
            <div>
              {props.props.title}
              <span style={{ color: 'darkred' }}>
                {' '}
                | {createVenue(props.props.venue, props.props.year)}
              </span>
            </div>
            <div style={{ marginTop: '5px', fontWeight: 'normal' }}>
              <em>by {props.props.authors}.</em>
            </div>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow className="no-border">
          <StructuredListCell>
            {props.props.award && (
              <>
                <span>
                  <TrophyFilled className="gold-trophy" /> {props.props.award}
                </span>
                <br />
                <br />
              </>
            )}
            <div>{props.props.abstract}</div>
            <br />
            <div>
              {Object.keys(TAGS).map((item, key) => (
                <React.Fragment key={key}>
                  {props.props.tags.indexOf(item) > -1 && (
                    <Tag type="purple" className={'explore-tags ' + item}>
                      {TAGS[item]}
                    </Tag>
                  )}
                </React.Fragment>
              ))}

              {props.props.link && (
                <Button
                  href={props.props.link}
                  target="_blank"
                  kind="ghost"
                  size="sm">
                  {' '}
                  <Download />{' '}
                </Button>
              )}
              {props.props.video && (
                <Button
                  href={props.props.video}
                  target="_blank"
                  kind="ghost"
                  size="sm">
                  {' '}
                  <VideoAdd />{' '}
                </Button>
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

class PublicationsPage extends React.Component {
  constructor(props) {
    super();

    var initState = {
      search: '',
      data: DATA,
      number: DATA.length,
      filter: Object.keys(TAGS).reduce(function(obj, entry) {
        obj[entry] = false;
        return obj;
      }, {}),
    };

    if (props.location.state) {
      props.location.state.tags.forEach(function(item, key) {
        initState.filter[item] = true;
      });
    }

    this.state = initState;
  }

  componentDidMount(prevProps, prevState) {
    this.refreshData();
  }

  refreshData = e => {
    var tokens = this.state.search.trim().split(/[ ,]+/);
    var currentData = this.state.data;
    var currentState = this.state;
    var cache = [];

    currentData.forEach(function(item, key) {
      item.render = true;

      tokens.forEach(function(token, id) {
        token = token.toLowerCase();
        var flag =
          item.title.toLowerCase().includes(token) ||
          item.abstract.toLowerCase().includes(token) ||
          item.venue.toLowerCase().includes(token) ||
          item.authors.toLowerCase().includes(token);
        item.render = flag && item.render;
      });

      Object.keys(TAGS).forEach(function(tag, i) {
        if (currentState.filter[tag])
          item.render = item.render && item.tags.indexOf(tag) > -1;
      });

      if (item.render) cache.push(key);
    });

    var count = 0;
    currentData.forEach(function(item, key) {
      if (item.render) count += 1;
    });

    this.setState({
      ...this.state,
      data: currentData,
      number: count,
    });
  };

  onClickTag = e => {
    this.setState(
      {
        ...this.state,
        filter: {
          ...this.state.filter,
          [e]: true,
        },
      },
      this.refreshData
    );
  };

  onCloseTag = e => {
    this.setState(
      {
        ...this.state,
        filter: {
          ...this.state.filter,
          [e]: false,
        },
      },
      this.refreshData
    );
  };

  handleInputChange = e => {
    this.setState(
      {
        ...this.state,
        search: e.target.value,
        filter: {
          ...this.state.filter,
          lucky: false,
        },
      },
      this.refreshData
    );
  };

  render() {
    return (
      <Theme theme="g10">
        <Grid className="offset">
          <Column lg={{ start: 4, end: 16 }} md={{ start: 2, end: 9 }} sm={4}>
            <Search
              light
              size="lg"
              id="explore"
              placeholder="Explore"
              labelText=""
              value={this.state.search}
              onChange={this.handleInputChange.bind(this)}
            />

            <div style={{ marginTop: '10px', marginBottom: '50px' }}>
              {Object.keys(TAGS).map((item, key) => (
                <Tag
                  key={key}
                  filter={this.state.filter[item]}
                  type="cool-gray"
                  className={'explore-tags ' + item}
                  onClose={this.onCloseTag.bind(this, item)}
                  onClick={this.onClickTag.bind(this, item)}>
                  {TAGS[item]}
                </Tag>
              ))}
              <Tag type="warm-gray" className="explore-tags number-tag">
                {this.state.number}
              </Tag>
            </div>

            {this.state.data.map((item, key) => (
              <React.Fragment key={key}>
                {item.render && <Paper props={item} />}
              </React.Fragment>
            ))}
          </Column>
        </Grid>
      </Theme>
    );
  }
}

export default PublicationsPage;
