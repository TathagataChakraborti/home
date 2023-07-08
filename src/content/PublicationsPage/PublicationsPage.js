import React from 'react';
import { Paper } from '../../components/Info';
import { Search, Tag, Grid, Column } from '@carbon/react';

import DATA from './Data.js';

class PublicationsPage extends React.Component {
  constructor(props) {
    super();

    var initState = {
      search: '',
      data: DATA,
      number: DATA.length,
      filter: {
        planning: false,
        nlp: false,
        xai: false,
        bpm: false,
        hri: false,
        support: false,
        advml: false,
        ai4code: false,
        vamhri: false,
        humanai: false,
      },
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

      [
        'planning',
        'nlp',
        'xai',
        'bpm',
        'hri',
        'support',
        'advml',
        'ai4code',
        'vamhri',
        'humanai',
      ].forEach(function(tag, i) {
        if (currentState.filter[tag]) item.render = item.render && item[tag];
      });

      if (item.render) cache.push(key);
    });

    if (currentState.filter.lucky) {
      var randomID = cache[Math.floor(Math.random() * cache.length)];

      currentData.forEach(function(item, key) {
        item.render = key === randomID;
      });
    }

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
      <div className="offset">
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <Search
              size="lg"
              id="explore"
              placeholder="Explore"
              labelText=""
              value={this.state.search}
              onChange={this.handleInputChange.bind(this)}
            />

            <div style={{ marginTop: '10px', marginBottom: '50px' }}>
              <Tag
                filter={this.state.filter.humanai}
                type="green"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'humanai')}
                onClick={this.onClickTag.bind(this, 'humanai')}
                name="humanai">
                {' '}
                Human-AI{' '}
              </Tag>
              <Tag
                filter={this.state.filter.planning}
                type="green"
                className="explore-tags planning"
                onClose={this.onCloseTag.bind(this, 'planning')}
                onClick={this.onClickTag.bind(this, 'planning')}
                name="planning">
                {' '}
                Planning{' '}
              </Tag>
              <Tag
                filter={this.state.filter.nlp}
                type="magenta"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'nlp')}
                onClick={this.onClickTag.bind(this, 'nlp')}
                name="nlp">
                {' '}
                NLP{' '}
              </Tag>
              <Tag
                filter={this.state.filter.bpm}
                type="purple"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'bpm')}
                onClick={this.onClickTag.bind(this, 'bpm')}
                name="bpm">
                {' '}
                BPM{' '}
              </Tag>
              <Tag
                filter={this.state.filter.ai4code}
                type="cyan"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'ai4code')}
                onClick={this.onClickTag.bind(this, 'ai4code')}
                name="ai4code">
                {' '}
                AI4Code{' '}
              </Tag>
              <Tag
                filter={this.state.filter.xai}
                type="teal"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'xai')}
                onClick={this.onClickTag.bind(this, 'xai')}
                name="xai">
                {' '}
                XAI{' '}
              </Tag>
              <Tag
                filter={this.state.filter.vamhri}
                type="red"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'vamhri')}
                onClick={this.onClickTag.bind(this, 'vamhri')}
                name="vamhri">
                {' '}
                Mixed Reality{' '}
              </Tag>
              <Tag
                filter={this.state.filter.hri}
                type="red"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'hri')}
                onClick={this.onClickTag.bind(this, 'hri')}
                name="hri">
                {' '}
                HRI{' '}
              </Tag>
              <Tag
                filter={this.state.filter.support}
                type="warm-gray"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'support')}
                onClick={this.onClickTag.bind(this, 'support')}
                name="support">
                {' '}
                Decision Support{' '}
              </Tag>
              <Tag
                filter={this.state.filter.advml}
                type="warm-gray"
                className="explore-tags"
                onClose={this.onCloseTag.bind(this, 'advml')}
                onClick={this.onClickTag.bind(this, 'advml')}
                name="advml">
                {' '}
                Adv ML{' '}
              </Tag>
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
      </div>
    );
  }
}

export default PublicationsPage;
