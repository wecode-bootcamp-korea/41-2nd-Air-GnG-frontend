import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import PersonBtn from './PersonBtn';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const SelectPeople = ({ item }) => {
  const [count, setCount] = useState({
    adult: 0,
    kid: 0,
    baby: 0,
    pet: 0,
  });
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const onClick = e => {
    setDropdownVisibility(!dropdownVisibility);
  };
  const addNum = (key, value) => {
    return setCount({ ...count, [key]: value });
  };
  const { adult, kid, baby, pet } = count;
  const total = adult + kid + baby;

  return (
    <Div>
      <BookingDiv onClick={onClick}>
        <span>게스트 {count.adult}명</span>
        {dropdownVisibility ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BookingDiv>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>
            <ZDiv>
              {personSort.map(person => {
                return (
                  <PersonBtn
                    key={person.id}
                    item={person}
                    value={item}
                    addNum={addNum}
                    count={count[person.name]}
                    isMax={total}
                  />
                );
              })}
            </ZDiv>
          </li>
        </ul>
      </Dropdown>
    </Div>
  );
};

export default SelectPeople;

const BookingDiv = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  border: 1px solid #dddd;
  border-radius: 12px;
  font-weight: 100;
`;
const Div = styled.div``;
const ZDiv = styled.div`
  position: absolute;
  z-index: 999;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #dddd;
  width: 254px;
`;
const personSort = [
  { id: 1, num: '성인', name: 'adult', limit: '만 13세이상' },
  { id: 2, num: '어린이', name: 'kid', limit: '만 2세 ~12세' },
  { id: 3, num: '유아', name: 'baby', limit: '만 2세 미만' },
  { id: 4, num: '애완동물', name: 'pet', limit: '보조동물을 동반하시나요?' },
];
