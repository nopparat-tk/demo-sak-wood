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
         <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Mersawa">
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
                     <div className="row flex-row-reverse">
                        <div className="col-xl-6">
                           <div className="about-three__left">
                              <div className="section-title text-left sec-title-animation animation-style2">
                                 <h2 className="section-title__title title-animation">
                                    The unique properties
                                 </h2>
                              </div>
                              <p className="about-three__text">
                                 Mersawa makes it an exceptionally suitable
                                 material for a wide array of applications,
                                 notably in crafting fine furniture, creating
                                 elegant decorative paneling, and undertaking
                                 light construction projects. Its widespread
                                 adoption across these domains stems from a
                                 combination of key attributes.
                              </p>
                              <ul className="about-three__points-list list-unstyled">
                                 <li>
                                    <div className="content">
                                       <h3>
                                          Exceptional Aesthetic & Workability
                                       </h3>
                                       <p>
                                          Mersawa offers beautiful light to
                                          medium brown tones and distinct grain,
                                          paired with moderate hardness for easy
                                          machining, precise detailing, and
                                          smooth finishes. It's ideal for finely
                                          crafted furniture and architectural
                                          paneling.
                                       </p>
                                    </div>
                                 </li>
                                 {/* <li>
                                    <div className="content">
                                       <h3>Unrivaled Resistance</h3>
                                       <p>
                                          Offers unrivaled durability, naturally
                                          withstanding scorching sun, torrential
                                          rain, and heavy foot traffic. Its
                                          extraordinary density ensures your
                                          outdoor spaces remain pristine and
                                          stunning for decades, making it a
                                          reliable, long-term investment.
                                       </p>
                                    </div>
                                 </li> */}
                                 <li>
                                    <div className="content">
                                       <h3>Durable & Versatile Stability</h3>
                                       <p>
                                          Despite its lighter weight, Mersawa
                                          provides significant natural strength,
                                          warp resistance, and dimensional
                                          stability. This adaptable wood is
                                          perfect for robust interior/exterior
                                          structural elements and intricate,
                                          lasting furniture designs.
                                       </p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-6">
                           <div
                              className="about-three__right wow slideInLeft"
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
                     <div className="project-details__img-and-faq">
                        <div className="section-title text-left sec-title-animation animation-style2">
                           <h2 className="section-title__title title-animation">
                              Ideal Applications
                           </h2>
                        </div>
                        <div className="row flex-row-reverse">
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
                                             Architectural Foundations: Beams
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Mersawa's impressive strength
                                                and natural durability make it
                                                ideal for crafting robust,
                                                load-bearing beams. These
                                                provide essential structural
                                                support, ensuring long-term
                                                stability and safety in any
                                                project.
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
                                             Structural & Decorative: Posts
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Mersawa's inherent sturdiness
                                                makes it an exceptional choice
                                                for posts. Offering enduring
                                                strength and a refined visual
                                                presence, they serve as both
                                                integral structural components
                                                and lasting decorative elements
                                                in architecture.
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
                                          <h4>Versatile Design: Paneling</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Mersawa paneling uniquely
                                                combines structural integrity
                                                with aesthetic enhancement. It
                                                significantly reinforces a
                                                building's stability while its
                                                natural beauty and distinctive
                                                grain add sophistication and
                                                warmth to any space.
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
                        Mersawa timber presents a compelling combination of
                        beauty, workability, and structural integrity. Its light
                        to medium brown hues, attractive grain patterns, and
                        user-friendly characteristics make it a preferred choice
                        for high-quality furniture and paneling, while its
                        natural strength and durability further solidify its
                        position as a valuable material in light construction.
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
