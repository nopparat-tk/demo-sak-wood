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
      <section className="testimonial-two" style={{ padding: "60px 0 0" }}>
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
                      <Link href="#whychoose" className="thm-btn">
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
                      <Link href="#whychoose" className="thm-btn">
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
                      <img src="assets/images/products/Timber.png" alt="" />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Teak Sawn Timbers</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our Premium Teak Wood Boards are strong and stylish. They
                      are ideal for{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        furniture, structural applications, and built-in
                        projects,
                      </span>{" "}
                      providing durability, stability, and a sophisticated
                      appearance for any project.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="#whychoose" className="thm-btn">
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
                        src="assets/images/products/Finger-Joint.png"
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
                      <Link href="testimonials">Finger-Joint Products</Link>
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
                        Teak Finger Jointed Boards
                      </span>{" "}
                      offer excellent strength and stability due to their
                      finger-jointed design. With their longer lengths, they are
                      ideal for demanding applications like extended
                      countertops, large tabletops, stair treads, or continuous
                      wall panels, providing seamless beauty and reliable
                      performance.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="#whychoose" className="thm-btn">
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
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
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
                        src="assets/images/products/highlight/hardwoods.png"
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
                      <Link href="testimonials">Tropical Hardwoods</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      {" "}
                      We are supplying various species of tropical hardwoods for
                      projects of any complexity.{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        MERBAU
                      </span>{" "}
                      and{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "var(--tecture-white)",
                        }}
                      >
                        YELLOW BALAU{" "}
                      </span>
                      from Malaysia are the long-lasting, weather-resistant
                      hardwoods suitable for both indoor and outdoor use.
                      Reddish Merbau decking is suitable for patios, walkways,
                      and high-traffic areas. Durable Yellow Balau cladding
                      provides warm golden tones to the walls while keeping them
                      protected from the weather.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="#whychoose" className="thm-btn">
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
