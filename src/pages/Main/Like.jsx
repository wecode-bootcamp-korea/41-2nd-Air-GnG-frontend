import React, { useState } from 'react';
import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';

export default function Like(props) {
  const [like, setLike] = useState(false);
  const WishHandler = e => {
    setLike(!like);
    like === false
      ? fetch('http://10.58.52.82:3000/room/wishList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3NTY1ODU3OX0.Bwyxsxxs64MZv5juV5gq1qIfy0T9OWV_DNsgQad9Srw',
          },
          body: JSON.stringify({
            roomId: props.id,
          }),
        })
      : fetch('http://10.58.52.82:3000/room/wishList', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3NTY1ODU3OX0.Bwyxsxxs64MZv5juV5gq1qIfy0T9OWV_DNsgQad9Srw',
          },
          body: JSON.stringify({
            roomId: props.id,
          }),
        });
  };

  return (
    <WishWrapper onClick={WishHandler}>
      <WishIcon primary={like} />
    </WishWrapper>
  );
}

const WishWrapper = styled.button`
  position: relative;
  top: 35px;
  left: 240px;
  width: fit-content;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  z-index: 10;
`;

const WishIcon = styled(AiTwotoneHeart)`
  fill: ${props => (props.primary ? 'red' : '#f4f1de')};
  opacity: 0.6;
  font-size: 25px;
`;
