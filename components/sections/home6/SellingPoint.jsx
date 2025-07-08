"use client";
import Link from "next/link";
export default function SellingPoint() {
  return (
    <>
      {/*Feature Two Start */}
      <section className="feature-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="fas fa-history"></span>
                </div>
                <h3 className="feature-two__title">
                  <Link href="interior-design">Lasting Beauty</Link>
                </h3>
                <p className="feature-two__text">
                  Golden grain, durable strength, <br /> and timeless appeal.
                </p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="fas fa-globe-asia"></span>
                </div>
                <h3 className="feature-two__title">
                  <Link href="urban-design">Premium Thai origin</Link>
                </h3>
                <p className="feature-two__text">
                  Sourced from the one of world's <br /> finest teak growing
                  location.
                </p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="feature-two__single last-child">
                <div className="feature-two__icon">
                  <span className="far fa-hourglass"></span>
                </div>
                <h3 className="feature-two__title">
                  <Link href="landscape-design">Smart investment</Link>
                </h3>
                <p className="feature-two__text">
                  An excellent legacy that expands <br /> over time.
                </p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
          </div>
        </div>
      </section>
      {/*Feature Two End */}
    </>
  );
}
