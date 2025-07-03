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
            {/* <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div> */}
            <div className="container">
               <div className="project-details__content">
                  <div className="row flex-row-reverse">
                     <div className="col-xl-6">
                        <div className="about-three__left">
                           <div className="section-title text-left sec-title-animation animation-style2">
                              <h2 className="section-title__title title-animation">
                                 Essence of Strength
                              </h2>
                           </div>
                           <p className="about-three__text">
                              Merbau is an exceptionally prized hardwood,
                              celebrated for its formidable strength, enduring
                              durability, and captivating aesthetic allure. Its
                              unique properties ensure superior performance and
                              lasting visual appeal in diverse applications,
                              transforming spaces into showcases of luxury.
                           </p>
                           <ul className="about-three__points-list list-unstyled">
                              <li>
                                 <div className="content">
                                    <h3>Unrivaled Natural Protection</h3>
                                    <p>
                                       Merbau decking, meticulously crafted and
                                       rich in natural oils, offers impressive
                                       durability and superior resistance to
                                       wear, weather, and pests, ideal for
                                       demanding outdoor areas.
                                    </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="content">
                                    <h3>Elegant & Multifunctional</h3>
                                    <p>
                                       Merbau's stunning hues deepen with age,
                                       while its dense composition provides
                                       superior dimensional stability,
                                       insulation, and enhanced fire resistance
                                       for cladding and structural designs.
                                    </p>
                                 </div>
                              </li>
                           </ul>
                           <div className="btn-box">
                              <Link
                                 href="about"
                                 className="thm-btn"
                                 style={{ textTransform: "uppercase" }}
                              >
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div
                           className="about-three__left wow slideInLeft"
                           data-wow-delay="100ms"
                           data-wow-duration="2500ms"
                        >
                           <div className="about-three__img">
                              <img
                                 src="assets/images/backgrounds/merbau-3.png"
                                 alt=""
                              />
                              <div className="about-three__experience-box-left">
                                 <img
                                    src="assets/images/backgrounds/merbau-2.png"
                                    alt=""
                                 />
                              </div>
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
