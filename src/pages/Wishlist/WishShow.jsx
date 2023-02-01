import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function WishShow({ data }) {
  const navigate = useNavigate();
  const detailHandler = id => {
    navigate(`/room/${id}`);
  };

  return (
    <ProductList>
      {data &&
        data.map(item => {
          return (
            <Wrapper key={item.id}>
              <CardImageCarousel
                modules={[Navigation, Pagination, Scrollbar]}
                navigation
                pagination={{ clickable: true }}
              >
                {ImageList.map(img => {
                  return (
                    <CardSwiperSlide key={img}>
                      <CardImage
                        onClick={e => detailHandler(item.id)}
                        src={item.images[img - 1]}
                      />
                    </CardSwiperSlide>
                  );
                })}
              </CardImageCarousel>
              <CardTitle>{item.title}</CardTitle>
              <CardPrice>
                ₩
                {parseInt(item.price)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                / 박
              </CardPrice>
            </Wrapper>
          );
        })}
    </ProductList>
  );
}

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-left: 6px;
  margin-right: 6px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 300px;
  margin-left: 5px;
  margin-right: 5px;
`;

const CardImageCarousel = styled(Swiper)`
  width: 280px;
  height: 280px;
  cursor: pointer;
`;

const CardSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 220px;
  border-radius: 15px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const CardPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const ImageList = [1, 2, 3, 4, 5];
