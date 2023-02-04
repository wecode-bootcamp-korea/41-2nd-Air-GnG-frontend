import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HouseType({
  setHome,
  home,
  setRoomtype,
  setPrivateroom,
  privateroom,
  setShared,
  shared,
  prevStep,
  nextStep,
}) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="http://www.jejunews.com/news/photo/201907/2143022_171006_1729.jpg"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-2)}>나가기</ExitBtn>
        <HousingType>
          게스트가 머무르게 될 숙소의 종류가 무엇인가요?
        </HousingType>
        <HousingOptionWrapper>
          <HousingOptionBtn
            onClick={e => {
              setHome(!home);
              setRoomtype(e.target.value);
            }}
            primary={home}
            value="1"
          >
            집 전체
          </HousingOptionBtn>
          <HousingOptionBtn
            onClick={e => {
              setPrivateroom(!privateroom);
              setRoomtype(e.target.value);
            }}
            primary={privateroom}
            value="2"
          >
            개인실
          </HousingOptionBtn>
          <HousingOptionBtn
            onClick={e => {
              setShared(!shared);
              setRoomtype(e.target.value);
            }}
            primary={shared}
            value="3"
          >
            다인실
          </HousingOptionBtn>
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

const HousingOptionBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: fit-content;
  padding-left: 50px;
  padding-right: 50px;
  height: 80px;
  font-size: 30px;
  background-color: ${props => (props.primary ? '#a0c4ff' : '#ffe3e0')};
  cursor: pointer;
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
