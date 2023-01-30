import React, { useState } from 'react';
import { MdTune } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { BiWon } from 'react-icons/bi';
import styled from 'styled-components';

export default function FilterModal({
  isOpen,
  setIsOpen,
  countbedroom,
  setCountbedroom,
  countbed,
  setCountbed,
  countbath,
  setCountbath,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  roomtype,
  setRoomtype,
  searchParams,
  setSearchParams,
}) {
  const countBedroomClick = num => {
    setCountbedroom(num);
  };

  const countBedClick = num => {
    setCountbed(num);
  };

  const countBathClick = num => {
    setCountbath(num);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const applyHandler = () => {
    searchParams.append('priceMin', minValue);
    searchParams.append('priceMax', maxValue);
    searchParams.append('roomTypeId', roomtype);
    searchParams.append('bedroom', countbedroom);
    searchParams.append('bed', countbed);
    searchParams.append('bathroom', countbath);
    setSearchParams(searchParams);
    setIsOpen(false);
  };

  const filterMinValue = e => {
    setMinValue(e.target.value);
  };

  const filterMaxValue = e => {
    setMaxValue(e.target.value);
  };

  return (
    <div>
      <Filterbtn onClick={handleOpen}>
        <MdTune />
        필터
      </Filterbtn>
      {isOpen && (
        <ModalBackground>
          <Modal>
            <Header>
              <Cancel onClick={handleClose} />
              <HeaderText>필터</HeaderText>
            </Header>
            <PriceRange>
              <CategoryText>가격 범위</CategoryText>
              <PriceRangeSubText>
                평균 1박 요금은 ₩298,667입니다
              </PriceRangeSubText>
              <Pricing>
                <PriceLabel>최저 요금</PriceLabel>
                <WonIconLeft />
                <PriceInput onChange={filterMinValue} />
                <PriceLabel>최고 요금</PriceLabel>
                <WonIconRight />
                <PriceInput onChange={filterMaxValue} />
              </Pricing>
            </PriceRange>
            <CategoryText>숙소 유형</CategoryText>
            <RoomtypeWrapper>
              <Roomtype>
                <Checkbox
                  type="checkbox"
                  value="1"
                  onChange={e => setRoomtype(e.target.value)}
                />
                <RoomDescriptionWrapper>
                  <RoomDescriptionMain>집 전체</RoomDescriptionMain>
                  <RoomDescriptionSub>
                    단독으로 사용하는 공간 전체
                  </RoomDescriptionSub>
                </RoomDescriptionWrapper>
              </Roomtype>
              <Roomtype>
                <Checkbox
                  type="checkbox"
                  value="2"
                  onChange={e => setRoomtype(e.target.value)}
                />
                <RoomDescriptionWrapper>
                  <RoomDescriptionMain>개인실</RoomDescriptionMain>
                  <RoomDescriptionSub>
                    집 또는 호텔의 개인실과 일부 공용 공간
                  </RoomDescriptionSub>
                </RoomDescriptionWrapper>
              </Roomtype>
              <Roomtype>
                <Checkbox
                  type="checkbox"
                  value="3"
                  onChange={e => setRoomtype(e.target.value)}
                />
                <RoomDescriptionWrapper>
                  <RoomDescriptionMain>다인실</RoomDescriptionMain>
                  <RoomDescriptionSub>
                    다른 사람들과 함께 사용하는 다인실 및 공용 공간
                  </RoomDescriptionSub>
                </RoomDescriptionWrapper>
              </Roomtype>
            </RoomtypeWrapper>
            <CategoryText>침실과 침대</CategoryText>
            <RoomandBedWrapper>
              <RoomandBedDescription>침실</RoomandBedDescription>
              <ButtonCluster>
                {NumberMapping.map(num => {
                  return (
                    <NumberButton
                      primary={countbedroom === num}
                      key={num}
                      onClick={() => {
                        countBedroomClick(num);
                      }}
                      name="bedroom"
                    >
                      {num}
                    </NumberButton>
                  );
                })}
              </ButtonCluster>
              <RoomandBedDescription>침대</RoomandBedDescription>
              <ButtonCluster>
                {NumberMapping.map(num => {
                  return (
                    <NumberButton
                      primary={countbed === num}
                      key={num}
                      onClick={() => {
                        countBedClick(num);
                      }}
                      name="bed"
                    >
                      {num}
                    </NumberButton>
                  );
                })}
              </ButtonCluster>
              <RoomandBedDescription>욕실</RoomandBedDescription>
              <ButtonCluster>
                {NumberMapping.map(num => {
                  return (
                    <NumberButton
                      primary={countbath === num}
                      key={num}
                      onClick={() => {
                        countBathClick(num);
                      }}
                      name="bath"
                    >
                      {num}
                    </NumberButton>
                  );
                })}
              </ButtonCluster>
            </RoomandBedWrapper>
            <ModalFooter>
              <ApplyButton onClick={applyHandler}>필터 적용</ApplyButton>
            </ModalFooter>
          </Modal>
        </ModalBackground>
      )}
    </div>
  );
}

const Filterbtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 15px 15px 15px;
  width: 70px;
  border: 1px solid #e5e5e5;
  background: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  width: 820px;
  height: 85vh;
  margin: 0 auto;
  margin-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  border-radius: 15px;
  background-color: white;
  overflow: auto;
  z-index: 30;
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 740px;
  height: 60px;
  border-bottom: 1px solid #edede9;
  background-color: white;
  z-index: 40;
`;

const Cancel = styled(RiCloseFill)`
  margin-left: 20px;
  height: 50px;
  font-size: 30px;
  cursor: pointer;
`;

const HeaderText = styled.span`
  margin: 0 auto;
  font-size: 23px;
`;

const PriceRange = styled.div`
  margin-top: 70px;
  width: 740px;
  height: 250px;
  border-bottom: 1px solid #edede9;
`;

const CategoryText = styled.p`
  margin-top: 15px;
  margin-left: 15px;
  font-size: 25px;
`;

const PriceRangeSubText = styled.p`
  margin-top: 10px;
  margin-left: 15px;
  color: gray;
  font-size: 15px;
`;

const Pricing = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

const PriceLabel = styled.label`
  position: relative;
  left: 90px;
  top: 30px;
  font-size: 13px;
  color: gray;
`;

const WonIconLeft = styled(BiWon)`
  position: relative;
  top: 50px;
  left: 35px;
  font-size: 20px;
`;

const WonIconRight = styled(BiWon)`
  position: relative;
  top: 50px;
  left: 35px;
  font-size: 20px;
`;

const PriceInput = styled.input`
  width: 280px;
  height: 60px;  
  margin-top: 20px;  
  margin-bottom: 25px;
  padding-left: 35px;
  padding-top: 25px;
  border: 1px solid #778da9;
  font-size: 20px;
  }
`;

const RoomtypeWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #edede9;
`;

const Roomtype = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 80px;
`;

const Checkbox = styled.input`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  accent-color: black;
`;

const RoomDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomDescriptionMain = styled.p`
  font-size: 20px;
`;

const RoomDescriptionSub = styled.p`
  margin-top: 10px;
  color: gray;
  font-size: 15px;
`;

const RoomandBedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const RoomandBedDescription = styled.p`
  margin-left: 15px;
  margin-top: 10px;
  font-size: 17px;
`;

const ButtonCluster = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
`;

const NumberMapping = ['상관없음', 1, 2, 3, 4, 5, 6, 7, '8+'];

const NumberButton = styled.button`
  width: 60px;
  height: 40px;
  margin-right: 10px;
  border-radius: 30px;
  font-size: 12px;
  outline: none;
  border: 0.5px solid rgba(176, 176, 176, 0.5);
  background-color: ${({ primary }) => (primary ? 'black' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  &:hover {
    cursor: pointer;
    opacity: 1;
    border: 1.5px solid rgba(176, 176, 176, 1);
  }
`;

const ModalFooter = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 740px;
  height: 60px;
  background-color: white;
  z-index: 40;
`;

const ApplyButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
  border-radius: 15px;
  cursor: pointer;
`;
