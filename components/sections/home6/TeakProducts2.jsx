"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
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
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};

const slidesData = [
  {
    title: "Parquet",
    img: "/assets/images/products/Parquet.png",
    desc: "Create beautiful indoor floors with attractive designs and outstanding strength. Teak Parquet is a highly durable option that provides timeless luxury to any room.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-parquet.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Flooring",
    img: "/assets/images/products/Floorboard.png",
    desc: "Our durable and attractive teak floorboards offer reliable and beautiful flooring for your home or business. Perfectly suited for high-traffic areas, they provide both performance and timeless charm.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-flooring.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Decking",
    img: "/assets/images/products/Decking.png",
    desc: "Our teak decking is designed for outdoor use and resists water, rot, and insects. It remains gorgeous for years, resulting in magnificent decks, patios, balconies, and poolside areas.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-decking.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Cladding",
    img: "/assets/images/products/Cladding.png",
    desc: "Real teak cladding adds beauty, allure, and opulence to any wall or ceiling. Create a warm and inviting atmosphere for rooms you won't want to leave.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-cladding.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Boards",
    img: "/assets/images/products/Timber.png",
    desc: "Our solid teak wood boards are as attractive as they are functional. They give a foundation that is beyond compare for all forms of fine woodworking, from custom furniture to elaborate interior elements.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Finger Jointed",
    img: "/assets/images/products/Finger-Joint.png",
    desc: "Finger jointed teak boards provide excellent strength and extremely long lengths. They are great for lengthy countertops, massive tabletops, stair treads, and other large-scale projects that demand solidity.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  {
    title: "Skirting",
    img: "/assets/images/products/Skirtin.png",
    desc: "Fulfill a room's potential with detailed perfection from the finest teak skirting boards. Not just a sturdy protective border, teak skirting also offers the finishing touch of refinement and beauty.",
    lightbox: {
      src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
      downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
    },
  },
  // Add more slides as needed, each with its own lightbox image
];

export default function TeakProducts2() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Our Teak Products
            </h2>
          </div>
          <div className="testimonial-two__bottom">
            <Swiper
              {...swiperOptions}
              className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
            >
              {slidesData.map((slide, idx) => (
                <SwiperSlide key={slide.title}>
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
                            "url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                        }}
                      ></div>
                      <div className="testimonial-two__image">
                        <img src={slide.img} alt="" />
                      </div>
                      <h3
                        className="testimonial-two__name"
                        style={{
                          marginTop: "18px",
                          marginBottom: "44px",
                          fontSize: "24px",
                        }}
                      >
                        <Link href="testimonials">{slide.title}</Link>
                      </h3>
                      <p
                        className="testimonial-two__text"
                        style={{ fontSize: "17px", lineHeight: "26px" }}
                      >
                        {slide.desc}
                      </p>
                      <div className="btn-box" style={{ marginTop: "20px" }}>
                        <button
                          className="thm-btn"
                          onClick={() => setOpenIndex(idx)}
                        >
                          More Details{" "}
                          <span className="icon-up-right-arrow"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Single Lightbox for all slides */}
            <Lightbox
              open={openIndex !== null}
              close={() => setOpenIndex(null)}
              plugins={[Zoom, Download]}
              slides={
                openIndex !== null ? [slidesData[openIndex].lightbox] : []
              }
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
            />
          </div>
        </div>
        <div className="btn-box mt-1 d-flex justify-content-center">
          <a
            className="dwn-btn"
            href="/assets/images/pricelist/sakw-teak-pricelist.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Full Price-List{" "}
            <span className="fas fa-file-download"></span>
          </a>
        </div>
        <div
          className="main-slider-nav"
          style={{ top: "52%", padding: "0 72px" }}
        >
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
