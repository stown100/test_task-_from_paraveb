// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Preview from '../Preview/Preview';

const SimpleSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            console.log(className)
          return '<span class="' + className + '">' + "</span>";
        },
      };
    return (
        <Swiper className='mySwipper'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={pagination}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Preview />
            </SwiperSlide>
            <SwiperSlide>
                <Preview />
            </SwiperSlide>
            <SwiperSlide>
                <Preview />
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default SimpleSwiper;