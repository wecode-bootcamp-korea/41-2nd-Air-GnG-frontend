import React from 'react';
import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';

export default function InfoDetail() {
  return (
    <>
      <LeftContainer>
        <BookingHeader>필수 입력 정보</BookingHeader>
        <InfoBox>
          <div>
            <p>호스트에게 메세지 보내기</p>
            <InfoDescription>
              호스트에게 여행 목적과 도착 예정 시간을 알려주세요.
            </InfoDescription>
          </div>
          <AddButton>추가</AddButton>
        </InfoBox>
        <InfoBox>
          <div>
            <p>전화번호</p>
            <InfoDescription>
              여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.
            </InfoDescription>
          </div>
          <AddButton>추가</AddButton>
        </InfoBox>
      </LeftContainer>
      <LeftContainer>
        <BookingHeader>환불 정책</BookingHeader>
        <InfoBox>
          <div>
            <p>2월 21일 전까지 무료로 취소하실 수 있습니다.</p>
            <InfoDescription>
              체크인 날짜인 2월 26일 전에 취소하면 부분 환불을 받으실 수
              있습니다. <SearchDetail>자세히 알아보기</SearchDetail>
            </InfoDescription>
          </div>
        </InfoBox>
      </LeftContainer>
      <LeftContainer>
        <CalenderBox>
          <Calender>
            <BiCalendar />
          </Calender>
          <div>
            <p>
              호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직
              확정된 것이 아닙니다.
            </p>
            <InfoDescription>
              예약 확정 전까지는 요금이 청구되지 않습니다.
            </InfoDescription>
          </div>
        </CalenderBox>
      </LeftContainer>
      <BookingButton>
        아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 게스트에게 적용되는
        기본 규칙, 에어비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이
        본인에게 있을 경우 에어비앤비가 결제 수단으로 청구의 조치를 취할 수
        있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된
        총액이 결제되는 데 동의합니다.
      </BookingButton>
    </>
  );
}

const AddButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 30px;
  width: 55px;
  background-color: white;
`;

const SearchDetail = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: black;
`;

const CalenderBox = styled.div`
  display: flex;
`;

const Calender = styled.div`
  color: tomato;
  margin-right: 25px;
  font-size: 35px;
`;

const BookingButton = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 40px;
  font-size: 11px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  p {
    margin-bottom: 10px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #dddddd;
  padding-top: 25px;
  padding-bottom: 25px;

  p {
    margin-bottom: 5px;
  }
`;

const InfoDescription = styled.div`
  font-size: 14px;
  color: grey;
`;

const BookingHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
