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
         <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Merbau">
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
                                    Ultimate Hardwood
                                 </h2>
                              </div>
                              <p className="about-three__text">
                                 Merbau is an exceptionally prized hardwood,
                                 celebrated for its formidable strength,
                                 enduring durability, and captivating aesthetic
                                 allure. Its inherent robustness makes it a top
                                 choice for diverse applications, from
                                 structural construction to refined interior and
                                 exterior finishes, delivering superior
                                 performance and lasting visual appeal.
                              </p>
                              <ul className="about-three__points-list list-unstyled">
                                 <li>
                                    <div className="content">
                                       <h3>Unmatched Durability</h3>
                                       <p>
                                          Merbau boasts impressive hardness,
                                          resisting dents, scratches, and
                                          impacts, even in high-traffic areas.
                                          Rich in natural oils, it is
                                          exceptionally durable and resistant to
                                          weathering, moisture, sunlight,
                                          insects, and fungi, ensuring long-term
                                          performance.
                                       </p>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="content">
                                       <h3>Versatile and Visually</h3>
                                       <p>
                                          With hues ranging from reddish-brown
                                          to deep bronze, Merbau's colors deepen
                                          and mature over time, adding a
                                          beautiful patina. This timber is
                                          incredibly versatile, ideal for
                                          structural beams, high-traffic
                                          flooring, custom furniture, and
                                          elegant decorative accents, enriching
                                          any space with warmth and
                                          sophistication.
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
                                    src="assets/images/backgrounds/merbau-1.png"
                                    alt=""
                                 />
                                 <div className="about-three__experience-box">
                                    <img
                                       src="assets/images/backgrounds/merbau-2.png"
                                       alt=""
                                    />
                                    {/* <h3 className="about-three__experience-title">
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
                                    </div> */}
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
                              Merbau Products
                           </h2>
                        </div>
                        <div className="row">
                           <div className="col-xl-6 col-lg-6">
                              <div className="project-details__img-box-img">
                                 <img
                                    src="assets/images/backgrounds/merbau-3.png"
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
                                          <h4>Decking (E4E Heavy-Duty)</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Designed for demanding outdoor
                                                environments and high
                                                load-bearing areas, Merbau
                                                decking offers exceptional
                                                hardness and natural oil
                                                richness for superior durability
                                                and resistance to weather and
                                                pests. Its stunning hues ensure
                                                a strikingly beautiful deck for
                                                decades.
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
                                          <h4>Cladding</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Merbau cladding provides a
                                                sophisticated and protective
                                                covering for walls. It showcases
                                                deep red to bronze tones,
                                                offering excellent density for
                                                minimized shrinking and
                                                swelling, enhanced thermal and
                                                sound insulation, and increased
                                                fire resistance.
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
                                          <h4>Sawn Timber</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Including T&G and grooved-edge
                                                options, offer natural pest and
                                                moisture resistance. This
                                                ensures exceptional durability,
                                                minimal maintenance, and
                                                versatile installation for both
                                                residential and commercial
                                                use.Ideal for structural beams,
                                                flooring, and custom projects,
                                                Merbau sawn timber offers
                                                superior strength and
                                                durability. Its rich red tones
                                                bring warmth and natural beauty,
                                                making it a reliable choice for
                                                projects where both robustness
                                                and aesthetics are paramount.
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
                        Merbau is a highly valued hardwood, prized for its
                        exceptional strength, durability, and striking
                        aesthetic. Its natural resistance to impacts,
                        weathering, and pests makes it ideal for heavy-duty
                        decking, protective cladding, and robust structural
                        timber, delivering lasting beauty and performance.
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
