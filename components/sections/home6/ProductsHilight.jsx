"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
   modules: [Autoplay, Pagination, Navigation],
   slidesPerView: 3,
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
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 2,
      },
      1199: {
         slidesPerView: 2,
      },
      1350: {
         slidesPerView: 2,
      },
   },
};
export default function ProductsHilight() {
   return (
      <>
         {/*Testimonial Two Start*/}
         <section className="testimonial-two" style={{ paddingTop: "60px" }}>
            {/* <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div> */}
            <div className="container">
               <div className="section-title text-center sec-title-animation animation-style1">
                  <h2 className="section-title__title title-animation">
                     Teak Highlight Products
                  </h2>
               </div>
               <div
                  className="testimonial-one__top wow fadeInLeft"
                  data-wow-delay="100ms"
               >
                  <div className="row">
                     <div className="col-xl-6">
                        <div className="item">
                           <div
                              className="testimonial-two__single"
                              style={{
                                 marginTop: "0px",
                                 padding: "47px",
                                 textAlign: "left",
                              }}
                           >
                              <div
                                 className="testimonial-two__single-shape-1"
                                 style={{
                                    backgroundImage:
                                       " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                                 }}
                              ></div>
                              {/* <div className="testimonial-two__img">
                                 <img
                                    src="assets/images/testimonial/testimonial-2-1.jpg"
                                    alt=""
                                 />
                              </div> */}
                              <div className="testimonial-two__shape-1">
                                 <img
                                    src="assets/images/shapes/testimonial-two-shape-1.png"
                                    alt=""
                                 />
                              </div>
                              {/* <ul className="testimonial-two__ratting list-unstyled">
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                              </ul> */}
                              <div className="feature-two__icon">
                                 <img
                                    src="assets/images/products/parquet.svg"
                                    alt=""
                                 ></img>
                              </div>
                              <h3
                                 className="testimonial-two__name"
                                 style={{ marginTop: "18px", fontSize: "24px" }}
                              >
                                 <Link href="testimonials">Teak Parquet</Link>
                              </h3>

                              <p className="testimonial-two__sub-title">
                                 A Legacy of Tangible Beauty
                              </p>
                              <p
                                 className="testimonial-two__text"
                                 style={{
                                    fontSize: "17px",
                                    lineHeight: "26px",
                                 }}
                              >
                                 Our parquet is the foundation of a luxurious
                                 interior. Its value lies in its substantial
                                 thickness—a mark of heirloom quality proven by
                                 time, as seen in historic landmarks like the
                                 magnificent Mrigadayavan Palace, built from the
                                 same teak over a century ago.
                              </p>
                              <h3 className="testimonial-two__name">
                                 16 200 - 22 800 руб / м2
                              </h3>
                              <div
                                 className="btn-box"
                                 style={{
                                    marginTop: "20px",
                                 }}
                              >
                                 <Link href="about" className="thm-btn">
                                    Get a consultation{" "}
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="item">
                           <div
                              className="testimonial-two__single"
                              style={{
                                 marginTop: "0px",
                                 padding: "47px",
                                 textAlign: "left",
                              }}
                           >
                              <div
                                 className="testimonial-two__single-shape-1"
                                 style={{
                                    backgroundImage:
                                       " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                                 }}
                              ></div>
                              {/* <div className="testimonial-two__img">
                                 <img
                                    src="assets/images/testimonial/testimonial-2-1.jpg"
                                    alt=""
                                 />
                              </div> */}
                              <div className="testimonial-two__shape-1">
                                 <img
                                    src="assets/images/shapes/testimonial-two-shape-1.png"
                                    alt=""
                                 />
                              </div>
                              {/* <ul className="testimonial-two__ratting list-unstyled">
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                              </ul> */}
                              <div className="feature-two__icon">
                                 <img
                                    src="assets/images/products/parquet.svg"
                                    alt=""
                                 ></img>
                              </div>
                              <h3
                                 className="testimonial-two__name"
                                 style={{ marginTop: "18px", fontSize: "24px" }}
                              >
                                 <Link href="testimonials">Teak Parquet</Link>
                              </h3>

                              <p className="testimonial-two__sub-title">
                                 A Legacy of Tangible Beauty
                              </p>
                              <p
                                 className="testimonial-two__text"
                                 style={{
                                    fontSize: "17px",
                                    lineHeight: "26px",
                                 }}
                              >
                                 Our parquet is the foundation of a luxurious
                                 interior. Its value lies in its substantial
                                 thickness—a mark of heirloom quality proven by
                                 time, as seen in historic landmarks like the
                                 magnificent Mrigadayavan Palace, built from the
                                 same teak over a century ago.
                              </p>
                              <h3 className="testimonial-two__name">
                                 16 200 - 22 800 руб / м2
                              </h3>
                              <div
                                 className="btn-box"
                                 style={{
                                    marginTop: "20px",
                                 }}
                              >
                                 <Link href="about" className="thm-btn">
                                    Get a consultation{" "}
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="testimonial-one__top">
                  <div className="row">
                     <div className="col-xl-6">
                        <div className="item">
                           <div
                              className="testimonial-two__single"
                              style={{
                                 marginTop: "0px",
                                 padding: "47px",
                                 textAlign: "left",
                              }}
                           >
                              <div
                                 className="testimonial-two__single-shape-1"
                                 style={{
                                    backgroundImage:
                                       " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                                 }}
                              ></div>
                              {/* <div className="testimonial-two__img">
                                 <img
                                    src="assets/images/testimonial/testimonial-2-1.jpg"
                                    alt=""
                                 />
                              </div> */}
                              <div className="testimonial-two__shape-1">
                                 <img
                                    src="assets/images/shapes/testimonial-two-shape-1.png"
                                    alt=""
                                 />
                              </div>
                              {/* <ul className="testimonial-two__ratting list-unstyled">
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                              </ul> */}
                              <div className="feature-two__icon">
                                 <img
                                    src="assets/images/products/parquet.svg"
                                    alt=""
                                 ></img>
                              </div>
                              <h3
                                 className="testimonial-two__name"
                                 style={{ marginTop: "18px", fontSize: "24px" }}
                              >
                                 <Link href="testimonials">Teak Parquet</Link>
                              </h3>

                              <p className="testimonial-two__sub-title">
                                 A Legacy of Tangible Beauty
                              </p>
                              <p
                                 className="testimonial-two__text"
                                 style={{
                                    fontSize: "17px",
                                    lineHeight: "26px",
                                 }}
                              >
                                 Our parquet is the foundation of a luxurious
                                 interior. Its value lies in its substantial
                                 thickness—a mark of heirloom quality proven by
                                 time, as seen in historic landmarks like the
                                 magnificent Mrigadayavan Palace, built from the
                                 same teak over a century ago.
                              </p>
                              <h3 className="testimonial-two__name">
                                 16 200 - 22 800 руб / м2
                              </h3>
                              <div
                                 className="btn-box"
                                 style={{
                                    marginTop: "20px",
                                 }}
                              >
                                 <Link href="about" className="thm-btn">
                                    Get a consultation{" "}
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="item">
                           <div
                              className="testimonial-two__single"
                              style={{
                                 marginTop: "0px",
                                 padding: "47px",
                                 textAlign: "left",
                              }}
                           >
                              <div
                                 className="testimonial-two__single-shape-1"
                                 style={{
                                    backgroundImage:
                                       " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                                 }}
                              ></div>
                              {/* <div className="testimonial-two__img">
                                 <img
                                    src="assets/images/testimonial/testimonial-2-1.jpg"
                                    alt=""
                                 />
                              </div> */}
                              <div className="testimonial-two__shape-1">
                                 <img
                                    src="assets/images/shapes/testimonial-two-shape-1.png"
                                    alt=""
                                 />
                              </div>
                              {/* <ul className="testimonial-two__ratting list-unstyled">
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                                 <li>
                                    <span className="icon-pointed-star"></span>
                                 </li>
                              </ul> */}
                              <div className="feature-two__icon">
                                 <img
                                    src="assets/images/products/parquet.svg"
                                    alt=""
                                 ></img>
                              </div>
                              <h3
                                 className="testimonial-two__name"
                                 style={{ marginTop: "18px", fontSize: "24px" }}
                              >
                                 <Link href="testimonials">Teak Parquet</Link>
                              </h3>

                              <p className="testimonial-two__sub-title">
                                 A Legacy of Tangible Beauty
                              </p>
                              <p
                                 className="testimonial-two__text"
                                 style={{
                                    fontSize: "17px",
                                    lineHeight: "26px",
                                 }}
                              >
                                 Our parquet is the foundation of a luxurious
                                 interior. Its value lies in its substantial
                                 thickness—a mark of heirloom quality proven by
                                 time, as seen in historic landmarks like the
                                 magnificent Mrigadayavan Palace, built from the
                                 same teak over a century ago.
                              </p>
                              <h3 className="testimonial-two__name">
                                 16 200 - 22 800 руб / м2
                              </h3>
                              <div
                                 className="btn-box"
                                 style={{
                                    marginTop: "20px",
                                 }}
                              >
                                 <Link href="about" className="thm-btn">
                                    Get a consultation{" "}
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/*Testimonial Two End*/}
      </>
   );
}
