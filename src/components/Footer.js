import React from 'react';
import styled from 'styled-components';
import { ImEarth } from 'react-icons/im';
import { SiNaver } from 'react-icons/si';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <FooterDiv>
      <div>
        <FooterTop>
          <div>
            <span>
              © 2023 AirGnG, Inc.© 2023 AirGnG, Inc.· 개인정보· 처리방침 ·
              이용약관 · 사이트맵 · 한국의 변경된 환불 정책 · 회사 ·세부정보 ·
              언어 · 선택
            </span>
          </div>
          <IconDiv>
            <IconContaniner>
              <ImEarth />
              <span>한국어</span>
              <span>₩</span>
              <span>KRW</span>
            </IconContaniner>
            <Icon>
              <a href="http://www.naver.com" target="_blank" rel="noreferrer">
                <SiNaver />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://twitter.com/?lang=ko"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube />
              </a>
            </Icon>
          </IconDiv>
        </FooterTop>
        <div />
        <CompanyDetail>
          <span>
            웹사이트 제공자: AirGnG | 이사: 승기, 기윤 | VAT 번호: AS12123DC |
            사업자 등록 번호: SE 32315 | 연락처: wecode@airGnG.com, 웹사이트,
            080-123-1234 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어제주는
            통신판매 중개자로 에어제쥬 플랫폼을 통하여 게스트와 호스트 사이에
            이루어지는 통신판매의 당사자가 아닙니다. 에어제주 플랫폼을 통하여
            예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를
            제공하는 호스트에게 있습니다
          </span>
        </CompanyDetail>
      </div>
    </FooterDiv>
  );
}

const IconContaniner = styled.div`
  width: 200px;
  display: flex;
  gap: 5px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-right: 10px;
  font-size: 20px;
  width: 200px;
  a {
    text-decoration: none;
    color: black;
  }
`;
const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    font-weight: light;
  }
`;

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  background-color: tomato;
`;

const CompanyDetail = styled.div`
  font-size: 8px;
`;

const IconDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  gap: 10px;
  span {
    display: flex;
    align-items: center;
  }
`;
