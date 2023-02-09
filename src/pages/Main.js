import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import FilterModal from './Main/FilterModal';
import ShowList from './Main/ShowList';
import MapModal from './Main/MapModal';

export default function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [countbedroom, setCountbedroom] = useState(0);
  const [countbed, setCountbed] = useState(0);
  const [countbath, setCountbath] = useState(0);
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [roomtype, setRoomtype] = useState();

  useEffect(() => {
    fetch(`http://10.58.52.82:3000/room${queryString}`)
      .then(response => response.json())
      .then(result => setData(result));
  }, [searchParams]);

  const categoryHandler = id => {
    searchParams.set('themeId', id);
    setSearchParams(searchParams);
  };

  const queryString = `?${searchParams.toString()}`;

  return (
    <>
      <Subnav>
        <Filterbox>
          {MAIN_FILTER_NAME.map(filter => {
            return (
              <Singlefilter
                key={filter.id}
                onClick={e => {
                  categoryHandler(filter.id);
                }}
              >
                <Filtericon src={filter.img} alt="icon" />
                <Filtertext>{filter.text}</Filtertext>
              </Singlefilter>
            );
          })}
        </Filterbox>
        <FilterModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          countbedroom={countbedroom}
          setCountbedroom={setCountbedroom}
          countbed={countbed}
          setCountbed={setCountbed}
          countbath={countbath}
          setCountbath={setCountbath}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          roomtype={roomtype}
          setRoomtype={setRoomtype}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Subnav>
      <ShowList data={data} />
      <MapModal data={data} />
    </>
  );
}

const Subnav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80px;
  width: 100%;
  padding-right: 100px;
  background-color: white;
  z-index: 100;
`;

const Filterbox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Singlefilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding-bottom: 15px;
  border-bottom: 2px solid white;
  opacity: 0.55;
  cursor: pointer;
  &:hover {
    opacity: 1;
    border-bottom: 2px solid black;
  }
`;

const SinglefilterActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding-bottom: 15px;
  border-bottom: 2px solid black;
  cursor: pointer;
`;

const Filtertext = styled.span`
  margin-top: 10px;
  font-size: 10px;
  font-weight: 200;
`;

const Filtericon = styled.img`
  width: 45px;
`;

const MAIN_FILTER_NAME = [
  {
    id: 1,
    img: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
    text: '속세를 벗어난 숙소',
    title: 'outreach',
  },
  {
    id: 2,
    img: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
    text: '한적한 시골',
    title: 'countryside',
  },
  {
    id: 3,
    img: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
    text: '해변 바로 앞',
    title: 'beach',
  },
  {
    id: 4,
    img: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
    text: '감귤농장',
    title: 'farm',
  },
  {
    id: 5,
    img: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
    text: '한라산 근처',
    title: 'mountain',
  },
];
