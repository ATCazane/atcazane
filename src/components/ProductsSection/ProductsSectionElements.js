import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #180f07;

  @media screen and (max-width: 1000px) {
    height: 1200px !important;
  }

  @media screen and (max-width: 768px) {
    height: 1700px !important;
  }
`;

export const ProductsWrapper = styled.div`
  max-width: 1000px;
  magrin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProductsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.52);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProductsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProductsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProductsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProductsP = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DownloadLinkWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export const DownloadLink = styled.a`
  cursor: pointer;
  color: #904028;
  font-size: 1.5rem;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
