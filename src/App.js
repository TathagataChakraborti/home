import React, { Component } from 'react';
import './app.scss';

import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './content/HomePage';
import ResearchPage from './content/ResearchPage';
import PublicationsPage from './content/PublicationsPage';
import ThesisPage from './content/ThesisPage';
import PatentsPage from './content/PatentsPage';
import TalksPage from './content/TalksPage';
import AwardsPage from './content/AwardsPage';
import NewsPage from './content/NewsPage';

import {
  Home,
  Microscope,
  Report,
  Rule,
  PresentationFile,
  Trophy,
  Bullhorn,
  Education,
} from '@carbon/icons-react';

const OUTLINE = [
  {
    name: 'Home',
    theme: 'g100',
    component: HomePage,
    icon: Home,
    home: true,
  },
  {
    name: 'Research',
    theme: 'g10',
    icon: Microscope,
    component: ResearchPage,
  },
  {
    name: 'Publications',
    theme: 'g10',
    icon: Report,
    component: PublicationsPage,
  },
  {
    name: 'Thesis',
    theme: 'white',
    icon: Education,
    component: ThesisPage,
  },
  {
    name: 'Patents',
    theme: 'white',
    icon: Rule,
    component: PatentsPage,
  },
  {
    name: 'Talks',
    theme: 'white',
    icon: PresentationFile,
    component: TalksPage,
  },
  {
    name: 'Awards',
    theme: 'white',
    icon: Trophy,
    component: AwardsPage,
  },
  {
    name: 'News',
    theme: 'white',
    icon: Bullhorn,
    component: NewsPage,
  },
];

const getHomeName = e => OUTLINE.find(item => item.home).name;
const getTheme = name =>
  OUTLINE.find(item => transformRouteString(item.name) === name).theme;
const transformRouteString = string => string.toLowerCase();
const isHome = name => name === getHomeName();
const getComponent = name => OUTLINE.find(item => item.name === name).component;

class App extends Component {
  render() {
    return (
      <>
        <Content>
          <Switch>
            <Route exact path="/" component={getComponent(getHomeName())} />
            {OUTLINE.map(item => (
              <Route
                exact
                key={item}
                path={'/' + transformRouteString(item.name)}
                component={getComponent(item.name)}
              />
            ))}
          </Switch>
        </Content>
      </>
    );
  }
}

export { App, OUTLINE, getHomeName, getTheme, isHome, transformRouteString };
