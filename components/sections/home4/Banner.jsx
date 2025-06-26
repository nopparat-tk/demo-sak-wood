"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
   modules: [Autoplay, Pagination, Navigation],
   slidesPerView: 1,
   spaceBetween: 0,

   loop: true,

   // Navigation
   navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
   },

   // Pagination
   // pagination: {
   //    el: ".swiper-pagination",
   //    clickable: true,
   //    type: "bullets",
   // },

   // Autoplay
   // autoplay: {
   //    delay: 7000,
   //    disableOnInteraction: false,
   //    speed: 800,
   // },
};

export default function Banner() {
   return (
      <>
         {/* Main Sllider Four Start */}
         <section className="main-slider-four">
            <Swiper
               {...swiperOptions}
               className="main-slider-four__carousel owl-carousel owl-theme"
            >
               <SwiperSlide>
                  {/* Single Main Sllider Four Start */}
                  <div className="item">
                     <div
                        className="main-slider__bg"
                        style={{
                           backgroundImage:
                              " url(assets/images/backgrounds/slider-1-1.jpg)",
                        }}
                     ></div>

                     {/* /.slider-one__bg */}
                     <div className="container">
                        <div className="main-slider-four__content">
                           <div className="title">
                              <h2>
                                 <span>Heritage</span>
                                 <br />
                                 Meets Vision
                              </h2>
                           </div>
                           <div className="text">
                              <p>
                                 Discover hardwoods that have weathered
                                 centuries in remote Asian forests. We brings
                                 these extraordinary materials to visionary
                                 architects and designers who create spaces that
                                 transcend the ordinary.
                              </p>
                           </div>
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Single Main Sllider Four End */}
               </SwiperSlide>
               <SwiperSlide>
                  {/* Single Main Sllider Four Start */}
                  <div className="item">
                     <div
                        className="main-slider__bg"
                        style={{
                           backgroundImage:
                              " url(assets/images/backgrounds/slider-1-1.jpg)",
                        }}
                     ></div>

                     {/* /.slider-one__bg */}
                     <div className="container">
                        <div className="main-slider-four__content">
                           <div className="title">
                              <h2>
                                 Where Rarity
                                 <br />
                                 Meets <span>Artistry</span>
                              </h2>
                           </div>
                           <div className="text">
                              <p>
                                 Each plank carries the DNA of ancient forests.
                                 Our curated collection of exotic Asian
                                 hardwoods transforms architectural concepts
                                 into living masterpieces that speak to the
                                 soul.
                              </p>
                           </div>
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Single Main Sllider Four End */}
               </SwiperSlide>
               <SwiperSlide>
                  {/* Single Main Sllider Four Start */}
                  <div className="item">
                     <div
                        className="main-slider__bg"
                        style={{
                           backgroundImage:
                              " url(assets/images/backgrounds/slider-1-1.jpg)",
                        }}
                     ></div>

                     {/* /.slider-one__bg */}
                     <div className="container">
                        <div className="main-slider-four__content">
                           <div className="title">
                              <h2>
                                 Crafting <span>Legacies,</span>
                                 <br />
                                 Not Just Interiors
                              </h2>
                           </div>
                           <div className="text">
                              <p>
                                 For architects who design tomorrow's heritage
                                 spaces. Our premium hardwoods don't just fill a
                                 room—they define it, creating environments that
                                 resonate with sophistication and permanence.
                              </p>
                           </div>
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Single Main Sllider Four End */}
               </SwiperSlide>
               <SwiperSlide>
                  {/* Single Main Sllider Four Start */}
                  <div className="item">
                     <div
                        className="main-slider__bg"
                        style={{
                           backgroundImage:
                              " url(assets/images/backgrounds/slider-1-1.jpg)",
                        }}
                     ></div>

                     {/* /.slider-one__bg */}
                     <div className="container">
                        <div className="main-slider-four__content">
                           <div className="title">
                              <h2>
                                 Beyond Standard
                                 <br />
                                 Design <span>Elevated</span>
                              </h2>
                           </div>
                           <div className="text">
                              <p>
                                 When standard won't suffice, We delivers
                                 materials that match your ambition. Our
                                 exclusive Asian hardwood collection empowers
                                 designers to create spaces that become
                                 destinations.
                              </p>
                              <br />
                           </div>
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Single Main Sllider Four End */}
               </SwiperSlide>
               <SwiperSlide>
                  {/* Single Main Sllider Four Start */}
                  <div className="item">
                     <div
                        className="main-slider__bg"
                        style={{
                           backgroundImage:
                              " url(assets/images/backgrounds/slider-1-1.jpg)",
                        }}
                     ></div>

                     {/* /.slider-one__bg */}
                     <div className="container">
                        <div className="main-slider-four__content">
                           <div className="title">
                              <h2>
                                 Coveted Woods
                                 <br />
                                 <span>Visionary</span> Design
                              </h2>
                           </div>
                           <div className="text">
                              <p>
                                 Where the world's most coveted hardwoods meet
                                 visionary design, We supply the materials. We
                                 transform your blueprints into breathtaking
                                 realities, crafting architectural concepts into
                                 living masterpieces that speak to the soul.
                              </p>
                           </div>
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Single Main Sllider Four End */}
               </SwiperSlide>
            </Swiper>
            <div className="main-slider-nav">
               <div className="swiper-arrow-prev">
                  <span className="icon-left-arrow"></span>
               </div>
               <div className="swiper-arrow-next">
                  <span className="icon-right-arrow"></span>
               </div>
            </div>
         </section>
         {/*Main Sllider Start */}
      </>
   );
}
