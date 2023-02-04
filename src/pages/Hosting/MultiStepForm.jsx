import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import FirstStep from './StepStart';
import HouseType from './HouseType';
import Theme from './Theme';
import Location from './Location';
import Accommodation from './Accommodation';
import Description from './Description';

export default function MultiStepForm() {
  const navigate = useNavigate();
  const imageRef = useRef();
  const [position, setPosition] = useState();
  const [home, setHome] = useState(false);
  const [privateroom, setPrivateroom] = useState(false);
  const [shared, setShared] = useState(false);
  const [outreach, setOutreach] = useState(false);
  const [countryside, setCountryside] = useState(false);
  const [beach, setBeach] = useState(false);
  const [farm, setFarm] = useState(false);
  const [mountain, setMountain] = useState(false);
  const [north, setNorth] = useState(false);
  const [east, setEast] = useState(false);
  const [west, setWest] = useState(false);
  const [south, setSouth] = useState(false);
  const [step, setStep] = useState(1);
  const [guestcount, setGuestcount] = useState(0);
  const [bedcount, setBedcount] = useState(0);
  const [roomcount, setRoomcount] = useState(0);
  const [bathcount, setBathcount] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hostdescription, setHostdescription] = useState('');
  const [files, setFiles] = useState([]);

  const [roomtype, setRoomtype] = useState('');
  const [theme, setTheme] = useState('');
  const [location, setLocation] = useState('');

  const [showImages, setShowImages] = useState([]);

  const imageHandler = e => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];
    let selectedFiles = Array.from(e.target.files);
    let validFiles = selectedFiles.filter(file =>
      file.type.startsWith('image/')
    );

    if (validFiles.length === selectedFiles.length) {
      setFiles(validFiles);
    }

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = id => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const plusGuest = () => {
    guestcount <= 10
      ? setGuestcount(prev => prev + 1)
      : setGuestcount(guestcount);
  };
  const plusBed = () => {
    bedcount <= 10 ? setBedcount(prev => prev + 1) : setBedcount(bedcount);
  };
  const plusRoom = () => {
    roomcount <= 10 ? setRoomcount(prev => prev + 1) : setRoomcount(roomcount);
  };
  const plusBath = () => {
    bathcount <= 10 ? setBathcount(prev => prev + 1) : setBathcount(bathcount);
  };
  const minusGuest = () => {
    guestcount > 0
      ? setGuestcount(prev => prev - 1)
      : setGuestcount(guestcount);
  };
  const minusBed = () => {
    bedcount > 0 ? setBedcount(prev => prev - 1) : setBedcount(bedcount);
  };
  const minusRoom = () => {
    roomcount > 0 ? setRoomcount(prev => prev - 1) : setRoomcount(roomcount);
  };
  const minusBath = () => {
    bathcount > 0 ? setBathcount(prev => prev - 1) : setBathcount(bathcount);
  };
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const savePrice = e => {
    setPrice(e.target.value);
  };

  const saveTitle = e => {
    setTitle(e.target.value);
  };

  const saveDescription = e => {
    setDescription(e.target.value);
  };

  const saveHostDescription = e => {
    setHostdescription(e.target.value);
  };

  const completeHandler = e => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();

    files.map((file, i) => {
      formData.append('images', file);
    });

    formData.append('roomTypeId', JSON.stringify(parseInt(roomtype)));
    formData.append('themeId', JSON.stringify(parseInt(theme)));
    formData.append('regionId', JSON.stringify(parseInt(location)));
    formData.append('latitude', JSON.stringify(parseInt(position.lat)));
    formData.append('longitude', JSON.stringify(parseInt(position.lng)));
    formData.append('maximumPeople', JSON.stringify(parseInt(guestcount)));
    formData.append('bed', JSON.stringify(parseInt(bedcount)));
    formData.append('bedroom', JSON.stringify(parseInt(roomcount)));
    formData.append('bathroom', JSON.stringify(parseInt(bathcount)));
    formData.append('title', JSON.stringify(title));
    formData.append('description', JSON.stringify(description));
    formData.append('price', JSON.stringify(parseInt(price)));
    formData.append('content', JSON.stringify(hostdescription));

    fetch('http://10.58.52.82:3001/host/enrollment', {
      method: 'POST',
      headers: {
        authorization: localStorage.getItem('accessToken'),
      },

      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'HOST_CREATE_COMPLETED!') {
          alert('호스트가 되신 것을 환영합니다!');
          navigate('/hostingcomplete');
        }
      });
  };

  switch (step) {
    case 1:
      return <FirstStep nextStep={nextStep} />;
    case 2:
      return (
        <HouseType
          prevStep={prevStep}
          nextStep={nextStep}
          setHome={setHome}
          home={home}
          setPrivateroom={setPrivateroom}
          privateroom={privateroom}
          setShared={setShared}
          shared={shared}
          setRoomtype={setRoomtype}
        />
      );
    case 3:
      return (
        <Theme
          prevStep={prevStep}
          nextStep={nextStep}
          setOutreach={setOutreach}
          outreach={outreach}
          setCountryside={setCountryside}
          countryside={countryside}
          setTheme={setTheme}
          setBeach={setBeach}
          beach={beach}
          setFarm={setFarm}
          farm={farm}
          setMountain={setMountain}
          mountain={mountain}
          setNorth={setNorth}
          north={north}
          setLocation={setLocation}
          setEast={setEast}
          east={east}
          setWest={setWest}
          west={west}
          setSouth={setSouth}
          south={south}
        />
      );
    case 4:
      return (
        <Location
          position={position}
          setPosition={setPosition}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 5:
      return (
        <Accommodation
          minusGuest={minusGuest}
          plusGuest={plusGuest}
          minusBed={minusBed}
          plusBed={plusBed}
          minusRoom={minusRoom}
          plusRoom={plusRoom}
          minusBath={minusBath}
          plusBath={plusBath}
          bathcount={bathcount}
          guestcount={guestcount}
          bedcount={bedcount}
          roomcount={roomcount}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 6:
      return (
        <MainPage>
          <MainImage
            src="https://cdn.travie.com/news/photo/202209/50621_23461_3652.jpg"
            alt="mainimg"
          />
          <MainDescription>
            <ExitBtn onClick={() => navigate(-6)}>나가기</ExitBtn>
            <HousingType>숙소의 사진을 올려주세요!</HousingType>
            <form onSubmit={completeHandler}>
              <PhotodropWrapper>
                <PhotodropLabel htmlFor="dropzone">
                  <PlusIconAttach />
                </PhotodropLabel>
                {showImages.map((image, id) => (
                  <PhotoThumbnail
                    key={id}
                    src={image}
                    onClick={() => handleDeleteImage(id)}
                    alt={`${image}-${id}`}
                  />
                ))}
                <Photodrop
                  type="file"
                  accept="image/*"
                  id="dropzone"
                  onChange={imageHandler}
                  ref={imageRef}
                  multiple="multiple"
                />
              </PhotodropWrapper>
            </form>
          </MainDescription>
          <PrevBtn onClick={prevStep}>이전</PrevBtn>
          <NextBtn onClick={nextStep}>다음</NextBtn>
        </MainPage>
      );
    case 7:
      return (
        <Description
          title={title}
          saveTitle={saveTitle}
          description={saveDescription}
          saveDescription={saveDescription}
          hostdescription={hostdescription}
          saveHostDescription={saveHostDescription}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 8:
      return (
        <MainPage>
          <MainImage
            src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/65/0d29153d4ae09f5e0246323ed4bba4cf_res.jpeg"
            alt="mainimg"
          />
          <MainDescription>
            <ExitBtn onClick={() => navigate(-8)}>나가기</ExitBtn>
            <HousingType>숙소 가격을 정해주세요.</HousingType>
            <HousingPriceInput
              type="number"
              name="price"
              onChange={savePrice}
              value={price}
            />
            <HousingSubtitle>
              참고로, 이 지역에서 비슷한 숙소의 요금은 ₩123,000 ~
              ₩214,000원입니다.
            </HousingSubtitle>
          </MainDescription>
          <PrevBtn onClick={prevStep}>이전</PrevBtn>
          <CompleteBtn onClick={completeHandler}>완료</CompleteBtn>
        </MainPage>
      );
    default:
      return <h2>Invalid Step</h2>;
  }
}

const MainPage = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 48%;
  height: 100vh;
`;

const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8961e;
  width: 52%;
  height: 100vh;
  padding-left: 50px;
  padding-right: 45px;
`;

const ExitBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 25px;
  position: fixed;
  right: 40px;
  top: 35px;
  background-color: #222222;
  border: none;
  color: white;
  cursor: pointer;
`;

const HousingType = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 70px;
`;

const NextBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
`;

const PrevBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  left: 50.5%;
  cursor: pointer;
`;

const PhotodropWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 45vw;
  height: 600px;
`;

const Photodrop = styled.input`
  width: 0;
  height: 0;
  overflow: hidden;
  padding: 0;
  border: 0;
  position: absolute;
`;

const PhotodropLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 20vw;
  height: 150px;
  background-color: #fec89a;
  border-radius: 10px;
  cursor: pointer;
`;

const PlusIconAttach = styled(AiOutlinePlusCircle)`
  font-size: 50px;
`;

const PhotoThumbnail = styled.img`
  width: 20vw;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  z-index: 10;
  cursor: pointer;
`;

const PhotoFormBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
`;

const HousingTitle = styled.h1`
  font-size: 35px;
  margin-left: auto;
  margin-right: auto;
`;

const HousingSubtitle = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
`;

const HousingTitleInput = styled.input`
  width: 30vw;
  height: 5vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
`;

const HousingDescriptionInput = styled.input`
  width: 30vw;
  height: 10vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
`;

const HostDescriptionInput = styled.input`
  width: 30vw;
  height: 5vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
`;

const HousingPriceInput = styled.input`
  text-align: center;
  width: 20vw;
  height: 10vh;
  padding-left: 10px;
  opacity: 0.8;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: none;
  font-size: 30px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CompleteBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
`;
