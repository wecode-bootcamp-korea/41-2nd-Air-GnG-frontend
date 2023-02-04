import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Description({
  title,
  saveTitle,
  description,
  saveDescription,
  hostdescription,
  saveHostDescription,
  prevStep,
  nextStep,
}) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2LCUa%2FbtqzOedWD5V%2FwSlddKKbCdQCbvmItIV8vk%2Fimg.jpg"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-7)}>나가기</ExitBtn>
        <HousingType>숙소 및 호스트 정보를 입력해주세요.</HousingType>
        <HousingTitle>숙소 이름 정하기</HousingTitle>
        <HousingSubtitle>
          숙소 이름에서 숙소를 차별화될 수 있는 특징을 강조해야 합니다.
        </HousingSubtitle>
        <HousingTitleInput onChange={saveTitle} value={title} />
        <HousingTitle>숙소 설명하기</HousingTitle>
        <HousingDescriptionInput
          onChange={saveDescription}
          value={description}
        />
        <HousingTitle>호스트 설명하기</HousingTitle>
        <HostDescriptionInput
          onChange={saveHostDescription}
          value={hostdescription}
        />
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

const HousingTitle = styled.h1`
  font-size: 35px;
  margin-left: auto;
  margin-right: auto;
`;

const HousingSubtitle = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
`;

const HousingTitleInput = styled.input`
  width: 30vw;
  height: 5vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
`;

const HousingDescriptionInput = styled.input`
  width: 30vw;
  height: 10vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
`;

const HostDescriptionInput = styled.input`
  width: 30vw;
  height: 5vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
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
