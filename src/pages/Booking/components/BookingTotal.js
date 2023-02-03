import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export default function BookingTotal({
  totalprice,
  servicefee,
  dayperfee,
  nights,
  nightspay,
  cleanpay,
  title,
  img,
  contents,
}) {
  return (
    <RightContent>
      <ConfirmInfoBox>
        <ContainerHeader>
          <ConfirmImg src={img} alt="ConfirmImg" />
          <div>
            <p>{title}</p>
            <p>{contents}</p>
            <span>
              <AiFillStar /> &nbsp;4.70(후기 441개)
            </span>
          </div>
        </ContainerHeader>
        <ContainerSection>
          <p>
            <span>에어커버</span>를 통한 예약 보호
          </p>
        </ContainerSection>
        {nights > 0 ? (
          <div>
            <ContainerSection>
              <Fee>요금 세부정보</Fee>
              <FeeContent>
                <p>
                  ₩ {dayperfee.toLocaleString()} x {nights}박
                </p>
                <p>₩ {nightspay}</p>
              </FeeContent>
              <FeeContent>
                <p>청소비</p>
                <p>₩ {cleanpay.toLocaleString()}</p>
              </FeeContent>
              <FeeContent>
                <p>서비스 수수료</p>
                <p>₩ {servicefee.toLocaleString()}</p>
              </FeeContent>
            </ContainerSection>
            <ContainerSection>
              <div>
                <p>총 합계(KRW)</p>
                <p>₩ {totalprice.toLocaleString()}</p>
              </div>
            </ContainerSection>
          </div>
        ) : (
          ''
        )}
      </ConfirmInfoBox>
    </RightContent>
  );
}

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  position: sticky;
  top: 50px;
`;

const ConfirmInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  scroll-padding-right: 15px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  margin-left: 70px;
`;

const ContainerHeader = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
  }
  p {
    margin-bottom: 10px;
  }
  span {
    display: block;
    display: flex;
    margin-top: 20px;
    color: grey;
  }
`;

const ConfirmImg = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 8px;
`;

const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #dddddd;

  span {
    font-size: 20px;
    color: tomato;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-top: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Fee = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const FeeContent = styled.div`
  p {
    margin-top: 15px;
  }
`;
