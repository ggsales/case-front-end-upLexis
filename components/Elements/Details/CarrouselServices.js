


import Slider from "react-slick";
import CardsContent from "../Cards/CardsContent";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { useRouter } from "next/router";


export default function CarrouselContents(){
   
    const router = useRouter() 
    const { id } = router.query
    const [services, setServices] = useState([]);
    const [url, setUrl] = useState("");

    
    useEffect(() => {
        let urlSplit = window.location.pathname.split("detalhes/");
        let parametroUrl = urlSplit[1]
       setUrl(parametroUrl);
    }, [url]);


    useEffect(() => {
        setServices(CardsContent);
     }, []);

     useEffect(() => {
        setServices([]);
        const filtered = CardsContent.filter(item=> item.id.toString() === id)
        setServices(filtered);
     }, [id]);

        
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        initialSlide: 0,
      };

    

    return(
        <section className="carrousel-contents">
            {services.map((item, i) => url === id ?
            
            (
            <div className="container">
                <div className="row">
                    <div className="col-12 btn-back wow fadeInUp" data-wow-delay=".9s">
                        <a href="/"> {"<"} </a>
                        <h2>{item.name}</h2>
                    </div>
                    <div className="container wow fadeInUp" data-wow-delay="1.5s">
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
            <div className="row wow fadeInUp" data-wow-delay="1.5s">
                <div className="col-12 description">
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="row  wow fadeInLeft" data-wow-delay="1.0s">
                <div className="col-12 price-position">
                    <h3>{item.price}</h3>
                    <button>Habilitar</button>
                </div>
            </div>
        </div>    
            ) : ("")
    )}

    </section>


    )
}