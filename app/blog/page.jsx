'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog">
        {/* Blog One Start */}
        <section className="blog-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>23</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">Top 10 Modern Building
                                                <br/>
                                                Design in Califronia, USA</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>13</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">It is a long established
                                                fact <br/> that a reader will</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>04</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">Lorem Ipsum is simply
                                                <br/>
                                                dummy text of the printing</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>09</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">It is a long established
                                                fact that a reader</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-5.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>25</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">A corporate business
                                                entity is an oit organization</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                    {/* Blog One Single Start */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <img src="assets/images/blog/blog-1-6.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/blog-one-content-shape-1.png)' }} >
                                </div>
                                <div className="blog-one__date-and-title-box">
                                    <div className="blog-one__date">
                                        <h3>28</h3>
                                        <p>Sep 2024</p>
                                    </div>
                                    <div className="blog-one__title-box">
                                        <h3 className="blog-one__title"><Link href="blog-details">Rapidiously evolve
                                                pandemic experiences</Link></h3>
                                    </div>
                                </div>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="thm-btn blog-one__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog One Single End */}
                </div>
            </div>
        </section>
        {/* Blog One End */}

        </Layout>
        </>
    )
}