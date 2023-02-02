import React, { useState, useSyncExternalStore } from 'react';
import styled from 'styled-components';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';
export default function UserModal({ setUserModalIsOpen, setLoginModalIsOpen }) {
  const isLoginUser = localStorage.getItem('accessToken');

  const userModalClose = () => {
    if (isLoginUser) {
      localStorage.removeItem('accessToken');
      setUserModalIsOpen(prev => !prev);
    } else {
      setLoginModalIsOpen(prev => !prev);
      setUserModalIsOpen(prev => !prev);
    }
  };
  return (
    <ModalWrap onClick={e => e.stopPropagation()}>
      <UlList onClick={userModalClose}>
        {isLoginUser ? '로그아웃' : '로그인'}
      </UlList>
      <UlList onClick={userModalClose}>
        {' '}
        {isLoginUser ? '내 정보' : '회원가입'}
      </UlList>
      <UlList>당신의 공간을 에어감귤하세요</UlList>
      <UlList>체험 호스팅하기</UlList>
      <UlList>도움말</UlList>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  background-color: white;
  position: absolute;
  left: -160px;
  bottom: -520px;
  padding: 10px 0px;
  height: 215px;
  top: 50px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  line-height: 40px;
  text-align: left;
  border-radius: 10px;
  flex-direction: column;
`;
const UlList = styled.ul`
  width: 100%;
  padding-left: 10px;
  &:hover {
    background-color: #e9e9e9;
  }
`;
