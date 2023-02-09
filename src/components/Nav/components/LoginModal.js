import React, { useEffect, useRef } from 'react';
import { Form, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';

export default function LoginModal(setLoginModalIsOpen) {
  const clickKakao = () => {
    window.location.href = kakaoAuthUrl;
  };
  const REST_API_KEY = '8cbc336215abe73fe2468fa08d61e1ac';
  const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const el = useRef();

  return (
    <LoginModalContainer ref={el} onClick={e => e.stopPropagation()}>
      <LoginModalTop>
        <Title>로그인 또는 회원가입</Title>
      </LoginModalTop>
      <LoginModalMid>
        <Welcome>에어감귤에 오신 것을 환영합니다</Welcome>
      </LoginModalMid>
      <LoginModalBot>
        <Kakao onClick={clickKakao}>
          <KakaoIcon src="../../../images/nav/kakao.png" />
          카카오로 로그인
        </Kakao>
        <Naver>
          <NaverIcon src="../../../images/nav/naver.png" />
          네이버로 로그인
        </Naver>
        <Facebook>
          <FacebookIcon src="../../../images/nav/facebook.png" />
          페이스북으로 로그인
        </Facebook>
        <Google>
          <GoogleIcon src="../../../images/nav/google.png" />
          구글로 로그인
        </Google>
      </LoginModalBot>
    </LoginModalContainer>
  );
}

const LoginModalContainer = styled.div`
  background-color: white;
  position: absolute;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  width: 568px;
  height: 590px;
  margin-left: -1470px;
  margin-bottom: -900px;
  border-radius: 13px;
  flex-direction: column;
`;

const LoginModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ebebeb;
`;

const CloseBtn = styled.span`
  padding: 10px 24px 20px;
  font-weight: 800;
`;

const Title = styled.h1`
  padding: 10px 24px 20px;
  font-weight: 500;
`;

const LoginModalMid = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ebebeb;
`;

const Welcome = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 10px;
`;

const LoginModalBot = styled.div`
  flex-direction: column;
`;

const Kakao = styled.button`
  display: flex;
  background-color: #fee500;
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 25px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 1.5px grey;
  }
`;
const KakaoIcon = styled.img`
  width: 30px;
  height: 30px;
  justify-content: start;
  margin-left: 20px;
  margin-right: 140px;
`;
const Google = styled.button`
  display: flex;
  background-color: #ffffff;
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 25px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: none;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 1.5px grey;
  }
`;
const GoogleIcon = styled.img`
  width: 30px;
  height: 30px;
  justify-content: start;
  margin-left: 20px;
  margin-right: 150px;
`;
const Facebook = styled.button`
  display: flex;
  background-color: #3b5998;
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 25px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 1.5px grey;
  }
`;
const FacebookIcon = styled.img`
  width: 30px;
  height: 30px;
  justify-content: start;
  margin-left: 20px;
  margin-right: 130px;
`;
const Naver = styled.button`
  display: flex;
  background-color: #2db400;
  position: relative;
  width: 520px;
  height: 50px;
  margin: 10px 25px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 1.5px grey;
  }
`;
const NaverIcon = styled.img`
  width: 30px;
  height: 30px;
  justify-content: start;
  margin-left: 20px;
  margin-right: 140px;
`;
