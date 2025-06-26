"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

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
                           SOUTH ASIA KRAFT WOOD offers a curated selection of
                           meticulously graded premium hardwoods for discerning
                           clients. We specialize in sourcing and distributing
                           exquisite Asian hardwoods, strictly adhering to
                           international grading standards. Our focus on unique,
                           exotic, and luxurious woods is aimed at catering to
                           individuals, architects, and interior designers who
                           demand the highest quality, exclusivity, and precise
                           grading.
                        </p>
                        <ul className="about-three__points-list list-unstyled">
                           <li>
                              <div className="icon">
                                 <span className="icon-workstations"></span>
                              </div>
                              <div className="content">
                                 <h3>Elevate Standard Design</h3>
                                 <p>
                                    Our exceptional hardwoods transform
                                    blueprints into extraordinary statements,
                                    elevating every architectural detail.
                                    Designs won't just function—they'll
                                    captivate with unparalleled luxury.
                                 </p>
                              </div>
                           </li>
                           <li>
                              <div className="icon">
                                 <span className="icon-social-media-marketing"></span>
                              </div>
                              <div className="content">
                                 <h3>Embrace Nature's Legacy</h3>
                                 <p>
                                    Each plank carries the DNA of ancient
                                    forests. Our curated collection of exotic
                                    Asian hardwoods transforms architectural
                                    concepts into living masterpieces that speak
                                    to the soul.
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
                              src="assets/images/resources/welcome-1.png"
                              alt=""
                           />
                           <div className="about-three__experience-box">
                              <img
                                 src="assets/images/resources/welcome-2.png"
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
            </div>
         </section>
         {/*About Three End */}
      </>
   );
}
