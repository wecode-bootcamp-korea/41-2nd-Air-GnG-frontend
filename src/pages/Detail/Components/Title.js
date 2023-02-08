import React, { useState } from 'react';
import styled from 'styled-components';
import {
  RiMedalLine,
  RiShareBoxLine,
  RiHeart3Line,
  RiHeart3Fill,
} from 'react-icons/ri';
import { BsStarFill } from 'react-icons/bs';
export default function Title({ item }) {
  const [isTrue, setIsTrue] = useState(false);
  const arr = item[0];
  const handleClick = () => {
    setIsTrue(!isTrue);
    isTrue === false
      ? fetch('http://10.58.52.82:3000/rooms/wishList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify({
            roomId: arr.id,
          }),
        }).then(response => response.json())
      : fetch(`http://10.58.52.82:3000/rooms/wishList`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify({
            roomId: arr.id,
          }),
        }).then(response => response.json());
  };

  const saveHandler = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        title: 'update title',
      }),
    }).then(response => console.log(response));
  };
  return (
    <Warpper>
      <TopTitle>
        <h1>{arr.title}</h1>
        <div>
          <ICON>
            <BsStarFill style={{ color: 'tomato' }} />
            <span>후기 300개</span>
            <RiMedalLine style={{ color: 'tomato' }} />
            <span>후기 300개</span>
            <span>{arr.address}</span>
          </ICON>
          <div>
            <div>
              <RiShareBoxLine />

              <span>공유하기</span>
            </div>
            <div onClick={handleClick}>
              {isTrue ? (
                <RiHeart3Fill style={{ color: 'red' }} />
              ) : (
                <RiHeart3Line />
              )}
              <span>저장</span>
            </div>
          </div>
        </div>
      </TopTitle>
      <ImgWarpper>
        <div>
          <img alt="메인사진" src={arr.room_image[0]} />
        </div>
        <ImgBox>
          <img alt="부가사진" src={arr.room_image[1]} />
          <img alt="부가사진" src={arr.room_image[2]} />
        </ImgBox>
        <ImgBox>
          <img alt="부가사진" src={arr.room_image[3]} />
          <img alt="부가사진" src={arr.room_image[4]} />
        </ImgBox>
      </ImgWarpper>
    </Warpper>
  );
}

const Warpper = styled.div`
  margin: 0 auto;
  width: 1120px;
`;

const ICON = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const TopTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  height: 86px;
  padding-top: 24px;
  span {
    font-size: 16px;
    margin: auto;
  }
  div {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  /* @media (max-width: 1000px) {
    width: 300px;
  } */
`;

const ImgWarpper = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  width: 1120px;
  height: 500px;

  div {
    display: flex;
    height: 100%;
  }
  img {
    width: 550px;
    object-fit: cover;
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 10px;
  gap: 10px;
  img {
    object-fit: cover;
    width: 293px;
    height: 250px;
  }
`;
