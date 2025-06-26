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
   const [isOpen, setOpen] = useState(false);

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
                                    Premium Natural
                                 </h2>
                              </div>
                              <p className="about-three__text">
                                 From sustainably managed forest plantations,
                                 SAK Wood offers exquisite teak wood products. A
                                 wood that truly stands out, teak boasts
                                 beautiful grains, rich colors, and a golden
                                 shine. Its natural oils provide resistance to
                                 termites, pests, moisture, warping, and
                                 cracking, ensuring exceptional durability and
                                 longevity. Plus, teak is remarkably easy to saw
                                 and shape, making it the ideal choice for
                                 lasting beauty.
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
                                       <h3>Expertise and Versatility</h3>
                                       <p>
                                          Our partners, with a decade of
                                          expertise, are masters in supplying
                                          premium teak timber. We offer diverse
                                          sizes, perfectly meeting the exacting
                                          demands of local furniture and
                                          decoration artisans.
                                       </p>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="content">
                                       <h3>The Enduring Legacy</h3>
                                       <p>
                                          Experience the unparalleled resilience
                                          of teak wood, a material celebrated
                                          for its centuries-long longevity with
                                          minimal care. This inherent durability
                                          makes it a truly eco-conscious choice,
                                          steadfastly proving its strength
                                          through time.
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
                                    src="assets/images/backgrounds/teak-2.png"
                                    alt=""
                                 />

                                 <div className="about-three__experience-video-box">
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

                                    <div className="welcome-style1__img">
                                       <div className="img1">
                                          <img
                                             src="assets/images/backgrounds/teak-video-2.png"
                                             alt="Image"
                                          />
                                          <div className="video-btn">
                                             <a
                                                className="video-popup"
                                                title="Video Gallery"
                                                onClick={() => setOpen(true)}
                                             >
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                             </a>
                                          </div>
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
                              Teak Products
                           </h2>
                        </div>
                        <div className="row">
                           <div className="col-xl-6 col-lg-6">
                              <div className="project-details__img-box-img">
                                 <img
                                    src="assets/images/backgrounds/teak-1.png"
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
                                          <h4>Boards & Planks</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Prized for durability,
                                                stability, strength,
                                                workability, aesthetic appeal,
                                                pest resistance, and longevity,
                                                making it ideal for various
                                                projects. Features high natural
                                                oil content, moderate silica,
                                                and dense grain, ensuring years
                                                of reliable
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
                                          <h4>Poles</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Admired for golden tones, smooth
                                                texture, and detailed grain.
                                                Natural oils provide a soft
                                                texture, enhancing its aesthetic
                                                charm. Excellent for flooring,
                                                cladding, and decorative
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
                                          <h4>Flooring and Decking</h4>
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
                                                residential and commercial use.
                                             </p>
                                          </div>
                                          {/* /.inner */}
                                       </div>
                                    </div>
                                    <div
                                       className={
                                          isActive.key == 4
                                             ? "accrodion active"
                                             : "accrodion"
                                       }
                                       onClick={() => handleToggle(4)}
                                    >
                                       <div className="accrodion-title">
                                          <h4>Cladding & Ceiling</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Add luxury and warmth with
                                                durable, weather-resistant teak.
                                                Beautiful grain patterns create
                                                an inviting atmosphere, while
                                                excellent breathability
                                                regulates humidity and
                                                temperature.
                                             </p>
                                          </div>
                                          {/* /.inner */}
                                       </div>
                                    </div>
                                    <div
                                       className={
                                          isActive.key == 5
                                             ? "accrodion active"
                                             : "accrodion"
                                       }
                                       onClick={() => handleToggle(5)}
                                    >
                                       <div className="accrodion-title">
                                          <h4>Finger-Joint Stair Treads</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Made from smaller teak pieces
                                                joined for strength and beauty,
                                                minimizing waste. Available
                                                finished or unfinished, they are
                                                ideal for stair treads,
                                                tabletops, and custom furniture.
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
                        Teak timber is our primary product. With a decade of
                        experience supplying teak timber, offering various sizes
                        to meet customer needs. We supply premium teak finishing
                        materials for residential and commercial projects,
                        focusing on crafting concepts masterpieces. We
                        meticulously select and kiln-dry wood, with optional
                        termite protection.
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
