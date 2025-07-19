"use client";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function SymbolOfTeak() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "/assets/images/showcase/symbol-of-teak-2.png" },
    { src: "/assets/images/showcase/symbol-of-teak-3.png" },
    { src: "/assets/images/showcase/symbol-of-teak-4.png" },
    { src: "/assets/images/showcase/symbol-of-teak-5.png" },
    { src: "/assets/images/showcase/symbol-of-teak-6.png" },
    { src: "/assets/images/showcase/symbol-of-teak-7.png" },
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
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">
                The Symbol of Teak
              </h2>
            </div>
            <div className="project-details__img">
              <img src="/assets/images/showcase/symbol-of-teak-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">
                Symbol of Strength and Prosperity{" "}
              </h3>
              <p className="project-details__text-1">
                For centuries, Thai teak has been the wood of choice for kings,
                aristocrats, and master craftsmen, who believed teak symbolized
                strength, prosperity, and protection.{" "}
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
                              To this day, Thai teak wood remains symbolic for
                              success.{" "}
                            </p>
                            <br />
                            <p>
                              Teak was so prized by European powers that the
                              most prestigious and powerful ships in the British
                              Royal Navy had to be built with teak.
                            </p>
                            <br />
                            <p>
                              Possessing teak was seen not only as a mark of
                              wealth but as an assurance of longevity, security,
                              and prosperity, beliefs that persist today in its
                              use for luxury homes, yachts, and architectural
                              masterpieces around the world.
                            </p>
                            <br />
                          </div>
                          <p>
                            When you choose premium Thai teak from South Asia
                            Kraft Wood, you’re investing in a symbol of
                            excellence, refinement, and status.
                          </p>
                          {/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="project-details__text-3">
                When you choose premium Thai teak from South Asia Kraft Wood,
                you’re investing in a symbol of excellence, refinement, and
                status.
              </p> */}
            </div>
          </div>
        </section>
        <Showcase />
        {/*Project Details End*/}
      </Layout>
    </>
  );
}
