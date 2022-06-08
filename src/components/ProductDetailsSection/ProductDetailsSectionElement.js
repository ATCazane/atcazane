import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const DetailsContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const ProductIcon = styled.img`
  height: 260px;
  width: 460px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 160px;
    width: 260px;
  }
`;

export const DetailsWrapper = styled.div`
  padding-top: 64px;
  color: #fff;
  text-align: center;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const ProductH1 = styled.div`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProductDescriptionRow = styled.tr`
  text-align: left;
`;

export const ProductDescriptionTable = styled.table`
  justify-content: left;
  border-spacing: 50px 0;
`;

export const ProductPTitle = styled.td`
  font-size: 1.5rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProductP = styled.td`
  font-size: 1.5rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProductP1 = styled.p`
  font-size: 1.2rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
