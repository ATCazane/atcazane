import styled from "styled-components";

export const GalleryContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  z-index: 3;
`;

export const GalleryH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-top: 64px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;