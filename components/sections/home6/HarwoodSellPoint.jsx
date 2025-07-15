"use client";
import Link from "next/link";
export default function HarwoodSellPoint() {
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
                  <span className="fas fa-fist-raised"></span>
                </div>
                <h3 className="feature-two__title">
                  {/* <Link href="interior-design">Lasting Strength</Link> */}
                  Lasting Strength
                </h3>
                <p className="feature-two__text">
                  Built for resistance to use, decay, and insects, hardwood
                  lasts for generations.
                  <br />
                  <br />
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
                  <span className="fas fa-swatchbook"></span>
                </div>
                <h3 className="feature-two__title">
                  {/* <Link href="urban-design">Timeless elegance</Link> */}
                  Timeless elegance
                </h3>
                <p className="feature-two__text">
                  Rich tones and beautiful grain patterns add depth and
                  character to any space.
                  <br />
                  <br />
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
                  <span className="fas fa-search-location"></span>
                </div>
                <h3 className="feature-two__title">
                  {/* <Link href="landscape-design">Trusted Sourced</Link> */}
                  Trusted Sourced
                </h3>
                <p className="feature-two__text">
                  Responsible sourcing from renowned facilities ensures business
                  integrity, quality, and competitive pricing.
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
