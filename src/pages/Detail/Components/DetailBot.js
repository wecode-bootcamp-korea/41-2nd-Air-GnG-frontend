import React from 'react';
import styled from 'styled-components';
import CallHost from './CallHost';
import Kakaomap from './Kakaomap';
import Review from './Review';

export default function DetailBot({ item }) {
  const arr = item[0];
  return (
    <div>
      <BorderTopDiv>
        <p>호스팅 지역</p>
        <Kakaomap item={item} />
      </BorderTopDiv>
      <Coldiv>
        <IntrodueDiv>
          <MarginDiv>
            <Circle alt="profile" src={arr.host_image} />
            <CenterDiv>
              <span>호스트: {arr.host_name}님</span>
            </CenterDiv>
          </MarginDiv>
          <CenterDiv>
            <p>{arr.host_content}</p>
          </CenterDiv>
        </IntrodueDiv>
        <CallHost />
      </Coldiv>
      <LongBorderBotDiv>
        <p>후기</p>
        <Review />
      </LongBorderBotDiv>
    </div>
  );
}

const Coldiv = styled.div`
  display: flex;
  gap: 100px;
`;
const MarginDiv = styled.div`
  display: flex;
  margin-bottom: 30px;
  span {
    margin-left: 10px;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: larger;
  }
`;

const BorderTopDiv = styled.div`
  width: 100%;
  margin: auto;
  padding: 48px 0;
  border-bottom: 1px solid #dddddd;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;
const Circle = styled.img`
  border-radius: 80%;
  width: 100px;
  height: 100px;
`;
const IntrodueDiv = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  div {
    width: 400px;
  }
`;
const LongBorderBotDiv = styled.div`
  width: 100%;
  margin: auto;
  padding: 48px 0;
  border-top: 1px solid #dddddd;
`;
