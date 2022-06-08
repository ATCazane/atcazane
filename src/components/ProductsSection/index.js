import React from "react";
import {
  ProductsContainer,
  ProductsH1,
  ProductsWrapper,
  ProductsCard,
  ProductsIcon,
  ProductsH2,
  ProductsP,
  DownloadLinkWrapper,
  DownloadLink,
} from "./ProductsSectionElements";
import { ProductData } from "./ProductData";
import { Strings } from "./Strings";

const ProductsSection = ({ toggleDetails, setProductId, lang }) => {
  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <>
      <ProductsContainer id="products">
        <ProductsH1>{Strings1.title}</ProductsH1>
        <ProductsWrapper>
          {ProductData.map((p) => (
            <ProductsCard
              key={p.id}
              onClick={() => {
                toggleDetails();
                setProductId(p.id);
              }}
            >
              <ProductsIcon src={p.img} />
              <ProductsH2>{p.type === "controller" ? (lang === "hu" ? p.name_hu : p.name_ro) : p.name}</ProductsH2>
            </ProductsCard>
          ))}
        </ProductsWrapper>
        <DownloadLinkWrapper>
          <ProductsP>{Strings1.downloadP1} </ProductsP>
          <DownloadLink href={lang === "hu" ? "/files/AT-Kazan.pdf" : "/files/CazaneAT.docx"} target="_blank" download>
            {Strings1.download}
          </DownloadLink>
        </DownloadLinkWrapper>
        { lang === "hu" ? (
        <DownloadLinkWrapper>
          <ProductsP>{Strings1.downloadP2}</ProductsP>
          <DownloadLink href="/files/Futokorok.pdf" target="_blank" download>
            {Strings1.download}
          </DownloadLink>
        </DownloadLinkWrapper>
        ):(<></>)}
      </ProductsContainer>
    </>
  );
};

export default ProductsSection;
