// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import { addDays } from 'date-fns';
// import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components/macro';
// import dayjs from 'dayjs';
// import NavDatePicker from './NavDatePicker';
// import SelectPeople from './NavGuest';
// import PersonBtn from './PersonBtn';
// export default function NavExpansion({ dateModal }) {
//   const [searchWhereModal, setSearchWhereModal] = useState(false);
//   const [searchWhenModal, setSearchWhenModal] = useState(false);
//   const [searchGuestModal, setSearchGuestModal] = useState(false);
//   const [regionData, setRegionData] = useState();

//   fetch('/data/NavFilter.json', {
//     method: 'GET',
//   })
//     .then(res => res.json())
//     .then(data => {
//       setRegionData(data);
//     });

//   return (
//     <NavExpansionWrap>
//       <SearchModalWrap>
//         <BoxWhere
//           onClick={() => {
//             setSearchWhereModal(!searchWhereModal);
//           }}
//         >
//           여행지
//         </BoxWhere>
//         {searchWhereModal && (
//           <WhereModal>
//             {regionData.map(info => {
//               return (
//                 <WhereBox>
//                   <WhereImg src={info.url} alt="흠" />
//                   <WhereTitle>{info.direction}</WhereTitle>
//                 </WhereBox>
//               );
//             })}
//           </WhereModal>
//         )}
//         {/* id: 1234(서북동남) */}
//         <BoxWhen
//           onClick={() => {
//             setSearchWhenModal(!searchWhenModal);
//           }}
//         >
//           체크인/체크아웃
//         </BoxWhen>
//         {searchWhenModal && <WhenModal></WhenModal>}
//         <BoxGuest
//           onClick={() => {
//             setSearchGuestModal(!searchGuestModal);
//           }}
//         >
//           {' '}
//           <SelectPeople></SelectPeople>
//         </BoxGuest>
//         {/* {searchGuestModal && <SelectPeople></SelectPeople>} */}
//         <SearchIcon src="../../../images/nav/search.png" />
//       </SearchModalWrap>
//     </NavExpansionWrap>
//   );
// }
// const NavExpansionWrap = styled.div``;
// const SearchModalWrap = styled.div`
//   height: 60px;
//   background-color: white;
//   width: 600px;
//   margin-bottom: 10px;
//   margin-left: -100px;
//   border: 1px solid #ebebeb;
//   box-shadow: 0px 1px 0px #fafafa;
//   line-height: 40px;
//   text-align: left;
//   border-radius: 50px;
// `;
// const BoxWhere = styled.div`
//   flex-direction: column;
//   line-height: 20px;
//   border-right: 1px solid #cccccc;
//   cursor: pointer;
//   padding-right: 40px;
//   margin-left: 20px;
// `;
// const InputWhere = styled.input`
//   border: none;
// `;
// const BoxWhen = styled.div`
//   border-right: 1px solid #cccccc;
//   line-height: 20px;
//   padding-right: 40px;
//   cursor: pointer;
// `;

// const BoxGuest = styled.div`
//   flex-direction: column;
//   line-height: 20px;
//   cursor: pointer;
// `;

// const SearchIcon = styled.img`
//   width: 35px;
//   height: 35px;
//   border-radius: 18px;
//   margin-left: -10px;
// `;

// const WhereModal = styled.div`
//   background-color: white;
//   width: 400px;
//   height: 300px;
//   border: 1px solid #ebebeb;
//   position: absolute;
//   margin-top: 370px;
//   margin-left: -200px;
//   border-radius: 15px;
//   flex-wrap: wrap;
// `;
// const WhenModal = styled.div`
//   background-color: white;
//   width: 600px;
//   height: 300px;
//   border: 1px solid #ebebeb;
//   position: absolute;
//   margin-top: 370px;
//   margin-left: 5px;
//   border-radius: 15px;
// `;
// const GuestModal = styled.div`
//   background-color: white;
//   width: 300px;
//   height: 300px;
//   border: 1px solid #ebebeb;
//   position: absolute;
//   margin-top: 370px;
//   margin-left: 300px;
//   border-radius: 15px;
// `;
// const WhereBox = styled.div`
//   width: 35%;
//   height: 120px;
//   display: flex;
//   flex-direction: column;
//   margin-right: 10px;
//   margin-left: 12px;
// `;
// const WhereImg = styled.img`
//   width: 90px;
//   height: 100px;
// `;
// const WhereTitle = styled.p``;
