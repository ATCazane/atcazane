import React from "react";
import { ProductData } from "../ProductsSection/ProductData";
import {
  DetailsContainer,
  Icon,
  CloseIcon,
  DetailsWrapper,
  ProductH1,
  ProductDescriptionTable,
  ProductDescriptionRow,
  ProductPTitle,
  ProductP,
  ProductIcon,
  ProductP1
} from "./ProductDetailsSectionElement";
import { Strings } from "./Strings";

const ProductDetailsSection = ({
  isDetailsOpen,
  toggleDetails,
  productId,
  lang,
}) => {
  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <DetailsContainer isOpen={isDetailsOpen} onClick={toggleDetails}>
      <Icon onClick={toggleDetails}>
        <CloseIcon />
      </Icon>
      <DetailsWrapper>
        <ProductH1>
          {ProductData.at(productId - 1).type === "controller"
            ? lang === "hu"
              ? ProductData.at(productId - 1).name_hu
              : ProductData.at(productId - 1).name_ro
            : ProductData.at(productId - 1).name}
        </ProductH1>
        <ProductIcon src={ProductData.at(productId - 1).img} />
        {ProductData.at(productId - 1).type === "controller" ? (
          <>
          <ProductP1>{lang === "hu" ? ProductData.at(productId - 1).desc1_hu : ProductData.at(productId - 1).desc1_ro}</ProductP1>
          <ProductP1>{lang === "hu" ? ProductData.at(productId - 1).desc2_hu : ProductData.at(productId - 1).desc2_ro}</ProductP1>
          </>
        ) : (
          <ProductDescriptionTable>
            <tbody>
              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p1}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).power}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p2}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).voltage}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p3}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).consume}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p4}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).intake}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p5}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).wireing}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p6}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).length}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p7}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).weight}</ProductP>
              </ProductDescriptionRow>

              <ProductDescriptionRow>
                <ProductPTitle>{Strings1.p8}</ProductPTitle>
                <ProductP>{ProductData.at(productId - 1).area}</ProductP>
              </ProductDescriptionRow>
            </tbody>
          </ProductDescriptionTable>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default ProductDetailsSection;
