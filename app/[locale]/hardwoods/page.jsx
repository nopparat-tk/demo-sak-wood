"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import HardwoodSellPoint from "@/components/sections/home6/HarwoodSellPoint";
import Products from "@/components/sections/home6/TeakProducts";
import Whychoose from "@/components/sections/home6/Whychoose";
import BalauProducts from "@/components/sections/home6/BalauProducts";
import MerbauProducts from "@/components/sections/home6/MerbauProduct";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
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
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 5,
    },
    1350: {
      slidesPerView: 5,
    },
  },
};
export default function hardwoods() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Merbau">
        {/*Project Details Start*/}
        <HardwoodSellPoint />
        {/*About Two Start*/}
        <section className="about-two">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="about-two__shape-1 float-bob-x">
            <img src="/assets/images/shapes/about-two-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="about-two__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">
                      Tropical Hardwoods
                    </h2>
                  </div>
                  <p
                    className="about-two__text"
                    style={{ marginBottom: "17px" }}
                  >
                    When strength meets style, Yellow Balau and Merbau take the
                    lead. These tropical hardwoods are designed for use under
                    harsh conditions while adding rich, natural beauty to any
                    project, indoors or outdoors.
                  </p>
                  <div className="faq-page__left">
                    <div
                      className="project-details__faq-box"
                      style={{ counterReset: "count" }}
                    >
                      <div
                        className="accrodion-grp faq-one-accrodion"
                        data-grp-name="faq-one-accrodion-1"
                      >
                        <div
                          className={
                            isActive.key == 1 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="accrodion-title">
                            <h4>Remarkable Strength & Stability</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Yellow Balau offers impressive density and
                                resilience, made to perform under the most
                                demanding conditions. Merbau, with its superior
                                dimensional stability, resists warping and wear.
                                Both species are ideal for structural
                                applications as well as daily use.
                              </p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 2 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="accrodion-title">
                            <h4>Naturally Durable for Generations</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                With outstanding resistance to decay, rot, and
                                insects, these hardwoods are designed to endure
                                the elements. Whether used outdoors or in humid
                                environments, Yellow Balau and Merbau deliver
                                decades of dependable service with minimal
                                maintenance.
                              </p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 3 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="accrodion-title">
                            <h4>Elegant Beauty That Matures Over Time</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Yellow Balau showcases a fine, consistent grain
                                that contributes an aesthetic allure and soft
                                yellow-brown tones. Merbau offers deep red-brown
                                hues and a smooth, interlocking grain that
                                brings depth and stunning colors. Both woods
                                elevate interiors and exteriors with their
                                unique charms.
                              </p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 4 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="accrodion-title">
                            <h4>Responsibly Sourced, Exceptionally Crafted</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Our Yellow Balau and Merbau are carefully
                                selected from trusted Southeast Asian regions,
                                in partnership with ethical producers known for
                                consistent quality. Every piece is thoughtfully
                                processed to meet the highest standards of form
                                and function.
                              </p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="about-two__right">
                  <div className="about-two__img">
                    <img
                      src="/assets/images/resources/hardwoods-hl.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Two End */}
        <BalauProducts />
        <MerbauProducts />
        <section id="whychoose">
          <Whychoose />
        </section>
      </Layout>
    </>
  );
}
