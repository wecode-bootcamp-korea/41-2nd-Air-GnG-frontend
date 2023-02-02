import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const REST_API_KEY = '8cbc336215abe73fe2468fa08d61e1ac';
  const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          fetch('http://10.58.52.82:3001/auth/login', {
            method: 'POST',
            headers: {
              Authorization: data.access_token,
              'Content-Type': 'application/json;charset=utf-8',
            },
          })
            .then(res => res.json())
            .then(data =>
              localStorage.setItem('accessToken', data.accessToken)
            );
          navigate('/');
        }
      });
  };
  // const getKakaoToken = () => {
  //   fetch(`https://kauth.kakao.com/oauth/token`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.access_token) {
  //         console.log(data);
  //         // localStorage.setItem('token', data.access_token);
  //         fetch('http://10.58.52.225:3001/auth/login', {
  //           method: 'POST',
  //           headers: {
  //             Authorization: data.access_token,
  //             'Content-Type': 'application/json;charset=utf-8',
  //           },
  //         })
  //           .then(res => res.json())
  //           .then(data => console.log(data));
  //       }
  //       // postToken('token', data.access_token);
  //       // } else {
  //       //   navigate('/');
  //       // }
  //     });
  // };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);
  return <div>KakaoLogin</div>;
};
export default KakaoLogin;
