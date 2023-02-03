import React from 'react';
import styled from 'styled-components';

function PayModal({ handleInput }) {
  return (
    <>
      <PayModalSorting onChange={handleInput}>
        <input type="radio" name="pay" value="kakaopay" />
        <PayImg src="https://velog.velcdn.com/images/rlacjfgh_chkim/post/fd3f9b45-8c73-415f-b781-cc712891eaf0/image.png" />
        <span>카카오페이</span>
      </PayModalSorting>
      <PayModalSorting>
        <input type="radio" name="pay" value="naverpay" />
        <PayImg src="https://velog.velcdn.com/images/rlacjfgh_chkim/post/763f9f82-7346-494a-b5cd-02b6a210e5f5/image.png" />
        <span>네이버페이</span>
      </PayModalSorting>
    </>
  );
}

const PayModalSorting = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0 15px 0;

  input:checked {
    background-color: white;
    border: 4px solid tomato;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }
`;

const PayImg = styled.img`
  width: 51px;
  height: 20px;
  margin: 0px 10px;
`;

export default PayModal;
