import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  margin-top: -120px;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeH2 = styled.h2`
  color: #fff;
  font-size: 4.5em !important;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: Bowlby One SC;
  width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 36px !important;
    width: 350px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px !important;
    width: 300px !important;
  }
`;

export const HomeP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px !important;
  text-align: center;
  max-width: 800px !important;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 20px !important;
  }

  @media screen and (max-width: 480px) {
    max-width: 400px !important;
    font-size: 16px !important;
  }
`;

export const HomeP2 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 16px !important;
  text-align: center;
  max-width: 800px !important;

  @media screen and (max-width: 768px) {
    font-size: 14px !important;
  }

  @media screen and (max-width: 480px) {
    max-width: 400px !important;
    font-size: 12px !important;
  }
`;

export const FormWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeInput = styled.input`
  width: 400px;
  height: 50px;
  margin-right: 50px;
  padding-left: 15px;
  border-radius: 30px;
  opacity: 50%;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    width: 400px;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const HomeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 28px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 28px;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#904028" : "#b87333")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30 px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "28px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
