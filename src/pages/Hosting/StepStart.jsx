import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function FirstStep({ nextStep }) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="http://res.heraldm.com/content/image/2022/08/31/20220831000494_0.jpg"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-1)}>나가기</ExitBtn>
        <MainTitle>호스트가 되는 첫걸음을 내딛어보세요</MainTitle>
        <MainSubtitle>
          제출된 모든 체험 아이디어는 에어감귤 담당 부서의 검토 절차를 거칩니다.
          제출하신 아이디어가 에어감귤의 체험 기준에 부합하면 호스팅 가능한
          날짜를 추가한 후 바로 체험을 시작하실 수 있습니다.
        </MainSubtitle>
        <StartBtn onClick={nextStep}>시작하기</StartBtn>
      </MainDescription>
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

const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const MainSubtitle = styled.h2`
  margin-top: 30px;
  font-size: 18px;
  color: black;
`;

const StartBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ff375b;
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
