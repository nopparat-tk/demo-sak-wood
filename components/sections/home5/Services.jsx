"use client";
import Link from "next/link";
export default function Services() {
   return (
      <>
         {/*Services Three Start */}
         <section className="services-three">
            <div
               className="services-three__bg"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/site-footer-shape-1.jpg)",
               }}
            ></div>
            <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div>
            <div className="container">
               <div className="section-title text-center sec-title-animation animation-style1">
                  <h2 className="section-title__title title-animation">
                     Excellence in <br />
                     Tropical Hardwoods
                  </h2>
               </div>
               <div className="row">
                  {/*Services Three Single Start */}
                  <div
                     className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                     data-wow-delay="100ms"
                  >
                     <div className="services-three__single">
                        <div className="services-three__icon">
                           <span className="fas fa-cloud-sun-rain"></span>
                        </div>
                        <h3 className="services-three__title">
                           <Link href="interior-design">
                              {/* {" "}
                              Superior <br />
                              Durability{" "} */}
                              Superior Durability
                           </Link>
                        </h3>
                        <div className="services-three__img">
                           <img
                              src="assets/images/resources/feature-1.png"
                              alt=""
                           />
                        </div>
                        <p className="services-three__text">
                           Our tropical hardwoods are naturally resistant to
                           decay, insects, and harsh weather, making them ideal
                           for outdoor and long-term applications. These
                           incredibly strong, dense woods are infused with
                           powerful natural oils, protecting your investment and
                           ensuring you'll enjoy their quality for decades.
                        </p>
                        {/* <div className="services-three__arrow">
                           <Link href="interior-design">
                              <span className="icon-up-right-arrow-1"></span>
                           </Link>
                        </div> */}
                     </div>
                  </div>
                  {/*Services Three Single End */}
                  {/*Services Three Single Start */}
                  <div
                     className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                     data-wow-delay="300ms"
                  >
                     <div className="services-three__single">
                        <div className="services-three__icon">
                           <span className="fas fa-couch"></span>
                        </div>
                        <h3 className="services-three__title">
                           <Link href="evolve-space-designs">
                              {/* {" "}
                              Aesthetic  <br />
                              Appeal{" "} */}
                              Exquisite Aesthetic Appeal
                           </Link>
                        </h3>
                        <div className="services-three__img">
                           <img
                              src="assets/images/resources/feature-2.png"
                              alt=""
                           />
                        </div>
                        <p className="services-three__text">
                           Enhance any project with the beautiful grain patterns
                           and warm, rich tones of our tropical hardwoods. From
                           the golden hues to the deep reds, their inherent
                           distinction and sophistication will elevate your
                           design, creating a lasting impression of natural
                           elegance.
                        </p>
                        {/* <div className="services-three__arrow">
                           <Link href="evolve-space-designs">
                              <span className="icon-up-right-arrow-1"></span>
                           </Link>
                        </div> */}
                     </div>
                  </div>
                  {/*Services Three Single End */}
                  {/*Services Three Single Start */}
                  <div
                     className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                     data-wow-delay="600ms"
                  >
                     <div className="services-three__single">
                        <div className="services-three__icon">
                           <span className="fas fa-landmark"></span>
                        </div>
                        <h3 className="services-three__title">
                           <Link href="eden-home-styling">
                              {" "}
                              Exceptional Versatility
                              {/* Eden Home <br /> Styling */}
                           </Link>
                        </h3>
                        <div className="services-three__img">
                           <img
                              src="assets/images/resources/feature-3.png"
                              alt=""
                           />
                        </div>
                        <p className="services-three__text">
                           Combining immense strength, density, durability, and
                           beauty, our tropical hardwoods are perfectly suited
                           for diverse applications. Whether for elegant decking
                           and sophisticated cladding, robust furniture, or
                           essential structural uses, these materials offer
                           unparalleled adaptability for any vision.
                        </p>
                        {/* <div className="services-three__arrow">
                           <Link href="eden-home-styling">
                              <span className="icon-up-right-arrow-1"></span>
                           </Link>
                        </div> */}
                     </div>
                  </div>
                  {/*Services Three Single End */}
                  {/*Services Three Single Start */}
                  <div
                     className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                     data-wow-delay="800ms"
                  >
                     <div className="services-three__single">
                        <div className="services-three__icon">
                           <span className="fas fa-seedling"></span>
                        </div>
                        <h3 className="services-three__title">
                           <Link href="harmony-interiors">
                              {" "}
                              {/* Harmony Design <br />
                              Interiors{" "} */}
                              Committed to Sustainability
                           </Link>
                        </h3>
                        <div className="services-three__img">
                           <img
                              src="assets/images/resources/feature-4.png"
                              alt=""
                           />
                        </div>
                        <p className="services-three__text">
                           Grown, harvested, and processed responsibly with
                           international certifications, we proudly engage in
                           eco-conscious practices that preserve and replenish
                           our planet’s natural resources. Now, with these
                           tropical hardwoods, you, too, can support healthy
                           forests and a green future.
                        </p>
                        {/* <div className="services-three__arrow">
                           <Link href="harmony-interiors">
                              <span className="icon-up-right-arrow-1"></span>
                           </Link>
                        </div> */}
                     </div>
                  </div>
                  {/*Services Three Single End */}
               </div>
            </div>
         </section>
         {/*Services Three End */}
      </>
   );
}
