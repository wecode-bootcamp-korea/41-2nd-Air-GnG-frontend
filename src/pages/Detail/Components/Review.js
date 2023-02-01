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
  console.log('ds', coment);
  return (
    <CommentContainer>
      {coment.map(item => {
        return (
          <CommentDiv key={item.id}>
            <FlexDiv>
              <div>
                <BsPersonCircle />
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
`;

const FlexDiv = styled.div`
  display: flex;
`;

const CommentDiv = styled.div`
  height: 100px;
  width: 45%;
`;
