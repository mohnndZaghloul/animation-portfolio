// @ts-nocheck
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { BASE_URL } from "../constants/baseURL";

type image_TP = {
  fieldname: string;
  originalname: string;
  filename: string;
  path: string;
  size: number;
};

const SwiperModal = ({
  modal,
  modalToggler,
  images,
}: {
  modal: boolean;
  modalToggler: any;
  images: image_TP[];
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //stop scroll in body while modal is open
  if (modal) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return (
    <>
      {modal ? (
        <div className="fixed z-50 top-0 left-0 h-screen w-full  flex justify-center items-center">
          <div
            onClick={modalToggler}
            className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full"
          />
          <div className="relative bg-black w-[95vw] sm:w-[80vw] lg:w-[60vw] h-[35vh] sm:h-[70vh] lg:h-[90vh] rounded-xl p-2 overflow-hidden">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 h-[80%] pb-2">
              {images?.map((img) => (
                <SwiperSlide key={img}>
                  {img.mimetype.includes("video") ? (
                    <video
                      className="object-cover h-full mx-auto"
                      autoPlay
                      muted
                      loop>
                      <source
                        src={`${BASE_URL}/${images?.[0].filename}`}
                        type="video/mp4"
                      />
                      <source
                        src={`${BASE_URL}/${images?.[0].filename}`}
                        type="video/ogg"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="object-cover h-full mx-auto"
                      src={`${BASE_URL}/${img?.filename}`}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper h-[20%]">
              {images?.map((img) => (
                <SwiperSlide key={img}>
                  {img.mimetype.includes("video") ? (
                    <video
                      className="object-cover h-full w-full"
                      autoPlay
                      muted
                      loop>
                      <source
                        src={`${BASE_URL}/${images?.[0].filename}`}
                        type="video/mp4"
                      />
                      <source
                        src={`${BASE_URL}/${images?.[0].filename}`}
                        type="video/ogg"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="object-cover h-full w-full"
                      src={`${BASE_URL}/${img?.filename}`}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute z-40 top-4 right-4 w-7 h-7 text-sm font-bold bg-red-600"
              onClick={modalToggler}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SwiperModal;
