import React, { useState, useEffect, useRef, useCallback } from 'react';
import PersonBtn from './PersonBtn';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const SelectPeople = ({ countGuest, item }) => {
  const [count, setCount] = useState({
    adult: 0,
    kid: 0,
    baby: 0,
    pet: 0,
  });
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const guest = () => {
    countGuest(total);
  };
  const onClick = e => {
    setDropdownVisibility(!dropdownVisibility);
    console.log(dropdownVisibility);
    // setDropdownVisibility(prev => !prev);
  };
  const addNum = (key, value) => {
    setCount({ ...count, [key]: value });
    countGuest(count.adult);
  };
  const { adult, kid, baby, pet } = count;
  const total = adult + kid + baby;

  const el = useRef();

  useEffect(() => {
    const clickOutside = e => {
      if (dropdownVisibility && el.current && !el.current.contains(e.target)) {
        setDropdownVisibility(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [dropdownVisibility]);
  return (
    <Div>
      <BookingDiv onClick={onClick} ref={el}>
        <input
          disabled
          onChange={guest}
          placeholder={`게스트 ${count.adult}명`}
        />
        {dropdownVisibility ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BookingDiv>
      {dropdownVisibility && (
        <div>
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
        </div>
      )}
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
  input {
    border-style: none;
    background-color: white;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
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
