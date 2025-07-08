"use client";
import Link from "next/link";
import ProductsHilight from "./ProductsHilight";
export default function HeroProduct() {
  return (
    <>
      {/*About Three Start */}
      <section
        className="welcome-style1"
        style={{ backgroundColor: "#072b31" }}
      >
        <div className="container">
          <div
            className="project-details__content"
            style={{ paddingBottom: "60px" }}
          >
            <div className="row flex-row-reverse">
              <div className="col-xl-6">
                <div className="about-three__left">
                  {/* <div className="section-title text-left sec-title-animation animation-style2">
                    
                  </div> */}
                  <div className="service-details__points-box">
                    <h2 className="section-title__title title-animation">
                      NORTHERN THAI TEAK
                    </h2>
                    <h3
                      className="service-details__points-title"
                      style={{ top: "12px", borderBottom: "none" }}
                    >
                      Characteristics
                    </h3>
                    <ul
                      className="service-details__points-list list-unstyled"
                      style={{
                        marginTop: "30px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingBottom: "25px",
                      }}
                    >
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Rich Golden Color</p>
                      </li>
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Smooth Grain</p>
                      </li>
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Few Knots</p>
                      </li>
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Extra Strong</p>
                      </li>
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Sourced from the Best region</p>
                      </li>
                      <li>
                        <div className="service-details__points-shape"></div>
                        <p>Lasts Many Decades</p>
                      </li>
                    </ul>
                  </div>
                  <div className="service-details__points-box">
                    <h3
                      className="service-details__points-title"
                      style={{ top: "15px", borderBottom: "none" }}
                    >
                      Product Specifications
                    </h3>
                    <ul className="service-details__points-list list-unstyled">
                      <li>
                        <p>Logs Diameter: 40 - 60 cm.</p>
                      </li>
                      <li>
                        <p>Humidity: 12-14%</p>
                      </li>
                      <li>
                        <p>
                          Origin: Northern Region Teak Forests, Thailand (Best
                          Source)
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="about"
                      className="thm-btn"
                      style={{ textTransform: "uppercase" }}
                    >
                      More Details <span className="icon-up-right-arrow"></span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                  style={{ top: "15px" }}
                >
                  <div className="about-three__img">
                    <img src="assets/images/resources/hilight-1.png" alt="" />
                    <div className="about-three__experience-box-left">
                      <img src="assets/images/backgrounds/teak-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsHilight />
        </div>
      </section>
      {/*About Three End */}
    </>
  );
}
