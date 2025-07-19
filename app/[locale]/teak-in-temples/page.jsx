"use client";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function TeakInTemples() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "/assets/images/showcase/teak-in-temples-2.png" },
    { src: "/assets/images/showcase/teak-in-temples-3.png" },
    { src: "/assets/images/showcase/teak-in-temples-4.png" },
    { src: "/assets/images/showcase/teak-in-temples-5.png" },
    { src: "/assets/images/showcase/teak-in-temples-6.png" },
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
            <div className="project-details__img">
              <img src="/assets/images/showcase/teak-in-temples-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">
                Architecture that Inspires{" "}
              </h3>
              <p className="project-details__text-1">
                Throughout history, Thailand’s temples and spiritual centers
                have showcased the profound beauty of Thai teak, the same
                premium wood now available for your home or project through
                South Asia Kraft Wood.{" "}
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
                              and sacred spaces. Teak is not simply wood, but a
                              material that "lives," within your home,
                              preserving both beauty and balance for
                              generations.{" "}
                            </p>
                            <br />
                            <p>
                              Temples like Wat Benchamabophit (The Marble
                              Temple) in Bangkok are admired worldwide for their
                              rich, golden teak wood doors, windows, and
                              intricate carvings.
                            </p>
                            <br />
                            <p>
                              Now, you can bring this level of beauty and
                              craftsmanship into your own space. Thai teak is
                              visually stunning with glowing grain patterns and
                              lovely tones. Perfect for premium Russian
                              interiors, whether in luxury homes, hotels, or
                              developments, our Thai teak inspires awe and
                              reverence with the lustre and sophistication of
                              this golden wood.
                            </p>
                            <br />
                            <p>
                              With South Asia Kraft Wood, the elegance of sacred
                              architecture will grace your home or business for
                              lifetimes.
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
