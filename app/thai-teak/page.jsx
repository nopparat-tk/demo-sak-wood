"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SellingPoint from "@/components/sections/home6/SellingPoint";
import Products from "@/components/sections/home6/TeakProducts2";
import Whychoose from "@/components/sections/home6/Whychoose";

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
export default function teak() {
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
      <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Teak">
        {/*Project Details Start*/}
        <SellingPoint />
        {/*About Two Start*/}
        <section className="about-two">
          <div
            className="section-shape-1"
            style={{
              backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="about-two__shape-1 float-bob-x">
            <img src="assets/images/shapes/about-two-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="about-two__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">
                      Northern Thai Teak
                    </h2>
                  </div>
                  <p
                    className="about-two__text"
                    style={{ marginBottom: "17px" }}
                  >
                    Our Northern Thai Teak is more than simply wood, it
                    represents nature's perfection and centuries of skill.
                    Discover the distinct characteristics that make it the
                    world's most desirable timber.
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
                            <h4>Strength from Slow Growth</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                In Northern Thailand, the cooler, drier seasons
                                and higher elevations cause teak trees to
                                develop slowly. This natural process tightens
                                the wood grain, making it extremely solid and
                                sturdy. Slower development also means fewer
                                natural faults, such as knots, which results in
                                lumber that is more durable and strong over
                                time.
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
                            <h4>Perfect Growing Environment</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Our Northern Thai Teak grows in rich mountain
                                soils. These soils are rich in natural minerals,
                                which encourage healthy, even tree development.
                                Teak trees benefit from excellent natural
                                drainage, which eliminates defects. This ideal
                                atmosphere allows the teak to grow strong,
                                durable wood with beautiful colors and a
                                desirable straight grain.
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
                            <h4>Teak Wisdom Through Generations</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                For generations, Thai experts have mastered the
                                technique of teak cultivation. From ancient
                                palaces to temples, Northern teak has always
                                been the preferred material of royalty and
                                expert builders. Our partners, particularly the
                                Forest Industry Organization (FIO), rely on
                                information that has been passed down for
                                centuries. They closely manage forests, cut
                                trees, and harvest at the right moment to ensure
                                maximum quality, fewer knots, and a beautiful,
                                consistent grain in each piece.
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
                            <h4>Ready for Every Project</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Northern Thai Teak, grown in a unique mountain
                                environment, boasts a tighter grain, fewer
                                knots, and exceptional strength. This makes it
                                highly resistant to decay, insects, and harsh
                                weather, ideal for luxury interiors and projects
                                demanding lasting beauty and durability.
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
                    <img src="assets/images/resources/teak-hl.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Two End */}
        <Products />
        <section id="whychoose">
          <Whychoose />
        </section>
      </Layout>
    </>
  );
}
