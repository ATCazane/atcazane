import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Select from "react-select";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogoContainer = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  margin-left: -30px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  font-family: Azonix;
`;

export const NavLogoImage = styled.img`
  margin-top: 30px;
  cursor: pointer;
  margin-left: 24px;
  width: 150px;
  height: 150px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    opacity: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid #904028 !important;
  }
`;

export const Selector = styled(Select)`
margin-top: 20px;
color: black;
`
