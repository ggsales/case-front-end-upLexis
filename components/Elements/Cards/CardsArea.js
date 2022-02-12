import { useEffect, useState } from "react";
import CardsContent from "./CardsContent";
import { useRouter } from "next/router";






export default function CardsArea(){
    const [filter, setFilter] = useState("todos");
    const [services, setServices] = useState([]);
    useEffect(() => {
       setServices(CardsContent);
    }, []);
 
    useEffect(() => {
       setServices([]);
 
       const filtered = CardsContent.map((s) => ({
          ...s,
          filtered: s.category.includes(filter),
       }));
       setServices(filtered);
    }, [filter]);





    return(
    <>
        <section className="cards-area">
            <div className="container">
                <div className="row py-2 btn-group-position wow fadeInUp" data-wow-delay=".9s" >
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "todos" ? "active" : ""} onClick={() => setFilter("todos")}><i className="far fa-globe"></i>Todos</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "profissional" ? "active" : ""} onClick={() => setFilter("profissional")}><i className="fas fa-briefcase"></i>Profissional</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "reguladores" ? "active" : ""} onClick={() => setFilter("reguladores")}> <i className="fas fa-landmark"></i>Reguladores</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "socio-ambiental" ? "active" : ""} onClick={() => setFilter("socio-ambiental")}><i className="fas fa-tree"></i>Sócio Ambiental</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "juridico" ? "active" : ""} onClick={() => setFilter("juridico")}><i className="fas fa-gavel"></i>Jurídico</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "listas-restritivas" ? "active" : ""} onClick={() => setFilter("listas-restritivas")}><i className="fas fa-ban"></i>Lista restritivas</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "midia-internet" ? "active" : ""} onClick={() => setFilter("midia-internet")}><i className="fas fa-globe-americas"></i>Midia / Internet</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "bens-imoveis" ? "active" : ""} onClick={() => setFilter("bens-imoveis")}><i className="fas fa-gem"></i>Bens e Imóveis</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position">
                        <button className={filter === "cadastro" ? "active" : ""} onClick={() => setFilter("cadastro")}><i className="fas fa-male"></i>Cadastro</button>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 phone-position" >
                        <button className={filter === "financeiro" ? "active" : ""} onClick={() => setFilter("financeiro")}><i className="fas fa-piggy-bank"></i>Financeiro</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 order-position wow fadeInUp" data-wow-delay="1.2s">
                        <h3>Ordernar</h3>
                        <select defaultValue="Lançamento">
                            <option value="Lançamento">Lançamento</option>
                            <option value="Preço">Preço</option>
                        </select>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row grid wow fadeInLeft" data-wow-delay="1.8s">
                    {services.map((item, i) =>
                    item.filtered === true ? (
                        <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6"  key={i}>
                            <div className="card-box">
                                <div className="card-img">
                                    {item.Image}
                                </div>
                                <div className="card-name">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="card-description">
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-price">
                                    <p>{item.price}</p>
                                    <a href={`detalhes${"/"+ item.id}`}>Saiba mais</a>
                                  
                                </div>
                            </div>
                        </div>
                        ) : ('')
                    )}
                </div>

            </div>
         

        </section>
    </>
    )
}