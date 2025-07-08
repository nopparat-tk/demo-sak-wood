"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,

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
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
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
export default function Showcase() {
  return (
    <>
      {/*Start Service Style4*/}
      <section
        className="service-style4"
        style={{ padding: "120px 0", backgroundColor: "#3F2021" }}
      >
        <div
          className="services-three__bg"
          style={{
            backgroundImage:
              " url(assets/images/shapes/site-footer-shape-1.jpg)",
          }}
        ></div>
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Discover Our Showcase of <br />
              Enduring Masterpieces
            </h2>
          </div>

          <Swiper
            {...swiperOptions}
            className="service-style4__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-1.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">British Embassy Bangkok </Link>
                    </h3>
                    <p>
                      South Asia Kraft Wood is honored to bring you the same
                      premium Thai teak...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-2.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Mrigadayavan Palace</Link>
                    </h3>
                    <p>
                      known as the "Palace of Love and Hope," stands as an
                      enduring symbol of teak’s...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-3.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">
                        Symbol of Strength and Prosperity
                      </Link>
                    </h3>
                    <p>
                      For centuries, Thai teak has been the wood of choice for
                      kings, aristocrats, and...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-4.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Legend of a Live Material</Link>
                    </h3>
                    <p>
                      In Thai folklore, teak is spoken of as a, “living wood,”
                      believed to possess a...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-5.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Architecture that Inspires</Link>
                    </h3>
                    <p>
                      Throughout history, Thailand’s temples and spiritual
                      centers have showcased...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-1.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">British Embassy Bangkok </Link>
                    </h3>
                    <p>
                      South Asia Kraft Wood is honored to bring you the same
                      premium Thai teak...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-2.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Mrigadayavan Palace</Link>
                    </h3>
                    <p>
                      known as the "Palace of Love and Hope," stands as an
                      enduring symbol of teak’s...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-3.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">
                        Symbol of Strength and Prosperity
                      </Link>
                    </h3>
                    <p>
                      For centuries, Thai teak has been the wood of choice for
                      kings, aristocrats, and...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-4.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Legend of a Live Material</Link>
                    </h3>
                    <p>
                      In Thai folklore, teak is spoken of as a, “living wood,”
                      believed to possess a...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="assets/images/resources/showcase-5.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="#showcase">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="#showcase">Architecture that Inspires</Link>
                    </h3>
                    <p>
                      Throughout history, Thailand’s temples and spiritual
                      centers have showcased...
                    </p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="main-slider-nav"
          style={{ top: "55%", padding: "0 60px" }}
        >
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*End Service Style4*/}
    </>
  );
}
