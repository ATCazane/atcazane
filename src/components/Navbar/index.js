import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  NavLogo,
  NavLogoImage,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Selector,
} from "./NavbarElements";
import { Strings } from "./Strings";

const Navbar = ({
  isSidebarOpen,
  toggleSidebar,
  handleLanguageChange,
  lang,
}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const languageOptions = [
    { label: "hu", value: "hu" },
    { label: "ro", value: "ro" },
  ];

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogoContainer>
              <NavLogoImage to="/" onClick={toggleHome} src={Logo} />
              <NavLogo to="/" onClick={toggleHome}>
                {Strings1.logo}
              </NavLogo>
            </NavLogoContainer>
            <MobileIcon isOpen={isSidebarOpen} onClick={toggleSidebar}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Strings1.about}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="advantages"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Strings1.advantages}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="products"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Strings1.products}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="gallery"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {Strings1.gallery}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contacts"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-500}
                >
                  {Strings1.contacts}
                </NavLinks>
              </NavItem>
              <NavItem>
                <Selector
                  options={languageOptions}
                  defaultValue={languageOptions[1]}
                  isSearchable={false}
                  onChange={handleLanguageChange}
                />
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
