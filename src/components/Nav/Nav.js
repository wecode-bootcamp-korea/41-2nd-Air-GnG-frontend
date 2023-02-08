import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import UserModal from './components/UserModal';
import NavExpansion from './components/NavExpansion';
import LoginModal from './components/LoginModal';
import SelectPeople from './components/NavGuest';
import NavDatePicker from './components/NavDatePicker';
import dayjs from 'dayjs';

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
  const [regionData, setRegionData] = useState();
  const [region, setRegion] = useState(0);
  const [dataForm, setDataForm] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

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

  const handleArea = city => {
    setRegion(city);
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
            <SearchWhere onClick={() => {}}>
              <BoxWhere
                onClick={() => {
                  setSearchWhereModal(!searchWhereModal);
                }}
              >
                여행지
              </BoxWhere>
              {searchWhereModal && (
                <WhereModal>
                  {regionData.map(info => {
                    const { region } = info;
                    return (
                      <WhereBox key={region}>
                        <WhereImg
                          src={info.url}
                          onClick={() => {
                            handleArea(region);
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
              체크인 / 체크아웃
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
            <SearchIcon
              src="../../../images/nav/search.png"
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
  height: 100%;
  border: 1px solid #ebebeb;
  box-shadow: 0px 1px 0px #fafafa;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 80px;
`;

const NavSearchBox = styled.div`
  width: 600px;
  height: 60px;
  margin-left: 140px;
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
`;
const SearchWhen = styled.div`
  border-right: 1px solid #cccccc;
  padding-right: 30px;
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
  top: 75px;
  left: 830px;
  display: flex;
  justify-content: center;
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
  flex-direction: column;
  line-height: 20px;
  border-right: 1px solid #cccccc;
  cursor: pointer;
  padding-right: 40px;
  margin-left: 20px;
`;
const InputWhere = styled.input`
  border: none;
`;
const BoxWhen = styled.div`
  border-right: 1px solid #cccccc;
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
  height: 300px;
  border: 1px solid #ebebeb;
  position: absolute;
  margin-top: 370px;
  margin-left: -200px;
  border-radius: 15px;
  flex-wrap: wrap;
`;

const WhereBox = styled.div`
  width: 35%;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 12px;
`;
const WhereImg = styled.img`
  width: 90px;
  height: 100px;
`;
const WhereTitle = styled.p``;
