"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Project from "@/components/sections/home5/Project";

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
export default function projectdetails() {
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
         <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Keruing">
            {/*Project Details Start*/}
            <section className="project-details">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
                  }}
               ></div>
               <div className="container">
                  {/* <div className="project-details__img">
                     <img
                        src="assets/images/project/project-details-img-1.jpg"
                        alt=""
                     />
                  </div> */}
                  <div className="project-details__content">
                     <div className="row">
                        <div className="col-xl-6">
                           <div className="about-three__left">
                              <div className="section-title text-left sec-title-animation animation-style2">
                                 <h2 className="section-title__title title-animation">
                                    The Unique Qualities
                                 </h2>
                              </div>
                              <p className="about-three__text">
                                 Keruing is a distinguished hardwood, renowned
                                 for its outstanding strength, resilience, and
                                 broad applicability. Its distinctive coarse
                                 grain and reddish-brown hue, coupled with
                                 substantial density and natural resistance to
                                 abrasion, weathering, and moisture, make it a
                                 top choice for challenging exterior and
                                 construction projects.
                              </p>
                              <ul className="about-three__points-list list-unstyled">
                                 {/* <li>
                                    <div className="content">
                                       <h3>Sustainable Teak</h3>
                                       <p>
                                          We actively champion environmental
                                          stewardship, offering only sustainably
                                          sourced teak with full licensing. This
                                          guarantees not just exquisite
                                          material, but a profound commitment to
                                          preserving our planet's forests.
                                       </p>
                                    </div>
                                 </li> */}
                                 <li>
                                    <div className="content">
                                       <h3>Robust & Resilient Performance</h3>
                                       <p>
                                          Keruing's toughness makes it excellent
                                          for structural components, offering
                                          essential load-bearing capacity. Its
                                          superior wear resistance ensures
                                          extended lifespan in high-traffic
                                          flooring, and resilience ensures
                                          enduring outdoor furniture.
                                       </p>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="content">
                                       <h3>
                                          Expert Finishing & Natural Protection
                                       </h3>
                                       <p>
                                          Keruing's resinous nature requires
                                          careful finishing with specialized
                                          primers, but this investment yields
                                          beautiful results. Its natural resins
                                          also inherently resist decay, fungi,
                                          and insects, boosting durability
                                          without harsh chemicals.
                                       </p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-6">
                           <div
                              className="about-three__right wow slideInRight"
                              data-wow-delay="100ms"
                              data-wow-duration="2500ms"
                           >
                              <div className="about-three__img">
                                 <img
                                    src="assets/images/ref/about-three-img-1.jpg"
                                    alt=""
                                 />
                                 <div className="about-three__experience-box">
                                    <h3 className="about-three__experience-title">
                                       Funfacts in Great
                                       <br /> Numbers
                                    </h3>
                                    <div className="about-three__experience">
                                       <div className="about-three__experience-count-shape"></div>
                                       <p className="about-three__experience-sub-title">
                                          Years Of <br />
                                          Experience
                                       </p>
                                       <div className="about-three__experience-count count-box">
                                          <h3>25</h3>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <h3 className="project-details__title-1">
                        Premium Natural Thai Teak
                     </h3>
                     <p className="project-details__text-1">
                        From forest plantations in the north of Thailand focused
                        on sustainability, SAK WoodWorks offers exquisite teak
                        wooden products! Our partners specialize in sustainable
                        Thai teak materials, crafted with skill by experts to
                        bring out the best features of teak wood. A superior
                        wood whose special features stand out above the rest,
                        Thai teak has beautiful grains, rich colors and a golden
                        shine, natural oils that protect against termites and
                        other pests, durability, longevity, natural resistance
                        to moisture, warping, and cracking, plus it is easy to
                        saw and shape.
                     </p>
                     <p className="project-details__text-2">
                        To be clear, Project Online is NOT a web-based version
                        of Project Professional. Project Online is an entirely
                        separate service that offers full portfolio and project
                        management tools on the web. It includes Project Web
                        App, and can, depending on your subscription, also
                        include Project Online{" "}
                     </p> */}
                     <div className="project-details__img-and-faq">
                        <div className="section-title text-left sec-title-animation animation-style2">
                           <h2 className="section-title__title title-animation">
                              Building Beyond Limits
                           </h2>
                        </div>
                        <div className="row">
                           <div className="col-xl-6 col-lg-6">
                              <div className="project-details__img-box-img">
                                 <img
                                    src="assets/images/project/project-details-img-box-img.jpg"
                                    alt=""
                                 />
                              </div>
                           </div>

                           <div className="col-xl-6 col-lg-6">
                              <div className="project-details__faq-box">
                                 <div
                                    className="accrodion-grp faq-one-accrodion"
                                    data-grp-name="faq-one-accrodion"
                                 >
                                    <div
                                       className={
                                          isActive.key == 1
                                             ? "accrodion active"
                                             : "accrodion"
                                       }
                                       onClick={() => handleToggle(1)}
                                    >
                                       <div className="accrodion-title">
                                          <h4>
                                             Structural Integrity: Beams &
                                             Components
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Keruing's formidable strength
                                                and exceptional load-bearing
                                                capacity make it ideal for
                                                structural beams and essential
                                                building components. Its robust
                                                nature ensures long-term safety
                                                and stability, providing a
                                                dependable foundation for any
                                                construction, even in
                                                challenging environments.
                                             </p>
                                          </div>
                                          {/* /.inner */}
                                       </div>
                                    </div>
                                    <div
                                       className={
                                          isActive.key == 2
                                             ? "accrodion active"
                                             : "accrodion"
                                       }
                                       onClick={() => handleToggle(2)}
                                    >
                                       <div className="accrodion-title">
                                          <h4>
                                             Enduring Surfaces: Flooring &
                                             Decking
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                With superior resistance to
                                                wear, abrasion, and moisture,
                                                Keruing is perfect for durable
                                                flooring and weather-resistant
                                                outdoor decking. It guarantees
                                                an extended lifespan,
                                                maintaining its integrity and
                                                visual appeal in areas subjected
                                                to heavy foot traffic and harsh
                                                elements.
                                             </p>
                                          </div>
                                          {/* /.inner */}
                                       </div>
                                    </div>
                                    <div
                                       className={
                                          isActive.key == 3
                                             ? "accrodion active"
                                             : "accrodion"
                                       }
                                       onClick={() => handleToggle(3)}
                                    >
                                       <div className="accrodion-title">
                                          <h4>
                                             Resilient Designs: Outdoor
                                             Furniture
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Keruing's notable resilience
                                                against environmental factors
                                                makes it an excellent choice for
                                                outdoor furniture. It endures
                                                the elements while preserving
                                                both its structural integrity
                                                and natural beauty, ensuring
                                                long-lasting performance and
                                                visual appeal for years to come.
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
                     <p className="project-details__text-3">
                        Keruing timber presents a compelling combination of
                        strength, resilience, and visual appeal. Its distinctive
                        coarse grain, reddish-brown hue, and natural resistance
                        make it a trusted material for robust structural
                        components, durable flooring, and resilient outdoor
                        furniture. Valued for its high performance and
                        longevity, Keruing consistently meets the exacting
                        demands of builders and artisans alike.
                     </p>
                  </div>
               </div>
               <Project />
            </section>
            {/*Project Details End*/}

            {/*Brand One Start*/}
            {/* <section className="brand-one">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
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
                                 <img
                                    src="assets/images/brand/brand-1-1.png"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="item">
                           <div className="brand-one__img">
                              <Link href="#">
                                 <img
                                    src="assets/images/brand/brand-1-2.png"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="item">
                           <div className="brand-one__img">
                              <Link href="#">
                                 <img
                                    src="assets/images/brand/brand-1-3.png"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="item">
                           <div className="brand-one__img">
                              <Link href="#">
                                 <img
                                    src="assets/images/brand/brand-1-4.png"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="item">
                           <div className="brand-one__img">
                              <Link href="#">
                                 <img
                                    src="assets/images/brand/brand-1-5.png"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="item">
                           <div className="brand-one__img">
                              <Link href="#">
                                 <img
                                    src="assets/images/brand/brand-1-6.png"
                                    alt=""
                                 />
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
