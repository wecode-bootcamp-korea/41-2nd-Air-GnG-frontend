import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PayModal from './components/Paymodal';
import BookingTotal from './components/BookingTotal';
import InfoDetail from './components/InfoDetail';
import DropDown from './components/DropDown';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdOutlineSendToMobile } from 'react-icons/md';
import { BsCreditCard2Back } from 'react-icons/bs';
import { BiBookmarks } from 'react-icons/bi';

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, title, img, contents, guest, roomId } = location.state;
  const dayperfee = 1000;
  const cleanpay = 30000;
  const [modal, setModal] = useState(false);
  const [modalDate, setModalDate] = useState(false);
  const [adults, setAdults] = useState(location.state.guest);
  const [childs, setChilds] = useState(0);
  const [kinders, setKinders] = useState(0);
  const [pets, setPets] = useState(0);
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  const AdultsMinusHandler = e => {
    e.preventDefault();
    if (adults > 0) setAdults(adults - 1);
  };
  const AdultsPlusHandler = e => {
    e.preventDefault();
    setAdults(adults + 1);
  };

  const ChildsMinusHandler = e => {
    e.preventDefault();
    if (childs > 0) setChilds(childs - 1);
  };
  const ChildsPlusHandler = e => {
    e.preventDefault();
    setChilds(childs + 1);
  };

  const KindersMinusHandler = e => {
    e.preventDefault();
    if (kinders > 0) setKinders(kinders - 1);
  };
  const KindersPlusHandler = e => {
    e.preventDefault();
    setKinders(kinders + 1);
  };

  const PetsMinusHandler = e => {
    e.preventDefault();
    if (pets > 0) setPets(pets - 1);
  };
  const PetsPlusHandler = e => {
    e.preventDefault();
    setPets(pets + 1);
  };

  const checkIn = location.state.date[0];
  const checkOut = location.state.date[1];

  const [dateRange, setDateRange] = useState([
    new Date(location.state.date[0]),
    new Date(location.state.date[1]),
  ]);
  const [startDate, endDate] = dateRange;
  const onChange = dates => {
    const disabledStart = new Date(checkIn);
    const disabledEnd = new Date(checkOut);
    if (
      disabledStart.getTime() > dates[0].getTime() &&
      disabledEnd.getTime() < dates[1]?.getTime()
    ) {
      setDateRange([
        dates[0],
        new Date().setDate(new Date(checkIn).getDate() - 1),
      ]);
      return;
    }
    setDateRange(dates);
  };
  const result = [];
  const curDate = new Date(location.state.date[0]);
  while (curDate <= new Date(location.state.date[1])) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  const formatDate = [];

  for (let i = 0; i < dateRange.length; i++) {
    formatDate.push(dayjs(new Date(dateRange[i])).format('YYYY-MM-DD'));
  }

  const nights =
    (new Date(formatDate[1]).getTime() - new Date(formatDate[0]).getTime()) /
    (24 * 60 * 60 * 1000);
  const nightspay = dayperfee * nights;
  const servicefee = nightspay * 0.1;
  const totalprice = nightspay + cleanpay + servicefee;

  const goBookingResult = () => {
    fetch('http://10.58.52.225:3000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        guestId: 1,
        roomId: location.state.roomId,
        checkIn: formatDate[0],
        checkOut: formatDate[1],
        guestNumber: adults,
        totalPrice: totalprice,
      }),
    })
      .then(response => response.json())
      .then(data => {
        navigate('/bookingComplete');
      });
  };

  const [inputValues, setInputValues] = useState({});

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const kakaoPay = () => {
    fetch('https://kapi.kakao.com/v1/payment/ready', {
      method: 'POST',
      headers: {
        Authorization: 'KakaoAK d69c668925f6363043661580497bf0c5',
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(response => {
        const box = response.next_redirect_pc_url;
        window.open(box);
      });
  };

  const bodyData = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: location.state.title,
    quantity: 1,
    total_amount: totalprice,
    vat_amount: servicefee,
    tax_free_amount: 0,
    approval_url: 'http://localhost:3000',
    fail_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
  };

  let formBody = [];

  for (let property in bodyData) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(bodyData[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const clickHandler = e => {
    if (inputValues.pay === 'kakaopay') {
      return kakaoPay();
    } else {
      goBookingResult();
    }
  };

  const dateclose = useRef();
  const guestclose = useRef();
  useEffect(() => {
    const handle = e => {
      if (dateclose && !dateclose.current.contains(e.target)) {
        setModalDate(false);
      }
    };

    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle);
    };
  });

  useEffect(() => {
    const handle = e => {
      if (guestclose && !guestclose.current.contains(e.target)) {
        setDropdownVisibility(false);
      }
    };

    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle);
    };
  });

  return (
    <Container>
      <Header>
        <IoIosArrowBack />
        <h1>예약 및 결제</h1>
      </Header>
      <ContentBox>
        <LeftContent>
          <IconContent>
            <div>
              <h2>저렴한 요금</h2>
              <p>
                검색하시는 날짜의 요금은 지난 3개월의 평균 1박 요금보다
                ₩12,900원 저렴합니다.
              </p>
            </div>
            <BookMark>
              <BiBookmarks />
            </BookMark>
          </IconContent>
          <LeftContainer>
            <BookingHeader>예약 정보</BookingHeader>
            <InfoBox>
              <div>
                <p>날짜</p>
                <p>
                  {formatDate[0]} ~ {formatDate[1]}
                </p>
              </div>
              <DateSort ref={dateclose}>
                {modalDate == true ? (
                  <DatePicker
                    renderCustomHeader={({
                      monthDate,
                      customHeaderCount,
                      decreaseMonth,
                      increaseMonth,
                    }) => (
                      <div>
                        <button
                          aria-label="Previous Month"
                          className="react-datepicker__navigation react-datepicker__navigation--previous"
                          style={
                            customHeaderCount === 1
                              ? { visibility: 'hidden' }
                              : null
                          }
                          onClick={decreaseMonth}
                        >
                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                            {'<'}
                          </span>
                        </button>
                        <span className="react-datepicker__current-month">
                          {monthDate.toLocaleString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <button
                          aria-label="Next Month"
                          className="react-datepicker__navigation react-datepicker__navigation--next"
                          style={
                            customHeaderCount === 0
                              ? { visibility: 'hidden' }
                              : null
                          }
                          onClick={increaseMonth}
                        >
                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                            {'>'}
                          </span>
                        </button>
                      </div>
                    )}
                    monthsShown={2}
                    excludeDates={result.map(date =>
                      addDays(new Date(date), 0)
                    )}
                    selectsRange
                    selectsDisabledDaysInRange={result.map(date =>
                      addDays(new Date(date), 0)
                    )}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={update => {
                      setDateRange(update);
                    }}
                    isClearable={true}
                    customInput={<input type="text" />}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="체크인날짜 - 체크아웃날짜"
                    onChange={onChange}
                  />
                ) : null}
                <Modify
                  onClick={() => {
                    setModalDate(!modalDate);
                  }}
                >
                  수정
                </Modify>
              </DateSort>
            </InfoBox>
            <InfoBox>
              <div>
                <p>게스트</p>
                <p>게스트 {adults}명</p>
              </div>
              <GuestNumber ref={guestclose}>
                <DropDown visibility={dropdownVisibility}>
                  <Guests>
                    <ul>
                      <li>
                        <Client>
                          <div>성인</div>
                          <Client>
                            <div onClick={AdultsMinusHandler}>
                              <AiOutlineMinusCircle />
                            </div>
                            <div>{adults}</div>
                            <div onClick={AdultsPlusHandler}>
                              <AiOutlinePlusCircle />
                            </div>
                          </Client>
                        </Client>
                      </li>
                      <li>
                        <Client>
                          <div>어린이</div>
                          <Client>
                            <div onClick={ChildsMinusHandler}>
                              <AiOutlineMinusCircle />
                            </div>
                            <div>{childs}</div>
                            <div onClick={ChildsPlusHandler}>
                              <AiOutlinePlusCircle />
                            </div>
                          </Client>
                        </Client>
                      </li>
                      <li>
                        <Client>
                          <div>유아</div>
                          <Client>
                            <div onClick={KindersMinusHandler}>
                              <AiOutlineMinusCircle />
                            </div>
                            <div>{kinders}</div>
                            <div onClick={KindersPlusHandler}>
                              <AiOutlinePlusCircle />
                            </div>
                          </Client>
                        </Client>
                      </li>
                      <li>
                        <Client>
                          <div>반려동물</div>
                          <Client>
                            <div onClick={PetsMinusHandler}>
                              <AiOutlineMinusCircle />
                            </div>
                            <div>{pets}</div>
                            <div onClick={PetsPlusHandler}>
                              <AiOutlinePlusCircle />
                            </div>
                          </Client>
                        </Client>
                      </li>
                    </ul>
                  </Guests>
                </DropDown>
                <Modify
                  onClick={e => setDropdownVisibility(!dropdownVisibility)}
                >
                  {dropdownVisibility ? '수정' : '수정'}
                </Modify>
              </GuestNumber>
            </InfoBox>
          </LeftContainer>
          <LeftContainer>
            <BookingHeader>결제 방식 선택하기</BookingHeader>
            <ChoiceRadio>
              <div>
                <p>전액 결제</p>
                <InfoDescription>
                  호스트에게 여행 목적과 도착 예정 시간을 알려주세요.
                </InfoDescription>
              </div>
              <label for="first">
                ₩ {totalprice.toLocaleString()}
                <input id="frist" type="radio" name="price" value="all" />
              </label>
            </ChoiceRadio>
            <ChoiceRadio>
              <div>
                <p>요금 일부는 지금 결제, 나머지는 나중에 결제</p>
                <PaymentMethod>
                  지금 ₩({(totalprice / 2).toLocaleString()})을(를) 결제하시면,
                  나머지 금액(₩{(totalprice / 2).toLocaleString()})은 동일한
                  결제수단으로 2023년 2월 22일 자동 청구됩니다. 추가 수수료는
                  없습니다.
                </PaymentMethod>
              </div>
              <label for="second">
                ₩ {(totalprice / 2).toLocaleString()}
                <input id="second" type="radio" name="price" value="part" />
              </label>
            </ChoiceRadio>
          </LeftContainer>
          <LeftContainer>
            <CardBookingWrap>
              <BookingHeader>결제 수단</BookingHeader>
              <CardLogo>
                <CardImg src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg" />
                <CardImg src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg" />
                <CardImg src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg" />
                <CardImg src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg" />
              </CardLogo>
            </CardBookingWrap>
            <InfoMethod>
              <input type="radio" name="card" value="all" />
              <MdOutlineSendToMobile />
              <p>실시간 계좌이체</p>
            </InfoMethod>
            <InfoMethod>
              <input type="radio" name="card" value="all" />
              <BsCreditCard2Back />
              <p>신용카드</p>
            </InfoMethod>
            <PayContent
              onClick={() => {
                setModal(!modal);
              }}
            >
              <div>
                <p>Pay</p>
              </div>
              <IoIosArrowDown />
            </PayContent>
            {modal == true ? (
              <PayModal onChange={handleInput} handleInput={handleInput} />
            ) : null}
            <Coupon>쿠폰 입력하기</Coupon>
          </LeftContainer>
          <InfoDetail />
          <BookingBegin onClick={clickHandler}>예약 하기</BookingBegin>
        </LeftContent>
        <BookingTotal
          totalprice={totalprice}
          servicefee={servicefee}
          dayperfee={dayperfee}
          adults={adults}
          nights={nights}
          nightspay={nightspay}
          cleanpay={cleanpay}
          title={location.state.title}
          img={location.state.img[0]}
          contents={location.state.contents}
        />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 10%;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 32px;
  align-items: center;
  h1 {
    font-size: 32px;
    padding-top: 8px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LeftContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const IconContent = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 10px;

  h2 {
    margin: 8px;
    font-weight: bold;
  }

  p {
    margin: 8px;
  }
`;

const BookMark = styled.div`
  color: tomato;
  margin-right: 10px;
  font-size: 25px;
`;

const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #dddddd;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const BookingHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  p {
    margin-bottom: 10px;
  }
`;

const GuestNumber = styled.div`
  display: flex;
`;

const Modify = styled.div`
  text-decoration: underline;
  cursor: pointer;

  width: 40px;
`;

const Guests = styled.div`
  border: 1px solid tomato;
  border-radius: 5px;
  margin-right: 10px;
  padding: 8px 0px 4px 12px;
  z-index: 99;
`;

const InfoDescription = styled.div`
  font-size: 14px;
  color: grey;
`;

const CardBookingWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaymentMethod = styled.div`
  font-size: 14px;
  color: grey;
  width: 350px;
`;

const CardLogo = styled.div`
  display: flex;
  gap: 5px;
`;

const CardImg = styled.img`
  width: 35px;
  height: 20px;
`;

const InfoMethod = styled.label`
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
  font-size: 15px;

  input:checked {
    background-color: white;
    border: 4px solid tomato;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }
`;

const PayContent = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 8px;
  align-items: center;
  margin: 10px 0 10px 0;

  h2 {
    margin: 8px;
    font-weight: bold;
  }

  p {
    margin: 8px;
  }
`;

const Coupon = styled.div`
  text-decoration: underline;
  margin-top: 10px;
`;

const BookingBegin = styled.button`
  width: 120px;
  height: 60px;
  background-color: tomato;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
`;

const ChoiceRadio = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 20px;
  margin: 15px 0;

  p {
    margin-bottom: 10px;
  }

  &:hover {
    border: 2px solid black;
  }

  input:checked {
    background-color: white;
    border: 4px solid tomato;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }
`;

const DateSort = styled.div`
  display: flex;

  input {
    width: 173px;
    border: 1px solid tomato;
    text-align: center;
  }
  input:focus {
    border: 1px solid tomato;
  }
  ::-webkit-input-placeholder {
    text-align: center;
  }

  .react-datepicker-wrapper {
    width: 191px;
  }
  .react-datepicker__close-icon {
    padding: 0px;
    right: 5px;
  }
  .react-datepicker__close-icon::after {
    background-color: tomato;
    line-height: initial;
  }
`;

const Client = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 1px 10px;
`;
