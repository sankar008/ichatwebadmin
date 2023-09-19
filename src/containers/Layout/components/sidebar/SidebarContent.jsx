import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorBorder, colorBackground, colorHover } from '@/utils/palette';
import { left } from '@/utils/directions';
import SidebarLink, { SidebarNavLink, SidebarLinkTitle } from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, changeToLight, changeToDark, collapse,
}) => (
  <SidebarContentWrap collapse={collapse}>
    <SidebarBlock collapse={collapse}>
      <SidebarLink
        title="Dashboard"
        icon="home"
        route="/dashboard_page"
        onClick={onClick}
      />
      <SidebarLink
        title="Table"
        icon="store"
        route="/table_page"
        onClick={onClick}
      />
      <SidebarLink
        title="Form"
        icon="store"
        route="/form_page"
        onClick={onClick}
      />
      <SidebarLink
        title="Signup"
        icon="store"
        route="/signup_page"
        onClick={onClick}
      />
      <SidebarCategory title="Link3" icon="link" collapse={collapse}>
        <SidebarLink title="Item1" route="/item1" onClick={onClick} />
        <SidebarLink title="Item2" route="/item2" onClick={onClick} />
        <SidebarLink title="Item3" route="/item3" onClick={onClick} />
        <SidebarLink title="Item4" route="/item4" onClick={onClick} />
      </SidebarCategory>
      <SidebarCategory title="Layout" icon="layers" collapse={collapse}>
        <SidebarNavLink as="button" type="button" onClick={changeToLight}>
          <SidebarLinkTitle>Light Theme</SidebarLinkTitle>
        </SidebarNavLink>
        <SidebarNavLink as="button" type="button" onClick={changeToDark}>
          <SidebarLinkTitle>Dark Theme</SidebarLinkTitle>
        </SidebarNavLink>
      </SidebarCategory>
    </SidebarBlock>
    <SidebarBlock collapse={collapse}>
      <SidebarLink title="Log Out" icon="exit" route="/log_in" />
    </SidebarBlock>
  </SidebarContentWrap>
);

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  collapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  collapse: false,
  onClick: () => {},
};

export default SidebarContent;

// region STYLES

const SidebarContentWrap = styled.div`
  height: 100%;
  overflow: auto;
  padding-top: 0;
  
  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }
  
  @media screen and (min-width: 576px) {
    padding-top: 15px;
    
    ${props => props.collapse && `
      width: 55px;
      overflow: visible !important;
      transition: width 0.3s;
    `}
  }
`;

const SidebarBlock = styled.ul`
  padding: 15px 0;
  border-bottom: 1px solid ${colorBorder};
  list-style-type: none;
  
  &:last-child {
    border: none;
  }
  
  @media screen and (min-width: 576px) {
    
    ${props => props.collapse && `
      & > li > a,
      & > li > button {
        overflow: hidden;
        width: 55px;
        background: ${colorBackground(props)};
        
        span:last-of-type {
          opacity: 0;
          transition: 0.3s;
        }
  
        ${SidebarLinkTitle} {
          position: absolute;
          width: 160px;
          ${left(props)}: 70px;
        }
  
        &:hover {
          background: ${colorHover(props)};
        }
      }
      
      & > li:hover > a,
      & > li:hover > button {
        width: 275px;
        
        span {
          opacity: 1;
        }
      }
    `}
  }
`;

// endregion

