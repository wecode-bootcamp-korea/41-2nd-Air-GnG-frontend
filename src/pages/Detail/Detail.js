import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookingBox from './Components/BookingBox';
import DetailBot from './Components/DetailBot';
import HostingTitle from './Components/HostingTitle';
import Title from './Components/Title';

export default function Detail() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  //`10.58.52.225:3000/room/${HostIdParams}`
  useEffect(() => {
    fetch(`http://10.58.52.82:3000/room/${id}`)
      .then(result => result.json())
      .then(data => setItem(data));
  }, []);

  console.log(item);

  // const data = () => {
  //   fetch('data/room.json')
  //     .then(result => result.json())
  //     .then(data => console.log('function', data));
  // };
  // data();

  return (
    <DetailWarpper>
      {item.length >= 1 && (
        <>
          <Title item={item} />
          <FlexDiv>
            <HostingTitle items={item} />
            <BookingBox item={item} />
          </FlexDiv>
          <DetailBot item={item} />
        </>
      )}
    </DetailWarpper>
  );
}

const DetailWarpper = styled.div`
  width: 1120px;
  margin: 0 auto;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
