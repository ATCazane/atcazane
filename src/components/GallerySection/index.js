import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { GalleryContainer, GalleryH1 } from "./GallerySectionElements";
import Carousel, { Modal, ModalGateway } from "react-images";
import { images } from "./images";
import { Strings } from "./Strings";

const GallerySection = ({ lang }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const Strings1 = lang === "hu" ? Strings.hu : Strings.ro;

  return (
    <GalleryContainer id="gallery">
      <GalleryH1>{Strings1.title}</GalleryH1>
      <Gallery photos={images} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </GalleryContainer>
  );
};

export default GallerySection;
