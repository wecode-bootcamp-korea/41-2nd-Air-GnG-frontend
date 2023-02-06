import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
export default function PersonBtn({ item, count, addNum, value, isMax }) {
  const [number, setNumber] = useState(0);
  const [changeColor, setChangeColor] = useState(1);

  const PlusCount = e => {
    if (isMax > value[0].maximum_people) return;
    if (isMax < value[0].maximum_people) {
      setNumber(number + 1);
      addNum(item.name, number + 1);
    }
    if (value[0].maximum_people === isMax) {
      setChangeColor(0.1);
    }
  };
  const MiusCount = e => {
    if (count > 0) {
      setNumber(number - 1);

      addNum(item.name, number - 1);
    }
  };

  return (
    <DIV>
      <FlexDiv>
        <NumDiv>
          <span>{item.num}</span>
        </NumDiv>
        <LimtDiv>
          <span>{item.limit}</span>
        </LimtDiv>
      </FlexDiv>
      <CenterDiv>
        <IconDiv>
          <AiOutlineMinusCircle
            name={item.name}
            onClick={MiusCount}
            primary={changeColor}
          />
        </IconDiv>
        <span>{count}</span>
        <IconDiv>
          <AiOutlinePlusCircle
            primary={changeColor}
            name={item.name}
            onClick={PlusCount}
          />
        </IconDiv>
      </CenterDiv>
    </DIV>
  );
}

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CenterDiv = styled.div`
  display: flex;
  height: 100px;
  gap: 10px;
  font-size: 30px;
  font-weight: 100;
  align-items: center;
  justify-content: space-evenly;
`;
const LimtDiv = styled.div`
  font-size: 12px;
  font-weight: 350;
`;

const NumDiv = styled.div`
  display: flex;
`;

const IconDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
