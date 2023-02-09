import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import UserModal from './components/UserModal';
import NavExpansion from './components/NavExpansion';
import LoginModal from './components/LoginModal';
import SelectPeople from './components/NavGuest';
import NavDatePicker from './components/NavDatePicker';
import dayjs from 'dayjs';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Nav() {
  const navigate = useNavigate();
  const [userModalIsOpen, setUserModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [navExpansionIsOpen, setNavExpansionIsOpen] = useState(false);
  // const [dateModal, setDateModal] = useState(false);
  // const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [searchWhereModal, setSearchWhereModal] = useState(false);
  const [searchWhenModal, setSearchWhenModal] = useState(false);
  const [searchGuestModal, setSearchGuestModal] = useState(false);
  const [regionData, setRegionData] = useState([]);
  const [region, setRegion] = useState(0);
  const [direction, setDirection] = useState();
  const [dataForm, setDataForm] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const aa = useRef();
  useEffect(() => {
    const outClick = e => {
      if (searchWhenModal && aa.current && !aa.current.contains(e.target)) {
        setSearchWhereModal(false);
        console.log('out');
      }
    };
    document.addEventListener('mousedown', outClick);

    return () => {
      document.removeEventListener('mousedown', outClick);
    };
  }, [searchWhenModal]);
  console.log(dropdownVisibility);
  const Click = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  const caldate = newdate => {
    const arr = newdate.map(date => dayjs(date).format('YYYY-MM-DD'));
    setDataForm({
      checkIn: arr[0],
      checkOut: arr[1],
    });
    console.log(arr);
  };

  const [countG, setCountG] = useState(0);

  const handleCount = counts => {
    setCountG(counts);
  };

  const queryString = {
    region: region,
    guest: countG,
    checkIn: dataForm.checkIn,
    checkOut: dataForm.checkOut,
  };
  console.log(queryString);
  const query = queryString => {
    const result = Object.keys(queryString)
      .map(key => (queryString[key] ? key + `=` + queryString[key] + '&' : ''))
      .join('');
    return result;
  };

  const handleArea = (city, where) => {
    setRegion(city);
    setDirection(where);
  };

  useEffect(() => {
    fetch('/data/NavFilter.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRegionData(data);
      });
  }, []);

  return (
    <div>
      <NavBox>
        <div>
          <Link to="/">
            <Logo src="../../../images/nav/logo.png" />
          </Link>
          <NavSearchBox>
            <SearchWhere
              onClick={() => {
                setSearchWhereModal(!searchWhereModal);
              }}
            >
              <BoxWhere>
                <p style={{ fontWeight: 'bold' }}>여행지</p>
              </BoxWhere>{' '}
              <Pstyle>{direction}</Pstyle>
              {searchWhereModal && (
                <WhereModal>
                  {regionData.map(info => {
                    const { region, direction } = info;
                    return (
                      <WhereBox key={region}>
                        <WhereImg
                          src={info.url}
                          onClick={() => {
                            handleArea(region, direction);
                          }}
                        />
                        <WhereTitle>{info.direction}</WhereTitle>
                      </WhereBox>
                    );
                  })}
                </WhereModal>
              )}
            </SearchWhere>
            <SearchWhen
              onClick={() => {
                setSearchWhenModal(prev => !prev);
              }}
            >
              <p style={{ fontWeight: 'bold' }}>체크인 / 체크아웃</p>
            </SearchWhen>
            <SearchWho>
              <BoxGuest
                onClick={() => {
                  setSearchGuestModal(!searchGuestModal);
                }}
              >
                <SelectPeople handleCount={handleCount}></SelectPeople>
              </BoxGuest>
            </SearchWho>

            <RxMagnifyingGlass
              style={{
                'font-size': '30px',
                backgroundColor: '#fea900',
                'border-radius': '100%',
                color: 'white',
              }}
              onClick={e => {
                fetch(`http://10.58.52.227:3000/?${query(queryString)}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                  },
                })
                  .then(response => response.json())
                  .then(result => {
                    e.stopPropagation();
                    navigate(`/?${query(queryString)}`);
                  });
                // e.stopPropagation();
                // navigate(`/${query(queryString)}`);
              }}
            />
          </NavSearchBox>
          <NavUserBox>
            <LinkHosting>
              <Link to="/hosting" style={{ textDecoration: 'none' }}>
                당신의 공간을 에어감귤하세요
              </Link>
            </LinkHosting>
            <Globe src="../../../images/nav/globe.png" />
            <UserInfoWrap onClick={() => setUserModalIsOpen(prev => !prev)}>
              <Listicon src="../../../images/nav/listicon.png" />
              <Manicon src="../../../images/nav/manicon.png" />
              {userModalIsOpen && (
                <UserModal
                  onClick={e => e.stopPropagation()}
                  setUserModalIsOpen={setUserModalIsOpen}
                  setLoginModalIsOpen={setLoginModalIsOpen}
                />
              )}
              {loginModalIsOpen && <LoginModal />}
            </UserInfoWrap>
          </NavUserBox>
        </div>
        {/* {navExpansionIsOpen && <NavExpansion />} */}
      </NavBox>
      {searchWhenModal && (
        <DateModal>
          <NavDatePicker caldate={caldate} />
        </DateModal>
      )}
    </div>
  );
}

const NavBox = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 99999;
  top: 0;
  background-color: white;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  height: 60px;
  margin-top: 5px;
`;

const NavSearchBox = styled.div`
  width: 700px;
  height: 60px;
  margin-top: 8px;
  margin-left: 135px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  border-radius: 30px;

  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 1.5px grey;
  }
`;
const SearchWhere = styled.div`
  margin-left: 20px;
  padding-right: 30px;
  margin-top: -10px;
`;
const SearchWhen = styled.div`
  padding-right: 30px;
  z-index: 999;
  margin-top: -10px;
`;
const SearchWho = styled.div`
  margin-right: 20px;
`;
const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 18px;
`;
const NavUserBox = styled.div`
  padding: 0px 30px;
  cursor: pointer;
`;
const LinkHosting = styled.p``;
const Globe = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 20px;
`;

const UserInfoWrap = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #ebebeb;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 1px 0px #fafafa;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 1px grey;
  }
`;
const Listicon = styled.img`
  width: 20px;
  height: 30px;
  margin-right: 10px;
`;
const Manicon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 2px;
`;
const DateModal = styled.div`
  position: absolute;
  top: 19px;
  left: 840px;
  display: flex;
  justify-content: center;
  z-index: 99999;
  .react-datepicker {
    width: 483px;
    height: 250px;
    display: flex;
  }
`;
const SearchModalWrap = styled.div`
  height: 60px;
  background-color: white;
  width: 600px;
  margin-bottom: 10px;
  margin-left: -100px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  line-height: 40px;
  text-align: left;
  border-radius: 50px;
`;
const BoxWhere = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;

  cursor: pointer;
  padding-right: 40px;
  margin-left: 20px;

  p {
  }
`;
const InputWhere = styled.input`
  border: none;
`;
const BoxWhen = styled.div`
  line-height: 20px;
  padding-right: 40px;
  cursor: pointer;
`;

const BoxGuest = styled.div`
  flex-direction: column;
  line-height: 20px;
  cursor: pointer;
`;

const WhereModal = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  border: 1px solid #ebebeb;
  position: absolute;
  margin-top: 480px;
  margin-left: 238px;
  border-radius: 15px;
  flex-wrap: wrap;
  z-index: 999;
`;

const WhereBox = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 12px;
`;
const WhereImg = styled.img`
  border-radius: 12px;
  width: 150px;
  height: 150px;
  border: 1px solid #ebebeb;
  &:hover {
    border: 1px solid black;
  }
`;
const WhereTitle = styled.p`
  margin-top: 10px;
`;
const Pstyle = styled.p`
  font-size: 12px;
  margin-top: -3px;
  position: absolute;
  bottom: 25px;
  left: 32.7%;
`;
