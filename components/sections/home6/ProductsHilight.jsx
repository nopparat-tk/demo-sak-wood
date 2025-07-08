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
      slidesPerView: 2,
    },
    1350: {
      slidesPerView: 2,
    },
  },
};
export default function ProductsHilight() {
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Our Products
            </h2>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-xl-6">
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
                        src="assets/images/products/highlight/flooring-solutions.png"
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
                      <Link href="testimonials">Flooring Solutions</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Teak Parquet
                      </span>{" "}
                      is an excellent choice for creating stunning indoor
                      designs. It looks nice and is really resilient. <br />{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Teak flooring
                      </span>{" "}
                      features sturdy, robust boards that are ideal for creating
                      beautiful, long-lasting home interiors. Teak Decking is
                      effective resistant water, rot, and insects when used
                      outdoors. It's ideal for decks, patios, and poolsides
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
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
                        src="assets/images/products/highlight/wall-panels.png"
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
                      <Link href="testimonials">Wall Panels</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Teak cladding
                      </span>{" "}
                      adds natural beauty and warmth to any wall. It's a stylish
                      and durable solution for home design, perfect for feature
                      walls, ceilings, headboards, indoor paneling, and feature
                      walls in living rooms, bedrooms, and lobbies.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-xl-6">
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
                        src="assets/images/products/highlight/boards.png"
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
                      <Link href="testimonials">Boards</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Premium{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Teak Wood Boards
                      </span>{" "}
                      and{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Finger Joint Boards{" "}
                      </span>{" "}
                      are strong and stylish, making them ideal for a variety of
                      applications. These boards are ideal for furniture, stair
                      treads, shelving, cabinets, wall panels, and door frames,
                      providing durability, stability, and a sophisticated
                      appearance to any interior project.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
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
                        src="assets/images/products/highlight/accessories.png"
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
                      <Link href="testimonials">Accessories</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Teak skirting
                      </span>{" "}
                      creates a neat and attractive finish where walls meet
                      floors, providing both protection and a polished final
                      touch. Ideal for living rooms, hallways, bedrooms, and
                      offices, it conceals floor gaps while improving the
                      overall appearance of any interior area.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-9 col-sm-12">
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
                        src="assets/images/products/highlight/boards.png"
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
                      <Link href="testimonials">Yellow Balau</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      {" "}
                      Is a long-lasting, weather-resistant hardwood suitable for
                      both indoor and outdoor use.
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        {" "}
                        Decking
                      </span>{" "}
                      is suitable for patios, walkways, and high-traffic areas.{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        Cladding{" "}
                      </span>{" "}
                      provides warm golden tones to the walls while keeping them
                      protected from the weather.
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        {" "}
                        Boards{" "}
                      </span>{" "}
                      provide great stability and long-term performance for
                      furniture, framing, and heavy-duty woodwork, all while
                      maintaining their natural beauty.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="testimonial-one__top">
            <div className="row">
              <div className="col-xl-6">
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
                    <div className="testimonial-two__shape-1">
                      <img
                        src="assets/images/shapes/testimonial-two-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-two__icon">
                      <img
                        src="assets/images/products/parquet.svg"
                        alt=""
                      ></img>
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{ marginTop: "18px", fontSize: "24px" }}
                    >
                      <Link href="testimonials">Teak Parquet</Link>
                    </h3>

                    <p className="testimonial-two__sub-title">
                      A Legacy of Tangible Beauty
                    </p>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our parquet is the foundation of a luxurious interior. Its
                      value lies in its substantial thickness—a mark of heirloom
                      quality proven by time, as seen in historic landmarks like
                      the magnificent Mrigadayavan Palace, built from the same
                      teak over a century ago.
                    </p>
                    <h3 className="testimonial-two__name">
                      16 200 - 22 800 руб / м2
                    </h3>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
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
                    <div className="testimonial-two__shape-1">
                      <img
                        src="assets/images/shapes/testimonial-two-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-two__icon">
                      <img
                        src="assets/images/products/parquet.svg"
                        alt=""
                      ></img>
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{ marginTop: "18px", fontSize: "24px" }}
                    >
                      <Link href="testimonials">Teak Parquet</Link>
                    </h3>

                    <p className="testimonial-two__sub-title">
                      A Legacy of Tangible Beauty
                    </p>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our parquet is the foundation of a luxurious interior. Its
                      value lies in its substantial thickness—a mark of heirloom
                      quality proven by time, as seen in historic landmarks like
                      the magnificent Mrigadayavan Palace, built from the same
                      teak over a century ago.
                    </p>
                    <h3 className="testimonial-two__name">
                      16 200 - 22 800 руб / м2
                    </h3>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="about" className="thm-btn">
                        Get a consultation{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
