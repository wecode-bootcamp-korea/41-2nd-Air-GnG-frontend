import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

export default function Accommodation({
  minusGuest,
  plusGuest,
  minusBed,
  plusBed,
  minusBath,
  plusBath,
  minusRoom,
  plusRoom,
  guestcount,
  bedcount,
  bathcount,
  roomcount,
  prevStep,
  nextStep,
}) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="https://hau-package-img.s3.ap-northeast-2.amazonaws.com/1660276261677_stay_gurm_jeju-56.jpg"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-5)}>나가기</ExitBtn>
        <HousingType>숙소에서 맞이할 최대 인원 수를 알려주세요.</HousingType>
        <NumberWrapper>
          <ItemWrapper>
            <ItemText>게스트</ItemText>
            <CountWrapper>
              <MinusIcon onClick={minusGuest} />
              <NumberText>{guestcount}</NumberText>
              <PlusIcon onClick={plusGuest} />
            </CountWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ItemText>침대</ItemText>
            <CountWrapper>
              <MinusIcon onClick={minusBed} />
              <NumberText>{bedcount}</NumberText>
              <PlusIcon onClick={plusBed} />
            </CountWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ItemText>침실</ItemText>
            <CountWrapper>
              <MinusIcon onClick={minusRoom} />
              <NumberText>{roomcount}</NumberText>
              <PlusIcon onClick={plusRoom} />
            </CountWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ItemText>욕실</ItemText>
            <CountWrapper>
              <MinusIcon onClick={minusBath} />
              <NumberText>{bathcount}</NumberText>
              <PlusIcon onClick={plusBath} />
            </CountWrapper>
          </ItemWrapper>
        </NumberWrapper>
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

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.span`
  font-size: 25px;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;

const MinusIcon = styled(AiOutlineMinusCircle)`
  font-size: 30px;
  cursor: pointer;
`;

const NumberText = styled.span`
  font-size: 25px;
`;

const PlusIcon = styled(AiOutlinePlusCircle)`
  font-size: 30px;
  cursor: pointer;
`;
