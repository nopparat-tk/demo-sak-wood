"use client";
import Link from "next/link";
import { useState } from "react";
// import ModalVideo from "react-modal-video";

export default function About() {
   const [isOpen, setOpen] = useState(false);
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
            <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="about-three__left">
                        <div className="section-title text-left sec-title-animation animation-style2">
                           <h2 className="section-title__title title-animation">
                              Welcome to SAK Wood
                           </h2>
                        </div>
                        <p className="about-three__text">
                           South Asia Kraft Wood is your premier source for
                           exquisite, rare hardwoods. Our "Natural Select Grade"
                           collection transforms spaces into breathtaking
                           masterpieces, embodying unparalleled quality and
                           timeless elegance. Discover exotic hardwoods, each
                           with distinctive character and captivating beauty,
                           perfect for luxurious interiors and architectural
                           wonders.
                        </p>
                        <ul className="about-three__points-list list-unstyled">
                           <li>
                              <div className="icon">
                                 <span className="icon-workstations"></span>
                              </div>
                              <div className="content">
                                 <h3>Uncompromising Quality and Expertis</h3>
                                 <p>
                                    Our dedication to exclusivity and
                                    craftsmanship ensures every project benefits
                                    from the timeless appeal and superior
                                    performance of our luxury hardwoods.
                                 </p>
                              </div>
                           </li>
                           <li>
                              <div className="icon">
                                 <span className="icon-social-media-marketing"></span>
                              </div>
                              <div className="content">
                                 <h3>Personalized Service and Guidance</h3>
                                 <p>
                                    SOUTH ASIA KRAFT WOOD is your trusted
                                    partner in realizing designs that transcend
                                    expectations and leave an indelible
                                    impression.
                                 </p>
                              </div>
                           </li>
                        </ul>
                        {/* <div className="about-three__btn-box">
                           <Link
                              href="about"
                              className="thm-btn about-three__btn"
                           >
                              More Details{" "}
                              <span className="icon-up-right-arrow"></span>{" "}
                           </Link>
                        </div> */}
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
                              src="assets/images/resources/welcome-3.png"
                              alt=""
                           />
                           {/* <div className="about-three__experience-box">
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
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/*About Three End */}
         {/* <ModalVideo
            channel="custom"
            url="assets/images/video/sawmill-cutting-processing-and-sawing-timber.mp4"
            autoplay
            isOpen={isOpen}
            onClose={() => setOpen(false)}
         /> */}
      </>
   );
}
