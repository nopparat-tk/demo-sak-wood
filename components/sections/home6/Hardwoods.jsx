"use client";
import Link from "next/link";
export default function teak() {
  return (
    <>
      {/*About Three Start */}
      <section className="about-three">
        <div className="about-three__shape1">
          <img
            className="float-bob-x"
            src="assets/images/shapes/site-footer-two-shape-1.png"
            alt="Shape"
          />
        </div>
        <div className="about-three__shape2">
          <img
            className="float-bob-x"
            src="assets/images/shapes/site-footer-two-shape-2.png"
            alt="Shape"
          />
        </div>
        <div className="about-three__shape3">
          <img
            className="float-bob-x"
            src="assets/images/shapes/about-v1-shape1.png"
            alt="Shape"
          />
        </div>
        <div className="container">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <img
                        src="assets/images/services/service-details-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <h3 className="service-details__title-1">Merbau</h3>
                    <p className="service-details__text-1">
                      Bold Resilient Timeless Merbau's rich red-brown tones and
                      solid, hefty feel convey a sense of luxury and stability.
                      Built to last, it brings warmth and strength to any
                      environment, indoors or outdoors.
                    </p>
                    <p className="service-details__text-2">
                      Ideal for grand stairs, luxurious flooring, weatherproof
                      decks, heritage-style build-in, heavy-duty furniture, and
                      feature woodwork with a strong presence.
                    </p>
                    <div className="service-details__img-and-point-box">
                      <div className="service-details__points-img col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <img
                          src="assets/images/services/service-details-points-img.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details__points-box">
                        <h3 className="service-details__points-title">
                          Characteristics
                        </h3>
                        <ul className="service-details__points-list list-unstyled">
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Deep Red-Brown Color</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Smooth, Interlocked Grain</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Extremely Hard & Dense</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Highly Stable & Durable</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Ethically Sourced</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Decades-Long Lifespan</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3
                      className="service-details__title-2"
                      style={{ marginTop: "30px" }}
                    >
                      Specifications
                    </h3>
                    <p className="service-details__text-3">
                      Diameter: Up to 60 cm <br />
                      Humidity: Up to 12% <br /> Origin: South East Asian
                      Countries (Best Source){" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <img
                        src="assets/images/services/service-details-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <h3 className="service-details__title-1">Yellow Balau</h3>
                    <p className="service-details__text-1">
                      Tough and golden, Yellow Balau endures the roughest
                      outdoor conditions with elegance. It's the ideal wood for
                      amazing outdoor living, where strength meets sophisticated
                      style.
                    </p>
                    <p className="service-details__text-2">
                      Ideal for Outdoor spaces such as seaside decks, garden
                      patios, rooftop pathways, outside wall cladding, pergolas,
                      and furniture with long-lasting durability.
                    </p>
                    <div className="service-details__img-and-point-box">
                      <div className="service-details__points-img col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <img
                          src="assets/images/services/service-details-points-img.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service-details__points-box">
                        <h3 className="service-details__points-title">
                          Characteristics
                        </h3>
                        <ul className="service-details__points-list list-unstyled">
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Warm Golden-Brown Color</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Fine, Consistent Grain</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Extremely Hard & Dense</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Highly Durable</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Ethically Sourced</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Decades-Long Lifespan</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3
                      className="service-details__title-2"
                      style={{ marginTop: "30px" }}
                    >
                      Specifications
                    </h3>
                    <p className="service-details__text-3">
                      Diameter: Up to 60 cm <br />
                      Humidity: Up to 12% <br /> Origin: South East Asian
                      Countries (Best Source){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Three End */}
    </>
  );
}
