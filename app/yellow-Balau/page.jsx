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
         <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Yellow Balau">
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
                                    Premium Performance
                                 </h2>
                              </div>
                              <p className="about-three__text">
                                 Yellow Balau in high-quality building
                                 materials, Yellow Balau is a distinguished
                                 choice for those who demand excellence. More
                                 than just wood, it's an investment in enduring
                                 quality, unmatched durability, and timeless
                                 beauty. Globally recognized for its strength
                                 and captivating appeal, Yellow Balau
                                 consistently exceeds expectations in both form
                                 and function for architects, contractors, and
                                 homeowners alike.
                              </p>
                              <ul className="about-three__points-list list-unstyled">
                                 <li>
                                    <div className="content">
                                       <h3>Exquisite Outdoor Spaces</h3>
                                       <p>
                                          Meticulously finished for smooth,
                                          refined profiles, transforms outdoor
                                          spaces into opulent sanctuaries. Its
                                          natural warmth and elegance create
                                          inviting areas for entertaining or
                                          peaceful solitude, defining luxury in
                                          your landscape.
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
                                       <h3>Enduring Appeal</h3>
                                       <p>
                                          Timeless elegance with minimal upkeep.
                                          Its flawlessly smooth profile and
                                          consistent texture are visually
                                          captivating and incredibly practical,
                                          freeing you to simply enjoy your
                                          beautiful outdoor haven.
                                       </p>
                                    </div>
                                 </li>
                              </ul>
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
                                    src="assets/images/backgrounds/yellow-balau-2.png"
                                    alt=""
                                 />
                                 <div className="about-three__experience-box-left">
                                    <img
                                       src="assets/images/backgrounds/yellow-balau-1.png"
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
                     <div className="project-details__img-and-faq">
                        <div className="section-title text-left sec-title-animation animation-style2">
                           <h2 className="section-title__title title-animation">
                              Yellow Balau Products
                           </h2>
                        </div>
                        <div className="row flex-row-reverse">
                           <div className="col-xl-6 col-lg-6">
                              <div className="project-details__img-box-img">
                                 <img
                                    src="assets/images/backgrounds/yellow-balau-3.png"
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
                                          <h4>Enduring Beauty Decking</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Transform your outdoor space
                                                with Yellow Balau. This dense,
                                                durable hardwood naturally
                                                resists harsh weather, ensuring
                                                your patio or walkway remains
                                                stunning for decades with
                                                minimal upkeep.
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
                                          <h4>Elevate Facade Cladding</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Make a striking statement with
                                                Yellow Balau cladding. Its
                                                exceptional durability and rich
                                                aesthetics provide superior
                                                weather protection, enhancing
                                                your building's exterior with
                                                timeless elegance and warmth.
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
                                          <h4>Unyielding Strength Timber</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Sawn timber for projects
                                                demanding the utmost integrity.
                                                Its incredible strength and
                                                stability make it ideal for
                                                beams and heavy-duty
                                                applications, ensuring
                                                long-lasting performance in any
                                                structure.
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
                                          <h4>Timeless Comfort Furniture</h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Experience luxurious outdoor
                                                living with furniture crafted
                                                from Yellow Balau. Naturally
                                                resistant to decay and pests,
                                                these pieces offer enduring
                                                style and comfort, staying
                                                beautiful season after season
                                                with little maintenance.
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
                                          <h4>
                                             Exceptional Durability Flooring
                                          </h4>
                                          <div className="project-details__faq-box-count"></div>
                                       </div>
                                       <div className="accrodion-content">
                                          <div className="inner">
                                             <p>
                                                Ideal for demanding
                                                environments, Yellow Balau
                                                flooring withstands heavy use
                                                with ease. Its impressive
                                                hardness and dense grain ensure
                                                lasting beauty and structural
                                                integrity, perfect for both
                                                commercial and residential
                                                spaces.
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
                        Yellow Balau is a premier hardwood, offering
                        uncompromising excellence and enduring quality. This
                        globally sought-after wood transforms spaces into
                        opulent sanctuaries, remaining pristine for decades with
                        minimal upkeep, turning blueprints into breathtaking
                        realities.
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
