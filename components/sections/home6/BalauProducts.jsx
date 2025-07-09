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
export default function BalauProducts() {
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Yellow balau Products
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
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/balau-decking.png"
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
                      Built for strength and style in high-traffic areas like
                      patios, pool decks, walkways, and boardwalks. Naturally
                      resists rot, insects, and decay, offering long-term
                      performance with minimal upkeep.
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
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/balau-cladding.png"
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
                      Enhances exterior walls, soffits, and facades with warm
                      golden tones and lasting protection. Durable against harsh
                      weather ideal for both residential and commercial
                      exteriors.
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
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/balau-boards.png"
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
                      Great for furniture, framing, benches, gates, and
                      heavy-duty joinery. Known for strength, stability, and a
                      clean grain that brings natural beauty to every project.
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
