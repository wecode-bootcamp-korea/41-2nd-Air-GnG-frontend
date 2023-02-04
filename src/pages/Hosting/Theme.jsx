import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Theme({
  prevStep,
  nextStep,
  setOutreach,
  outreach,
  setCountryside,
  countryside,
  setTheme,
  setBeach,
  beach,
  setFarm,
  farm,
  setMountain,
  mountain,
  setLocation,
  setNorth,
  north,
  setEast,
  east,
  setWest,
  west,
  setSouth,
  south,
}) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2022/02/a-2.jpg?resize=768%2C576&ssl=1"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-3)}>나가기</ExitBtn>
        <HousingType>숙소의 테마와 지역을 선택해주세요.</HousingType>
        <HousingOptionWrapper>
          <HousingThemeBtn
            onClick={e => {
              setOutreach(!outreach);
              setTheme(e.target.value);
            }}
            primary={outreach}
            value="1"
          >
            속세를 벗어난 숙소
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setCountryside(!countryside);
              setTheme(e.target.value);
            }}
            primary={countryside}
            value="2"
          >
            한적한 시골
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setBeach(!beach);
              setTheme(e.target.value);
            }}
            primary={beach}
            value="3"
          >
            해변 바로 앞
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setFarm(!farm);
              setTheme(e.target.value);
            }}
            primary={farm}
            value="4"
          >
            감귤농장
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setMountain(!mountain);
              setTheme(e.target.value);
            }}
            primary={mountain}
            value="5"
          >
            한라산 근처
          </HousingThemeBtn>
        </HousingOptionWrapper>
        <HousingOptionWrapper>
          <HousingThemeBtn
            onClick={e => {
              setNorth(!north);
              setLocation(e.target.value);
            }}
            primary={north}
            value="2"
          >
            북쪽
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setEast(!east);
              setLocation(e.target.value);
            }}
            primary={east}
            value="3"
          >
            동쪽
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setWest(!west);
              setLocation(e.target.value);
            }}
            primary={west}
            value="1"
          >
            서쪽
          </HousingThemeBtn>
          <HousingThemeBtn
            onClick={e => {
              setSouth(!south);
              setLocation(e.target.value);
            }}
            primary={south}
            value="4"
          >
            남쪽
          </HousingThemeBtn>
        </HousingOptionWrapper>
      </MainDescription>
      <PrevBtn onClick={prevStep}>이전</PrevBtn>
      <NextBtn onClick={nextStep}>다음</NextBtn>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 48%;
  height: 100vh;
`;

const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8961e;
  width: 52%;
  height: 100vh;
  padding-left: 50px;
  padding-right: 45px;
`;

const ExitBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 25px;
  position: fixed;
  right: 40px;
  top: 35px;
  background-color: #222222;
  border: none;
  color: white;
  cursor: pointer;
`;

const HousingType = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 70px;
`;

const HousingOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const HousingThemeBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  font-size: 20px;
  background-color: ${props => (props.primary ? '#a0c4ff' : '#ffe3e0')};
  cursor: pointer;
`;

const NextBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
`;

const PrevBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  left: 50.5%;
  cursor: pointer;
`;
