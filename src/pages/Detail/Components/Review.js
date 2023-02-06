import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';

export default function Review() {
  const [coment, setComnet] = useState([]);
  useEffect(() => {
    fetch('/data/yunhwan/review.json')
      .then(result => result.json())
      .then(data => setComnet(data));
  }, []);

  return (
    <CommentContainer>
      {coment.map(item => {
        return (
          <CommentDiv key={item.id}>
            <FlexDiv>
              <div>
                <BsPersonCircle style={{ color: 'tomato' }} />
              </div>
              <span>{item.name}</span>
            </FlexDiv>
            <span>{item.comment}</span>
          </CommentDiv>
        );
      })}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: large;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  div {
    font-size: 24px;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

const CommentDiv = styled.div`
  height: 100px;
  width: 45%;
  font-size: 16px;
  span {
    line-height: 1.2;
  }
`;
