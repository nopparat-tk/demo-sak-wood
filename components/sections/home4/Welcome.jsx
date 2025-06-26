"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function welcome() {
   const [isOpen, setOpen] = useState(false);
   return (
      <>
         {/*Start welcome Style1*/}
         <section className="welcome-style1">
            <div className="container">
               <div className="section-title sec-title-animation animation-style1">
                  <h2 className="section-title__title title-animation">
                     Welcome to SAK Wood
                  </h2>
               </div>
               <div className="row">
                  <div className="col-xl-6">
                     <div className="welcome-style1__content">
                        <div className="title">
                           <h3>
                              {" "}
                              SOUTH ASIA KRAFT WOOD provides a curated selection
                              of premium hardwoods, meticulously graded for
                              discerning clients.
                           </h3>
                        </div>
                        <div className="text">
                           <p>
                              Where we specialize in sourcing and distributing
                              the exquisite Asian hardwoods, adhering to
                              international grading standards. Our focus is on
                              the unique, the exotic, and the luxurious, with an
                              emphasis on quality assurance. We cater to
                              affluent individuals, architects, and interior
                              designers who demand the highest quality,
                              exclusivity, and precise grading.
                           </p>
                           <p>
                              Our hardwoods featured in stunning interiors and
                              architectural designs. We showcase how our
                              premium, graded woods transform spaces into
                              showcases of luxury and sophistication, with a
                              focus on the precision and standards we uphold.
                           </p>
                        </div>
                        <div className="bottom-box">
                           <div className="btn-box">
                              <Link href="about" className="thm-btn">
                                 See our Collection{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                           <div className="mail-box">
                              <h3>
                                 Request Quote: <br />
                                 <Link href="mailto:info@sakw.ru">
                                    info@sakw.ru
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="welcome-style1__img">
                        <div className="row">
                           <div className="col-xl-6">
                              <div className="img2">
                                 <img
                                    src="assets/images/resources/welcome-1-2.jpg"
                                    alt="Image"
                                 />
                              </div>
                           </div>
                           <div className="col-xl-6">
                              <div className="img1">
                                 <img
                                    src="assets/images/resources/welcome-1-1.jpg"
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
         </section>
         {/*End welcome Style1*/}
         <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="Get7rqXYrbQ"
            onClose={() => setOpen(false)}
         />
      </>
   );
}
