import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HostingComplete() {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.82:3000/host', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(data => setDataList(data));
  }, []);

  const searchHouse = () => {
    navigate('/hosting');
  };

  return (
    <SearchWrap>
      <BookingPart>
        <h1>호스트</h1>
      </BookingPart>
      <PartLast>
        {dataList.length > 0 ? (
          <ShowComplete>
            {dataList.map((info, i) => (
              <CompleteImgBox key={i}>
                <CompleteImg src={info.room_images[0]} alt="info" />
                <CompleteInfo>
                  <h2>호스팅 : {i + 1}</h2>
                  <p>숙소명 : {info.title}</p>
                  <p>체크인 날짜 : {info.check_in_date.slice(0, 10)}</p>
                  <p>체크아웃 날짜 : {info.check_out_date.slice(0, 10)}</p>
                </CompleteInfo>
              </CompleteImgBox>
            ))}
          </ShowComplete>
        ) : (
          <div>
            <BookingPart>
              <p>아직 호스트 하고있는 숙소가 없습니다!</p>
              <div>내가 좋아하는 것에서 가치를 찾아보세요!</div>
              <SearchButton onClick={searchHouse}>
                체험 호스팅 하기
              </SearchButton>
            </BookingPart>
            <PartLast>
              <span>호스팅 내역을 찾으실 수 없나요?</span>
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
