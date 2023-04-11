import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import SwipeableViews from "react-swipeable-views";
const Images = SwipeableViews;
const ImagenCarrousel = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const allImages = images.length;
  const nextImage = () => {
    setCurrentImage((activeImage) => activeImage + 1);
  };

  const previousImage = () => {
    setCurrentImage((activeImage) => activeImage - 1);
  };

  const imageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <Box sx={{ maxWidth: "100%", maxHeight: "100%", flexGrow: 1 }}>
      <Images
        index={currentImage}
        onChangeIndex={imageChange}
        enableMouseEvents
      >
        {images.map((imagen, index) => (
          <div key={index}>
            {Math.abs(currentImage - index) <= allImages ? (
              <div className="w-full h-full p-0 ">
                <GatsbyImage
                  className="z-[1] pointer-events-none rounded-md"
                  image={getImage(imagen.gatsbyImageData)}
                  loading="lazy"
                  alt="me profile"
                  width={"100%"}
                  height={"100%"}
                />
                <div className="w-full aling-middle h-fit z-[2] absolute top-[45%]">
                  {currentImage !== allImages - 1 ? (
                    <button
                      className="float-right font-mono rounded-lg  text-white bg-transparent  h-[4rem] w-[4rem] "
                      size="large"
                      onClick={nextImage}
                      disabled={currentImage === allImages - 1}
                    >
                      <KeyboardArrowRight
                        className="opacity-40 hover:opacity-70"
                        sx={{ height: "100%", width: "100%" }}
                      />
                    </button>
                  ) : null}

                  {currentImage !== 0 ? (
                    <button
                      className="float-left font-mono rounded-lg text-white  h-[4rem] w-[4rem]  "
                      onClick={previousImage}
                      disabled={currentImage === 0}
                    >
                      <KeyboardArrowLeft
                        className="opacity-40 hover:opacity-70"
                        sx={{ height: "100%", width: "100%" }}
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Images>
    </Box>
  );
};

export default ImagenCarrousel;
