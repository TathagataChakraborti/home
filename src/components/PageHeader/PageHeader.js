import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderContainer,
  Theme,
} from '@carbon/react';
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

class PageHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      current: 'home',
      home: true,
      research: false,
      publications: false,
      patents: false,
      talks: false,
      awards: false,
      news: false,
      thesis: false,
    };
  }

  onClickTab = (name, e) => {
    const old = this.state.current;
    const current = name;

    this.setState({
      ...this.state,
      current: current,
      [old]: false,
      [current]: true,
    });
  };

  render() {
    return (
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Theme theme={this.state.current === 'home' && 'g100'}>
            <Header aria-label="">
              <SkipToContent />
              <HeaderMenuButton
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                aria-label="Header Area"
              />
              <HeaderName element={Link} to="/" prefix="Tathagata's">
                Home
              </HeaderName>
              <HeaderNavigation aria-label="">
                <HeaderMenuItem element={Link} to="/ibm">
                  IBM Research AI
                </HeaderMenuItem>
              </HeaderNavigation>
              <SideNav
                aria-label="Navigation Options"
                expanded={isSideNavExpanded}
                isPersistent={true}
                isRail={true}>
                <SideNavItems>
                  <SideNavLink
                    element={Link}
                    to="/"
                    renderIcon={Home}
                    children="Home"
                    onClick={this.onClickTab.bind(this, 'home')}
                    isActive={this.state.home}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/research"
                    renderIcon={Microscope}
                    children="Research"
                    onClick={this.onClickTab.bind(this, 'research')}
                    isActive={this.state.research}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/publications"
                    renderIcon={Report}
                    children="Publications"
                    onClick={this.onClickTab.bind(this, 'publications')}
                    isActive={this.state.publications}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/thesis"
                    renderIcon={Education}
                    children="Thesis"
                    onClick={this.onClickTab.bind(this, 'thesis')}
                    isActive={this.state.thesis}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/patents"
                    renderIcon={Rule}
                    children="Patents"
                    onClick={this.onClickTab.bind(this, 'patents')}
                    isActive={this.state.patents}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/talks"
                    renderIcon={PresentationFile}
                    children="Talks"
                    onClick={this.onClickTab.bind(this, 'talks')}
                    isActive={this.state.talks}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/awards"
                    renderIcon={Trophy}
                    children="Awards"
                    onClick={this.onClickTab.bind(this, 'awards')}
                    isActive={this.state.awards}
                    large
                  />
                  <SideNavLink
                    element={Link}
                    to="/news"
                    renderIcon={Bullhorn}
                    children="News"
                    onClick={this.onClickTab.bind(this, 'news')}
                    isActive={this.state.news}
                    large
                  />
                </SideNavItems>
              </SideNav>
            </Header>
          </Theme>
        )}
      />
    );
  }
}

export default PageHeader;
