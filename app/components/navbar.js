import React from 'react';
import { Icon, SideNav, SideNavItem } from 'react-materialize';

export const navbar = () => {
  return (
    <div className="navbar">
      <SideNav
        trigger={
          <a>
            <Icon>more_vert</Icon>
          </a>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          edge="left"
          user={{
            background:
              'https://78.media.tumblr.com/6340c283ac76139b339828ae26eab365/tumblr_nnalyaDSle1qzwmsso1_500.jpg',
            name: 'Matt Ferguson',
            email: 'mdfergus@gmail.com'
          }}
        />
        <SideNavItem icon="art_track">About this project</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SideNavItem>
      </SideNav>
    </div>
  );
};

export default navbar;