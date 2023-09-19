import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorText,
} from '@/utils/palette';
import TopbarProfile from '../components/topbar/TopbarProfile';
// import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton from '../components/topbar/TopbarSidebarButton';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarLogo,
  TopbarRight,
  TopbarRightOver,
  // TopbarSearchWrap,
} from '../components/topbar/BasicTopbarComponents';

const Topbar = ({
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
}) => (
  <TopbarContainer>
    <TopbarLeft>
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeSidebarVisibility}
      />
      <TopbarLogo to="/" />
    </TopbarLeft>
    <TopbarRight>
      {/* <TopbarSearchWrap>
        <TopbarSearch />
      </TopbarSearchWrap> */}
      <HeaderMenu>
        <li><a href="/">Link 1 </a></li>
        <li><a href="/">Link 2 </a></li>
        <li><a href="/">Link 3 </a></li>
      </HeaderMenu>
      <TopbarRightOver>
        <TopbarProfile />
      </TopbarRightOver>
    </TopbarRight>
  </TopbarContainer>
  );

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;

const HeaderMenu = styled.ul`
  display:flex;
  align-items:center;
  @media only screen and (max-width: 767px) {
    height:60px;
  }
  li {
    list-style:none;
    margin-left:20px;
    @media only screen and (max-width: 767px) {
      margin-left:10px;
    }  
    a {
      color: ${colorText};
    }
  }
`;
