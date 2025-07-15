"use client";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function LegendOfTeak() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "assets/images/showcase/legend-of-teak-2.png" },
    { src: "assets/images/showcase/legend-of-teak-3.png" },
    { src: "assets/images/showcase/legend-of-teak-4.png" },
    { src: "assets/images/showcase/legend-of-teak-5.png" },
    { src: "assets/images/showcase/legend-of-teak-6.png" },
    { src: "assets/images/showcase/legend-of-teak-7.png" },
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
                The Legend of Teak
              </h2>
            </div>
            <div className="project-details__img">
              <img src="assets/images/showcase/legend-of-teak-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">
                Legend of a Live Material{" "}
              </h3>
              <p className="project-details__text-1">
                In Thai folklore, teak is spoken of as a, “living wood,”
                believed to possess a natural spirit or energy within its grain.{" "}
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
                              Many believe that teak carries the essence of the
                              forest, offering protection, good fortune, and
                              harmony to those who build with it. This is why
                              teak was traditionally used for temples, palaces,
                              and sacred spaces.
                            </p>
                            <br />
                            <p>
                              Teak is not simply wood, but a material that
                              "lives," within your home, preserving both beauty
                              and balance for generations.{" "}
                            </p>
                            <br />
                            <p>
                              Now, that same legacy can enhance your home or
                              business with life. From its warm golden tones and
                              rich grain, to its exceptional longevity, South
                              Asia Kraft Wood's Thai teak brings an energy to
                              your interiors and creates an atmosphere that
                              invites balance, well-being, and timeless charm.
                            </p>
                            <br />
                          </div>
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
