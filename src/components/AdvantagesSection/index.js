import React from "react";
import {
  AdvantagesContainer,
  AdvantagesWrapper,
  AdvantagesRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  EnumerationHolder,
  AdvantagesH2,
  AdvantagesListItem,
  ImgWrap,
  Img,
} from "./AdvantagesSectionElements";
import { Strings } from "./Strings";

import Image from "../../images/at.jpg";

const AdvantagesSection = ({ lang }) => {
  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;
  return (
    <>
      <AdvantagesContainer lightBg={true} id="advantages">
        <AdvantagesWrapper>
          <AdvantagesRow imgStart={true}>
            <Column1>
              <TextWrapper
                animateOut="fadeOutRigth"
                animateIn="fadeInRight"
                offset={0}
              >
                <TopLine>{Strings1.topLine}</TopLine>
                <Heading lightText={false}>{Strings1.headLine}</Heading>
                <EnumerationHolder>
                  <AdvantagesH2>{Strings1.advH}</AdvantagesH2>
                  <AdvantagesListItem>{Strings1.adv1}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv2}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv3}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv4}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv5}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv6}</AdvantagesListItem>
                  <AdvantagesListItem>{Strings1.adv7}</AdvantagesListItem>
                </EnumerationHolder>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} />
              </ImgWrap>
            </Column2>
          </AdvantagesRow>
        </AdvantagesWrapper>
      </AdvantagesContainer>
    </>
  );
};

export default AdvantagesSection;
