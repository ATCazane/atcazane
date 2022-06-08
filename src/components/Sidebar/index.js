import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Selector,
} from "./SidebarElements";
import { Strings } from "./Strings";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  handleLanguageChange,
  lang,
}) => {
  const languageOptions = [
    { label: "hu", value: "hu" },
    { label: "ro", value: "ro" },
  ];

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleSidebar}
          >
            {Strings1.about}
          </SidebarLink>
          <SidebarLink
            to="advantages"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleSidebar}
          >
            {Strings1.advantages}
          </SidebarLink>
          <SidebarLink
            to="products"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleSidebar}
          >
            {Strings1.products}
          </SidebarLink>
          <SidebarLink
            to="gallery"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleSidebar}
          >
            {Strings1.gallery}
          </SidebarLink>
          <SidebarLink
            to="contacts"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleSidebar}
          >
            {Strings1.contacts}
          </SidebarLink>

          <Selector
            options={languageOptions}
            defaultValue={languageOptions[1]}
            isSearchable={false}
            onChange={handleLanguageChange}
          />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
