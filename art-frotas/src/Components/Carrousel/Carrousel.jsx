import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './Carrousel.css';



import ChevroletOnix from '../../assets/imagens/Chevrolet-Onix.jpg';
import HyundaiHb20 from '../../assets/imagens/hyundai-hb20.jpg';
import JeepRenegade from '../../assets/imagens/Jeep-Renegade.jpg';
import PicapeToro from '../../assets/imagens/picape-toro.jpg';
import RenaultLogan from '../../assets/imagens/renault-logan.jpg';
import VwGol from '../../assets/imagens/vw-gol.jpg';
import VwUp from '../../assets/imagens/vw-up.jpg';

function Carrousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src= {ChevroletOnix} /></SwiperSlide>
                <SwiperSlide><img src= {HyundaiHb20} /></SwiperSlide>
                <SwiperSlide><img src= {JeepRenegade} /></SwiperSlide>
                <SwiperSlide><img src= {PicapeToro} /></SwiperSlide>
                <SwiperSlide><img src= {RenaultLogan} /></SwiperSlide>
                <SwiperSlide><img src= {VwGol} /></SwiperSlide>
                <SwiperSlide><img src= {VwUp} /></SwiperSlide>
                
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle  cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}

export default Carrousel;







