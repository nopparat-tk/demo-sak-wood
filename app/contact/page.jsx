import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
   return (
      <>
         <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Contact">
            {/*Contact Info Start*/}
            <section className="contact-page">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-3">
                        <div className="single-contact-info-section">
                           <div className="icon">
                              <i className="fas fa-phone-alt"></i>
                           </div>
                           <div className="single-contact-info-section__content">
                              <div className="text">
                                 <h3>Speak directly</h3>
                                 <p>With The Hardwoods specialist.</p>
                                 {/* <p>
                                    <Link href="tal:79118880388">
                                       +7 911 888 03 88
                                    </Link>
                                 </p> */}
                              </div>
                              <div className="btn-box">
                                 <Link href="tal:79118880388">
                                    Call to Us
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3">
                        <div className="single-contact-info-section">
                           <div className="icon">
                              <i className="fas fa-envelope-open-text"></i>
                           </div>
                           <div className="single-contact-info-section__content">
                              <div className="text">
                                 <h3>Begin Your Masterpiece</h3>
                                 <p> Send Us Your Detailed Inquiry.</p>
                                 {/* <p>
                                    <Link href="mailto:info@sakw.ru">
                                       info@sakw.ru
                                    </Link>
                                 </p> */}
                              </div>
                              <div className="btn-box">
                                 <Link href="mailto:info@sakw.ru">
                                    Mail to us
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3">
                        <div className="single-contact-info-section">
                           <div className="icon">
                              <i className="fab fa-telegram-plane"></i>
                           </div>
                           <div className="single-contact-info-section__content">
                              <div className="text">
                                 <h3>Private Consultation</h3>
                                 <p>Access to Premium Hardwoods.</p>
                                 {/* <p>@sakwru</p> */}
                              </div>
                              <div className="btn-box">
                                 <Link href="#">
                                    Send Us a Message
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-xl-3">
                        <div className="single-contact-info-section">
                           <div className="icon">
                              <i className="far fa-clock"></i>
                           </div>
                           <div className="single-contact-info-section__content">
                              <div className="text">
                                 <h3>Off.Hrs</h3>
                                 <p>Monday-Satday: 9.00 am to 7.30 pm</p>
                                 <p>Hotline is available 24/7.</p>
                              </div>
                              <div className="btn-box">
                                 <Link href="#">
                                    Get Call Back
                                    <span className="icon-up-right-arrow"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </section>
            {/*Contact Info End*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
                  }}
               ></div>
               <div className="container">
                  <div className="contact-page__inner">
                     <div className="row">
                        <div className="col-xl-5 col-lg-5">
                           <div className="contact-page__left">
                              <div className="contact-page__information">
                                 <h3 className="contact-page__information-title">
                                    Contact with us
                                 </h3>
                                 <ul className="contact-page__information-list list-unstyled">
                                    <li>
                                       <div className="icon">
                                          <span className="fas fa-phone-alt"></span>
                                       </div>
                                       <div className="content">
                                          <h3>Call to Us</h3>
                                          <p>
                                             <Link href="tel:+79118880388">
                                                (+7) 911 888 03 88
                                             </Link>
                                          </p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="icon">
                                          <span className="fas fa-envelope"></span>
                                       </div>
                                       <div className="content">
                                          <h3>Mail to Us</h3>
                                          <p>
                                             <Link href="mailto:info@sakw.ru">
                                                info@sakw.ru
                                             </Link>
                                          </p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="icon">
                                          <span className="fab fa-telegram-plane"></span>
                                       </div>
                                       <div className="content">
                                          <h3>Telegram</h3>
                                          <p>@sakwru</p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="icon">
                                          {/* <span className="fab fa-telegram-plane"></span> */}
                                          <img
                                             src="assets/images/brand/vk-logo.svg"
                                             alt=""
                                             style={{ width: "26px" }}
                                          />
                                       </div>
                                       <div className="content">
                                          <h3>VK</h3>
                                          <p>vk.com/sakwru</p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>

                        <div className="col-xl-7 col-lg-7">
                           <div className="contact-page__right">
                              <h3 className="contact-page__contact-title">
                                 Submit Your Inquiry Today
                              </h3>
                              <form
                                 id="contact-form"
                                 className="contact-page__form"
                                 method="POST"
                              >
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="contact-page__input-box">
                                          <input
                                             type="text"
                                             name="name"
                                             placeholder="Your name"
                                             required=""
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="contact-page__input-box">
                                          <input
                                             type="email"
                                             name="email"
                                             placeholder="Your Email"
                                             required=""
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="contact-page__input-box">
                                          <input
                                             type="number"
                                             placeholder="Phone No."
                                             name="number"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="contact-page__input-box">
                                          <input
                                             type="text"
                                             placeholder="Company"
                                             name="company"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-12">
                                       <div className="contact-page__input-box text-message-box">
                                          <textarea
                                             name="message"
                                             placeholder="Messege"
                                          ></textarea>
                                       </div>
                                       <div className="contact-page__btn-box">
                                          <button
                                             type="submit"
                                             className="thm-btn contact-page__btn"
                                             data-loading-text="Please wait..."
                                          >
                                             Submit
                                             <span className="icon-up-right-arrow"></span>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                              <p className="ajax-response mb-0 error"></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/*Contact Page End*/}

            {/*Google Map Start*/}
            <section className="google-map-one">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
                  }}
               ></div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                  className="google-map__one"
               ></iframe>
            </section>
            {/*Google Map End*/}
         </Layout>
      </>
   );
}
