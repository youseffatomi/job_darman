import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";

import { Button } from "@/components/FormComponents";

import { Navigation, Pagination } from "swiper/modules";

import LandingBG from "@/assets/images/landing-bg.png";

export default function Landing() {
  const Slider = [
    {
      header: "Startup 1",
      title: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
    },
    {
      header: "Startup 2",
      title: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
    },
    {
      header: "Startup 3",
      title: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
    },
  ];

  return (
    <section
      className="h-screen grid place-items-center"
      style={{
        background: `url(${LandingBG}) no-repeat`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <Swiper
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "active",
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
        >
          {Slider.map(({ header, title, description }, i) => (
            <SwiperSlide key={i}>
              <div className="w-[736px] grid gap-[28px] place-items-center   mx-auto">
                <p className="font-regular text-[24px]">{header}</p>

                <h2 className="font-regular text-[72px]">{title}</h2>

                <p className="text-center text-[22px]">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* custom pagination */}
        <div id="containerForBullets"></div>

        <div className="mt-[58px] flex justify-center">
          <Button color="#482BE7">Create an Account</Button>
        </div>
      </div>
    </section>
  );
}
