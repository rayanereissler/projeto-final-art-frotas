import { Link } from 'react-router-dom';

import './Carrousel.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChevroletOnix from '../../assets/imagens/Chevrolet-Onix.jpg';
import HyundaiHb20 from '../../assets/imagens/hyundai-hb20.jpg';
import JeepRenegade from '../../assets/imagens/Jeep-Renegade.jpg';
import PicapeToro from '../../assets/imagens/picape-toro.jpg';
import RenaultLogan from '../../assets/imagens/renault-logan.jpg';
import VwGol from '../../assets/imagens/vw-gol.jpg';
import VwUp from '../../assets/imagens/vw-up.jpg';

export default function Carrousel() {
    return (
        <>
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={ChevroletOnix} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HyundaiHb20} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={JeepRenegade} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={PicapeToro} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RenaultLogan} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={VwGol} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={VwUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={PicapeToro} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RenaultLogan} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
