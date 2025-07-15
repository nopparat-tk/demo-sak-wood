"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },

  // Pagination
  // pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true,
  //    type: "bullets",
  // },

  // Autoplay
  // autoplay: {
  //    delay: 7000,
  //    disableOnInteraction: false,
  //    speed: 800,
  // },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Main Sllider Four Start */}
      <section className="main-slider-four">
        <Swiper
          {...swiperOptions}
          className="main-slider-four__carousel owl-carousel owl-theme"
        >
          <SwiperSlide>
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(assets/images/backgrounds/slider-1-1.png)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                      <div className="main-slider__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <h2 className="main-slider__title">
                    Your Source for True <br /> Tropical Wood
                  </h2>
                  <div
                    className="text main-slider__text"
                    style={{ paddingBottom: "10px" }}
                  >
                    <p>Selected Premium Thai Teak & Fine Asian Hardwoods</p>
                  </div>
                  {/* <div className="main-slider__btn-box">
                              <Link
                                 href="about"
                                 className="thm-btn main-slider__btn"
                              >
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(assets/images/backgrounds/slider-1-2.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      Where Rarity
                      <br />
                      Meets <span>Artistry</span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Each plank carries the DNA of ancient forests. Our curated
                      collection of exotic hardwoods offers materials of
                      unrivaled quality to transform your space into a living
                      masterpiece.
                    </p>
                  </div>
                  {/* <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div> */}
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(assets/images/backgrounds/slider-1-3.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      Crafting <span>Legacies,</span>
                      <br />
                      Not Just Interiors
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      For architects who design tomorrow’s heritage spaces. Our
                      premium hardwoods don’t just fill a room - they define it,
                      creating environments that resonate with sophistication
                      and permanence.
                    </p>
                  </div>
                  {/* <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div> */}
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(assets/images/backgrounds/slider-1-4.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      Elevated Beyound
                      <br />
                      Ordinary <span>Design</span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      When you desire far greater than average, we deliver
                      materials that match your ambition. Our exclusive Asian
                      hardwood collection empowers you to create spaces that
                      become destinations.
                    </p>
                    <br />
                  </div>
                  {/* <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div> */}
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(assets/images/backgrounds/slider-1-5.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      Renowned Woods
                      <br />
                      <span>Visionary</span> Design
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Where the world's treasured hardwoods meet visionary
                      design, we supply the materials. Wood of this distinction
                      turns your blueprints into breathtaking realities,
                      crafting architectural triumphs that speak to the soul.
                    </p>
                  </div>
                  {/* <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div> */}
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
        </Swiper>
        <div className="main-slider-nav">
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*Main Sllider Start */}
      <ModalVideo
        channel="custom"
        url="assets/images/video/sakw-introduction.mp4"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
