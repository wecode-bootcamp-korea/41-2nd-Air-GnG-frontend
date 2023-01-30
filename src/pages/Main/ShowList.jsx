import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Like from './Like';

export default function ShowList({ data }) {
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
              <Like id={item.id} />
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
  margin-left: 100px;
  margin-right: 100px;
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

const ITEMS = [
  {
    id: 1,
    title: '1번 숙소',
    review: 4.79,
    product_image: [
      'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1675012848706-ff1b1fd7c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
      'https://plus.unsplash.com/premium_photo-1670390747519-0df3dd705d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674993815218-287eb3f9ce0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
      'https://images.unsplash.com/photo-1675079382790-cb3c2292c9e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    ],
    price: 122640,
    lat: 33.48755975,
    lng: 126.9019001,
  },
  {
    id: 2,
    title: '2번 숙소',
    review: 5.0,
    product_image: [
      'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 133640,
    lat: 33.49393717,
    lng: 126.9535452,
  },
  {
    id: 3,
    title: '3번 숙소',
    review: 5.0,
    product_image: [
      'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 133640,
    lat: 33.5199036,
    lng: 126.9542202,
  },
  {
    id: 4,
    title: '4번 숙소',
    review: 5.0,
    product_image: [
      'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 133640,
    lat: 33.51871579,
    lng: 126.8977316,
  },
  {
    id: 5,
    title: '5번 숙소',
    review: 5.0,
    product_image: [
      'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 133640,
    lat: 33.52098366,
    lng: 126.8570831,
  },
  {
    id: 6,
    title: '6번 숙소',
    review: 5.0,
    product_image: [
      'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 133640,
    lat: 33.55325228,
    lng: 126.8225717,
  },
];
