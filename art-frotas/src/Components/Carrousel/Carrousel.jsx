import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react'; //importando os componentes do swiper react
import 'swiper/css'; //importando o css do swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import './Carrousel.css';

import ChevroletOnix from '../../assets/imagens/Chevrolet-Onix.jpg';
import HyundaiHb20 from '../../assets/imagens/hyundai-hb20.jpg';
import JeepRenegade from '../../assets/imagens/Jeep-Renegade.jpg';
import PicapeToro from '../../assets/imagens/picape-toro.jpg';
import RenaultLogan from '../../assets/imagens/renault-logan.jpg';
import VwGol from '../../assets/imagens/vw-gol.jpg';
import VwUp from '../../assets/imagens/vw-up.jpg';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {/* Slide 1 */}
            <SwiperSlide id='container' className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={ChevroletOnix} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div className="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    Chevrolet Onix
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={HyundaiHb20} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div className="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    Hyundai HB20
                                </h2>
                                <h3 className="food-rating">
                                    <span>5.0</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={JeepRenegade} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div class="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    Jeep Renegade
                                </h2>
                                <h3 className="food-rating">
                                    <span>5.0</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={PicapeToro} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div className="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    Fiat Toro
                                </h2>
                                <h3 className="food-rating">
                                    <span>5.0</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 5 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={RenaultLogan} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div class="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    Renault Logan
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 6 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={VwGol} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div className="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    volkswagen Gol
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 7 */}
                    <SwiperSlide className="tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={VwUp} alt="Tranding" />
                        </div>
                        <div className="tranding-slide-content">
                            <div className="tranding-slide-content-bottom">
                                <h2 className="food-name">
                                    volkswagen UP
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.1</span>
                                    <div className="rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
        </Swiper>
    );
};