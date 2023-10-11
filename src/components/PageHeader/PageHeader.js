import React from 'react';
import { Link } from 'react-router-dom';
import {
  OUTLINE,
  getHomeName,
  getTheme,
  transformRouteString,
} from '../../App.js';
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

class PageHeader extends React.Component {
  constructor(props) {
    super();

    const local_url_split = window.location.href.split('/#/');
    const endpoint = local_url_split[local_url_split.length - 1];
    const label =
      endpoint === '' ? transformRouteString(getHomeName()) : endpoint;

    this.state = {
      current: label,
      [label]: true,
    };
  }

  onClickTab = name => {
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
          <Theme theme={this.state.current ? getTheme(this.state.current) : ''}>
            <Header aria-label="">
              <SkipToContent />
              <HeaderMenuButton
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                aria-label="Header Area"
              />
              <HeaderName
                as={Link}
                to="/"
                onClick={this.onClickTab.bind(
                  this,
                  transformRouteString(getHomeName())
                )}
                prefix="Tathagata's">
                Home
              </HeaderName>
              <HeaderNavigation aria-label="">
                <HeaderMenuItem
                  target="_blank"
                  href="https://www.research.ibm.com/artificial-intelligence"
                  rel="noopener noreferrer">
                  IBM Research AI
                </HeaderMenuItem>
              </HeaderNavigation>
              <SideNav
                aria-label="Navigation Options"
                expanded={isSideNavExpanded}>
                <SideNavItems>
                  {OUTLINE.map(item => {
                    const name = transformRouteString(item.name);
                    return (
                      <SideNavLink
                        key={name}
                        as={Link}
                        to={'/' + name}
                        children={item.name}
                        onClick={this.onClickTab.bind(this, name)}
                        isActive={this.state[name]}
                        renderIcon={item.icon}
                        large={this.state[name]}
                      />
                    );
                  })}
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
