import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MapModal from './Wishlist/WishMap';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import WishShow from './Wishlist/WishShow';

export default function Wishlist() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://10.58.52.82:3000/room/wishList', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3NTY1ODU3OX0.Bwyxsxxs64MZv5juV5gq1qIfy0T9OWV_DNsgQad9Srw',
      },
    })
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  return (
    <WishlistWrapper>
      <WishlistProducts>
        <Header>
          <BackIconWrapper>
            <BackIcon onClick={() => navigate(-1)} />
          </BackIconWrapper>
          <ShareiconWrapper>
            <ShareIcon />
          </ShareiconWrapper>
        </Header>
        <WishlistText>나의 위시리스트</WishlistText>
        <WishShow data={data} />
      </WishlistProducts>
      <MapModal data={data} />
    </WishlistWrapper>
  );
}

const WishlistWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const WishlistProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: none;
  border-radius: 25px 25px 25px 25px;
  &:hover {
    background-color: rgba(237, 237, 233, 0.5);
    cursor: pointer;
  }
`;

const BackIcon = styled(AiOutlineArrowLeft)`
  font-size: 40px;
`;

const ShareiconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: none;
  border-radius: 25px 25px 25px 25px;
  &:hover {
    background-color: rgba(237, 237, 233, 0.5);
    cursor: pointer;
  }
`;

const ShareIcon = styled(FiShare)`
  font-size: 40px;
`;

const WishlistText = styled.p`
  margin-top: 50px;
  font-size: 30px;
`;
