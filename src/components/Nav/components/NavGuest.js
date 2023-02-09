import React, { useState, useEffect, useRef, useCallback } from 'react';
import PersonBtn from './PersonBtn';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const SelectPeople = ({
  countGuest,
  item,
  guests,
  countPlus,
  countMinus,
  handleCount,
}) => {
  const [count, setCount] = useState({
    adult: 0,
    kid: 0,
    baby: 0,
    pet: 0,
  });
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const guest = up => {
    countGuest(up);
  };
  const onClick = e => {
    setDropdownVisibility(!dropdownVisibility);
    console.log(dropdownVisibility);
    handleCount(total);
    // setDropdownVisibility(prev => !prev);
  };
  const el = useRef();
  useEffect(() => {
    const outClick = e => {
      if (dropdownVisibility && el.current && !el.current.contains(e.target)) {
        setDropdownVisibility(false);
      }
    };
    document.addEventListener('mousedown', outClick);

    return () => {
      document.removeEventListener('mousedown', outClick);
    };
  }, [dropdownVisibility]);
  const addNum = (key, value) => {
    setCount({ ...count, [key]: value });
    handleCount(count.adult + 1);
    // countGuest(count.adult);
  };
  const { adult, kid, baby, pet } = count;
  const total = adult + kid + baby;

  return (
    <div ref={el}>
      <BookingDiv onClick={onClick}>
        <input
          disabled
          onChange={addNum}
          placeholder={`게스트 ${count.adult}명`}
        />
        {dropdownVisibility ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BookingDiv>
      {dropdownVisibility && (
        <ZWrapDiv>
          <ZDiv>
            {personSort.map(person => {
              return (
                <PersonBtn
                  onClick={guest}
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
        </ZWrapDiv>
      )}
    </div>
  );
};

export default SelectPeople;

const BookingDiv = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 5px;
  border-radius: 12px;
  font-weight: 100;
  margin-top: -10px;
  input {
    border-style: none;
    background-color: white;
    text-align: center;
    font-size: 16px;
  }
`;

const ZWrapDiv = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ZDiv = styled.li`
  position: absolute;
  top: 30px;
  left: -200px;
  z-index: 999;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #dddd;
  width: 300px;
`;
const personSort = [
  { id: 1, num: '성인', name: 'adult', limit: '만 13세이상' },
  { id: 2, num: '어린이', name: 'kid', limit: '만 2세 ~12세' },
  { id: 3, num: '유아', name: 'baby', limit: '만 2세 미만' },
  // { id: 4, num: '애완동물', name: 'pet', limit: '보조동물을 동반하시나요?' },
];
