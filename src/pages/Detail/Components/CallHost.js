import React from 'react';
import styled from 'styled-components';

export default function CallHost() {
  return (
    <FlexDiv>
      <span>응답률: 100%</span>
      <span>응답 시간: 몇 시간 이내</span>
      <Button>호스트에게 연락하기</Button>
    </FlexDiv>
  );
}

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  span {
    font-size: 16px;
    font-weight: 300;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 12px;
  background-color: white;
  width: 200px;
  height: 48px;
  font-size: 16px;
`;
