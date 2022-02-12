

import Slider from "react-slick";


export default function CarrouselHome(){
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true
      };

    return(
        <>
            <section className="carrousel">
                <div className="container">
                    <Slider {...settings}>
                        <div className="container-fluid box-slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 slider-text-title">
                                        <h1>upMiner</h1>
                                        <h2>|</h2>
                                        <h3>Histórico Empresarial</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 slider-text">
                                        <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 slider-prices">
                                        <span><small>R$</small>40,00</span>
                                        <a href="/detalhes">Saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid box-slide_2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 slider-text-title">
                                        <h1>upMiner</h1>
                                        <h2>|</h2>
                                        <h3>Histórico Empresarial</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 slider-text">
                                        <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 slider-prices">
                                        <span><small>R$</small>40,00</span>
                                        <a href="/detalhes">Saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid box-slide_3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 slider-text-title">
                                        <h1>upMiner</h1>
                                        <h2>|</h2>
                                        <h3>Histórico Empresarial</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 slider-text">
                                        <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 slider-prices">
                                        <span><small>R$</small>40,00</span>
                                        <a href="/detalhes">Saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}