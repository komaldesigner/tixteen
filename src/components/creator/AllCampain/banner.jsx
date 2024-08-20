import React from 'react';
import banner1 from "../../../assets/creator/banner1.png";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../../../styles/creator/AllCampain/banner.css";

const banner2 = "https://tixteen.com/tixteenapp/influencer/assets/img/banner2.png";
const images = [ banner2, banner1];

function BannerCampain() {
    return (
        <div className="main_creator_banner mb-4">
            <div id="carouselExampleIndicators" className="carousel slide">
                <ol className="carousel-indicators">
                    {images.map((_, index) => (
                        <li
                            key={index}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={image} className="d-block w-100 caretor_banner_image" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default BannerCampain;
