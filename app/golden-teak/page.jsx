"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function GoldenTeak() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "assets/images/showcase/gold-standard-2.png" },
    { src: "assets/images/showcase/gold-standard-3.png" },
    { src: "assets/images/showcase/gold-standard-4.png" },
    { src: "assets/images/showcase/gold-standard-5.png" },
    { src: "assets/images/showcase/gold-standard-6.png" },
    { src: "assets/images/showcase/gold-standard-7.png" },
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
                The Gold Standard of Royalty
              </h2>
            </div>
            <div className="project-details__img">
              <img src="assets/images/showcase/gold-standard-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">Mrigadayavan Palace</h3>
              <p className="project-details__text-1">
                Known as the "Palace of Love and Hope," stands as an enduring
                symbol of teak’s unmatched ability to preserve beauty across
                generations. This same Thai teak wood is proudly supplied to you
                today by South Asia Kraft Wood.{" "}
              </p>
              <div className="project-details__img-and-faq">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
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
                              Built in 1923 under the reign of King Vajiravudh
                              (Rama VI), the royal residence was constructed
                              entirely from golden teak, a testament to this
                              wood’s natural resilience, beauty, and ability to
                              stand the test of time. Over a century later, the
                              palace’s structure remains as strong and radiant
                              as the day it was built. Teak columns, floors, and
                              decorative elements stand proudly, showcasing
                              teak's legendary resistance to decay, pests, and
                              challenging climates.
                            </p>
                            <br />
                            <p>
                              The enduring strength and luster of the palace’s
                              woodwork prove why Thai teak has long been favored
                              for the buildings of royalty and prestigious
                              projects worldwide. Its natural resilience ensures
                              that interiors stay beautiful and structurally
                              sound through lifetimes. The same quality of teak
                              that graces Mrigadayavan Palace is now available
                              to you through South Asia Kraft Wood. With our
                              premium Thai teak, South Asia Kraft Wood brings
                              the legacy of Mrigadayavan Palace to your modern
                              spaces.
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
                You can enjoy a palatial level of excellence with South Asia
                Kraft Wood's expertly curated and sustainably-grown Thai teak.
                Whether for luxury homes, stately interiors, or architectural
                masterpieces, our teak provides you with royal-grade performance
                and refined elegance, proven over 100 years in one of Thailand's
                most cherished royal landmarks!
              </p>
            </div>
          </div>
        </section>
        <Showcase />
        {/*Project Details End*/}
      </Layout>
    </>
  );
}
