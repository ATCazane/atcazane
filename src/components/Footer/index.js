import React from "react";
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterItem,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";
import { Strings } from "./Strings";

const Footer = ({ lang }) => {

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <FooterContainer id="contacts">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{Strings1.title1}</FooterLinkTitle>
              <FooterItem>E-mail: atcazane@gmail.com</FooterItem>
              <FooterItem>Telefon: 0744593207</FooterItem>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{Strings1.title2}</FooterLinkTitle>
              <FooterLink href="https://www.facebook.com" target="_blank">
                Facebook
              </FooterLink>
              <FooterLink href="https://www.instagram.com" target="_blank">
                Instagram
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">{Strings1.logo}</SocialLogo>
            <WebsiteRights>
            {Strings1.logo} © {new Date().getFullYear()} {Strings1.rights}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
