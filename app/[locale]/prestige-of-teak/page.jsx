"use client";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function PrestigeOfTeak() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "assets/images/showcase/prestige-of-teak-2.png" },
    { src: "assets/images/showcase/prestige-of-teak-3.png" },
    { src: "assets/images/showcase/prestige-of-teak-4.png" },
    { src: "assets/images/showcase/prestige-of-teak-5.png" },
    { src: "assets/images/showcase/prestige-of-teak-6.png" },
  ];

  const handleImagePopup = (i) => {
    setSlideIndex(i);
    setSlideOpen(true);
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        {/*Project Details Start*/}
        <section className="project-details">
          <div
            className="section-shape-1"
            style={{
              backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">
                Global Prestige
              </h2>
            </div>
            <div className="project-details__img">
              <img src="assets/images/showcase/prestige-of-teak-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">
                British Embassy Bangkok
              </h3>{" "}
              <p className="project-details__text-1">
                South Asia Kraft Wood is honored to bring you the same premium
                Thai teak that graces one of the most distinguished diplomatic
                residences in Southeast Asia, the prestigious British Embassy in
                Bangkok.{" "}
              </p>
              {/* <p className="project-details__text-2">
                The choice of Thai teak ensures the embassy benefits from a
                material renowned for its strength, resistance to wear, and
                natural beauty, ideal for spaces that demand both performance
                and aesthetics. Thai teak is naturally imbued with protective
                oils that strengthen the wood to resist moisture, pests, and
                everyday wear, making it ideal for modern homes, embassies, and
                luxury developments worldwide. It is perfect for Russia’s cold
                winters and dry indoor environments, which would damage lesser
                materials. It is teak wood’s durability and refined character
                that have made this wood synonymous with sophistication in elite
                projects across the globe.{" "}
              </p> */}
              <div className="project-details__img-and-faq">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    {/* <div className="project-details__img-box-img">
                      <img
                        src="assets/images/showcase/prestige-of-teak-2.png"
                        alt=""
                      />
                    </div> */}
                    <div className="projects-one__single">
                      <div className="projects-one__img-box">
                        <div className="projects-one__img">
                          <img
                            onClick={() => handleImagePopup(0)}
                            style={{ cursor: "pointer" }}
                            src={images[0].src}
                            alt=""
                          />
                        </div>
                        <div className="projects-one__arrow">
                          <button
                            onClick={() => handleImagePopup(0)}
                            className="img-popup"
                          >
                            <span className="icon-up-right-arrow-1"></span>
                          </button>
                        </div>
                        <Lightbox
                          open={slideOpen}
                          close={() => setSlideOpen(false)}
                          slides={images}
                          index={slideIndex}
                          plugins={[Zoom]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="project-details__faq-box">
                      <div
                        className="accrodion-grp"
                        data-grp-name="faq-one-accrodion"
                      >
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              For this project, only the finest materials were
                              chosen to reflect the embassy's commitment to
                              elegance, sustainability, and refined design. The
                              embassy features our Thai teak flooring, crafted
                              from premium, sustainably grown Thai teak, a wood
                              celebrated worldwide. Thai plantation teak offers
                              a rare blend of beauty and resilience,
                              transforming any space into a statement of
                              enduring luxury.
                            </p>
                            <br />
                            <p>
                              The choice of Thai teak ensures the embassy
                              benefits from a material renowned for its
                              strength, resistance to wear, and natural beauty,
                              ideal for spaces that demand both performance and
                              aesthetics. Thai teak is naturally imbued with
                              protective oils that strengthen the wood to resist
                              moisture, pests, and everyday wear, making it
                              ideal for modern homes, embassies, and luxury
                              developments worldwide. It is perfect for Russia’s
                              cold winters and dry indoor environments, which
                              would damage lesser materials. It is teak wood’s
                              durability and refined character that have made
                              this wood synonymous with sophistication in elite
                              projects across the globe.
                            </p>
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="project-details__text-3">
                We offer you access to the same world-class teak, known for its
                rich golden color, natural warmth, and unparalleled durability.
                With South Asia Kraft Wood’s meticulously kiln-dried,
                sustainably sourced teak, you can bring the same resilience,
                prestige, and timeless luxury trusted by global institutions to
                your own home or business!
              </p>
            </div>
          </div>
        </section>
        <Showcase />
        {/*Project Details End*/}

        {/*Brand One Start*/}
        {/* <section className="brand-one">
          <div
            className="section-shape-1"
            style={{
              backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <Swiper
              {...swiperOptions}
              className="brand-one__carousel owl-theme owl-carousel"
            >
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-1.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-2.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-3.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-4.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-5.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="brand-one__img">
                    <Link href="#">
                      <img src="assets/images/brand/brand-1-6.png" alt="" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section> */}
        {/*Brand One End*/}
      </Layout>
    </>
  );
}
