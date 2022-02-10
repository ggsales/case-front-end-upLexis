


import Slider from "react-slick";


export default function CarrouselContents(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        initialSlide: 0,
      };


    return(
        <section className="carrousel-contents">
            <div className="container">
                <div className="row">
                    <div className="col-12 btn-back">
                        <a> {"<"} </a>
                        <h2>titulo</h2>
                    </div>
                    <div className="container">
                    <Slider {...settings}>
                        <div className="container box-slide-details">
                            <div className="row">
                                <div className="col-lg-5  img-box-wrapper">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="col-lg-5 img-box-wrapper mobile-hide">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>    
                        </div>

                        <div className="container box-slide-details">
                            <div className="row">
                                <div className="col-lg-5 img-box-wrapper">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="col-lg-5  img-box-wrapper mobile-hide">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>    
                        </div>

                        <div className="container box-slide-details">
                            <div className="row">
                                <div className="col-lg-5 img-box-wrapper">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="col-lg-5 img-box-wrapper mobile-hide">
                                    <img src="/img/carrousel/img-slider-6.jpg" />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>    
                        </div>
                    </Slider>

                    </div>

                </div>

            </div>

        </section>

    )
}