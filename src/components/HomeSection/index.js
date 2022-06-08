import axios from "axios";
import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH2,
  HomeP,
  HomeP2,
  FormWrapper,
  HomeInput,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HomeSectionElements";
import { Strings } from "./Strings";

const HomeSection = ({ lang }) => {
  const [hover, setHover] = useState(false);
  const [email, setEmail] = useState("");

  const onHover = () => {
    setHover(!hover);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("lang", lang);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    await axios
      .post("https://mighty-tor-30531.herokuapp.com/send/", params, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH2>{Strings1.header}</HomeH2>
        <HomeP>{Strings1.paragraph1}</HomeP>
        <FormWrapper>
          <HomeInput
            placeholder="E-mail"
            type="text"
            required
            onChange={handleEmailChange}
          />
          <HomeBtnWrapper>
            <Button
              type="submit"
              onClick={handleSubmit}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              big="true"
              primary="true"
              dark="true"
              fontBig="true"
            >
              {Strings1.button} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </FormWrapper>
        <HomeP2>{Strings1.paragraph2}</HomeP2>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
