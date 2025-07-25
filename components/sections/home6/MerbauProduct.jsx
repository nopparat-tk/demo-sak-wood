"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};
export default function MerbauProducts() {
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          // style={{
          //   backgroundImage:
          //     " url(/assets/images/shapes/counter-one-shape1.png)",
          // }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Merbau Products
            </h2>
          </div>
          <div className="testimonial-two__bottom">
            <Swiper
              {...swiperOptions}
              className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
            >
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
                <div className="item">
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/merbau-decking.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      Decking
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      Ideal for high-traffic outdoor spaces like <br /> patios,
                      pool areas, balconies, and garden walkways. Its dense,
                      oil-laden wood resists moisture, decay, and insects,
                      keeping its rich color and strength for years. Chosen for
                      both residential and commercial use.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
                <div className="item">
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/merbau-cladding.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      Cladding
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      {/* Use Merbau cladding to transform your environment. Its
                      rich reddish-brown tones develop with time, providing
                      long-lasting beauty and powerful protection. Moisture and
                      termite resistance make it ideal for exterior walls,
                      ceilings, facades, and soffits in residences, resorts, and
                      coastal buildings. */}
                      Merbau cladding in its rich reddish-brown <br />
                      tones develop with time, providing long-lasting beauty and
                      powerful protection. Moisture and termite resistance make
                      it ideal for exterior walls, ceilings, facades, and
                      soffits in residences, resorts, and coastal buildings.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
                <div className="item">
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/merbau-boards.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      Boards
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      A top choice for furniture, cabinetry, <br /> stairs, door
                      frames, and structural builds. Its rich tone, natural
                      strength, and durability in humid conditions make it
                      perfect for both indoor and semi-outdoor use.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
