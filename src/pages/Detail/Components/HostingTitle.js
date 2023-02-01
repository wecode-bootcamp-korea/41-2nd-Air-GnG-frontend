import React from 'react';
import styled from 'styled-components';
import { RiMedalFill } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { BiBed } from 'react-icons/bi';
import Datepicker from './Datepicker';
import Facilities from './Facilities';

export default function HostingTitle({ items }) {
  const { name, title, limit, bed, url1, detail } = items;
  const arr = items[0];
  return (
    <TotalDiv>
      <Div>
        <div>
          <span>
            {arr.host_name} 님이 호스팅하는 {arr.title}
          </span>
          <Condition>
            <p>
              최대{arr.maximom_people}명 • 침대{arr.bed_count}개 • 침실
              {arr.bedroom_count}개 • 화장실 {arr.bathroom_count}개
            </p>
          </Condition>
        </div>
        <ProfileImg>
          <img alt="profile" src={arr.host_image} />
        </ProfileImg>
      </Div>

      <HostInfoDiv>
        <InfoWarpper>
          <BigIcon>
            <RiMedalFill />
          </BigIcon>
          <HotelInfo>
            <span>{arr.host_name}님은 슈퍼호스트입니다.</span>

            <p>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </p>
          </HotelInfo>
        </InfoWarpper>
        <InfoWarpper>
          <BigIcon>
            <SlLocationPin />
          </BigIcon>
          <HotelInfo>
            <span>훌륭한 숙소 위치</span>
            <p>최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</p>
          </HotelInfo>
        </InfoWarpper>
      </HostInfoDiv>
      <BorderBotDiv>
        <AircoverContent>에어커버</AircoverContent>
        <p>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
        </p>
      </BorderBotDiv>
      <BorderBotDiv>{arr.description}</BorderBotDiv>
      <BorderBotDiv>
        <AircoverContent>숙박 장소</AircoverContent>
        <BedDiv>
          <BigIcon>
            <BiBed />
          </BigIcon>
          <p>침실</p>
          <p>침대 {arr.bedroom_count}개</p>
        </BedDiv>
      </BorderBotDiv>
      <BorderTopDiv>
        <BigFont>숙소편의시설</BigFont>
        <Facilities />
      </BorderTopDiv>
    </TotalDiv>
  );
}
const BigFont = styled.p`
  font-size: larger;
  font-weight: 600;
`;
const BorderTopDiv = styled.div`
  width: 1120px;
  margin: auto;
  padding: 48px 0;
  border-bottom: 1px solid #dddddd;
`;
const TotalDiv = styled.div`
  width: 60%;
`;
const Div = styled.div`
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  height: 128px;
  padding: 48px 0 24px 0;
  margin: 0 auto;
  span {
    font-size: 22px;
    font-weight: 600px;
  }
`;
const Condition = styled.div`
  font-size: 16px;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  img {
    width: 70px;
    height: 70px;
    border-radius: 90%;
  }
`;

const HotelInfo = styled.div``;
const InfoWarpper = styled.div`
  display: flex;
  padding: 12px;
  p {
    font-size: 8px;
  }
`;
const HostInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  border-bottom: 1px solid #dddddd;
  margin: auto;
`;

const BorderBotDiv = styled.div`
  margin: auto;
  padding: 48px 0;
  border-bottom: 1px solid #dddddd;
`;

const AircoverContent = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: tomato;
  margin-bottom: 20px;
`;

const BedDiv = styled.div`
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 16px;
  height: 143px;
  width: 207px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    font-size: 16px;
    font-weight: 600px;
  }
`;

const BigIcon = styled.div`
  font-size: 24px;
`;
