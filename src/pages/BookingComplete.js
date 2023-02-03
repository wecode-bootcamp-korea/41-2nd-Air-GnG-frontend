import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function BookingComplete() {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    fetch('data/bookingcomplete.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setDataList(data));
  }, []);

  const searchHouse = () => {
    navigate('/');
  };

  return (
    <SearchWrap>
      <BookingPart>
        <h1>여행</h1>
      </BookingPart>
      <PartLast>
        {dataList.length > 0 ? (
          <ShowComplete>
            {dataList.map((info, i) => (
              <CompleteImgBox>
                <CompleteImg src={info.room_images[0]} alt="info" />
                <CompleteInfo>
                  <h2>예약 : {i + 1}</h2>
                  <p>방 번호 : {info.room_id}</p>
                  <p>
                    총 금액 : ₩{parseInt(info.total_price).toLocaleString()}
                    (KRW)
                  </p>
                  <p>체크인 날짜 : {info.check_in_date.slice(0, 10)}</p>
                  <p>체크아웃 날짜 : {info.check_out_date.slice(0, 10)}</p>
                </CompleteInfo>
              </CompleteImgBox>
            ))}
          </ShowComplete>
        ) : (
          <div>
            <BookingPart>
              <p>아직 예약된 여행이 없습니다!</p>
              <div>
                여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
              </div>
              <SearchButton onClick={searchHouse}>숙소 검색하기</SearchButton>
            </BookingPart>
            <PartLast>
              <span>예약 내역을 찾으실 수 없나요?</span>
              <Footer>도움말 센터 방문하기</Footer>
            </PartLast>
          </div>
        )}
      </PartLast>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  padding: 0 10%;
`;

const SearchButton = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  font-size: 16px;
  cursor: pointer;
`;

const BookingPart = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid lightgray;

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  div {
    margin-bottom: 30px;
    color: gray;
  }
`;

const ShowComplete = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CompleteImgBox = styled.div`
  margin: 0px 5px 40px 5px;
  width: calc(33.3333% - 10px);

  h2 {
    margin: 20px 10px;
    font-weight: bold;
    font-size: 30px;
    color: tomato;
  }
  p {
    margin: 10px 10px;
    font-weight: bold;
    font-size: 17px;
  }
`;

const CompleteImg = styled.img`
  display: block;
  height: 250px;
  width: 100%;
  margin: 0px 0px 10px 0px;
  border-radius: 15px;
`;

const CompleteInfo = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
`;

const PartLast = styled.div`
  padding: 30px 0px;
  span {
    font-size: 14px;
    margin-right: 10px;
  }
`;

const Footer = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: gray;
`;
