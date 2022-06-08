import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoSectionElements";
import { Strings } from "./Strings";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  img,
  alt,
  lang
}) => {

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{Strings1.topLine}</TopLine>
                <Heading lightText={lightText}>{Strings1.headline}</Heading>
                <Subtitle darkText={darkText}>{Strings1.description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
