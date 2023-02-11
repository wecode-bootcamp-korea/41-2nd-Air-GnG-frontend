

- airbin를 모델로 제주도를 중심으로한 숙박 사이트
</br>

# 개발 기간

- 23.01~23.02 (2주)
</br>

# 개발 인원 및 파트
## FE
| 김기윤 (Project Manager) | main, hosting | 
| 박환성 | 카카오 소셜 로그인,  |
| 조윤환 | 상세페이지 |
| 김철호 | 예약/결제 페이지 |

</br>

# 기술 스택

### 프론트엔드

|JavaScript|React|Styled</br>Component|esLint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://styled-components.com/logo.png" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |


</br>

# 협업 툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

# 구현 기능  FrontEnd


## 카카오 로그인 ()
- 
-
-

## 스타일 페이지 ()
- 
-
-

## 메인페이지 ()
- 사용자에게 가장 먼저 노출될 수 있도록 웹 페이지 상단에 프로모션 이벤트용 캐러셀 기능 구현
- Intersection Observer를 활용한 상품 무한 스크롤 기능 구현

## 카테고리 ()
- 상품군에 따른 각 카테고리 UI가 동일한 형태로 컴포넌트를 재사용하여 드롭다운 형식으로 구현
- useLocation hook을 활용, queryString을 통한 상품 필터기능 구현

## 네비게이션바 ()
- 상수데이터를 활용한 전역에서 사용 가능한 네비게이션바 구현
- 로그인 상태 (카카오 토큰) 에 따라 로그인 / 로그아웃 표출

## Footer ()
- 상수데이터를 활용한 전역에서 사용 가능한 Footer 구현

## 상세페이지 ()
- 상단 호스팅룸 타이틀 밑 숙소의 최대인원,침실 , 침대 , 화장실의 수의 데이터를 받아와 구현
- 숙소의 데이터를 받아와서 숙소의 좌표를 카카오맵 API를 이용하여 지도에 구현
- 데이트픽커 라이브러리를 이용하여 예약날짜를 지정할 달력을 구현
- 만약 다른 이용자가 먼저 예약을 한다면 해당 날짜를 선택 할 수 없게 구현
- 이용자가 실수로 이미 예약된 날짜를 포함 선택하게 된다면 예약 불가 날짜의 바로 전날로 체크아웃 
  날짜가 자동으로 선택되게 구현
- 숙소를 이용할 게스트가 몇명인지 모달창으로 구현, 외부 클릭시 모달창이 닫히게 구현
- 예약날짜, 게스트 수 모두 고른후 예약하기 버튼을 누르면 예약에 관한 데이터가 예약/결제 페이지로 넘어가도록
  useNavigate훅을 이용하여 state값으로 전달
- 오른쪽 상단의 하트를 누르면 위시리스트에 저장이 되고 다시 클릭하면 위시리스트가 삭제가 되도록 state의 true/false값으로
  관리하도록 구현

## 사이즈 선택 페이지, 구매, 판매페이지 ()
- 하나의 컴포넌트로 구매, 판매 레이아웃 구현
- queryString을 활용해 선택한 사이즈를 구매, 판매 페이지로 전달
- 사용자가 실수로 입찰 버튼을 클릭해도 바로 결제가 되지 않도록 확인 모달창 팝업
  - 원활한 유지보수를 위해 구매,판매 입찰 그리고 즉시 구매,판매 4가지 상황에 따른 모달창을 하나의 컴포넌트로 관리
- 입찰 금액 정규표현식을 사용하여 30,000원 이상 작성 시 버튼 활성화

</br>

# Reference
- 실무수준의 프로젝트이지만 학습용으로 만들었기 떄문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
- 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
