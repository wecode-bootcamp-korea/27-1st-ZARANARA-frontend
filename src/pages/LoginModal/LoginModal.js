import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userinput from './Userinput';
import Button from '../../components/Button/Button';
import { API } from '../../config';

import { IoCloseSharp } from 'react-icons/io5';

import './LoginModal.scss';

function LoginModal({ handleSignupModal, handleLoginModal, setIsUserLogin }) {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };
  const goMain = () => {
    const { email, password } = userInput;

    fetch(`${API.USER}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if ('SUCCESS' === data.MESSAGE) {
          localStorage.setItem('token', data.ACCESS_TOKEN);
          alert('환영합니다!');
          navigate('/');
          handleLoginModal(false);
          setIsUserLogin(true);
        } else if ('PASSWORD_INVAILD_USER' === data.MESSAGE) {
          alert('올바르지 않은 패스워드 형식 입니다.');
        } else if ('KEY_ERROR' === data.MESSAGE) {
          alert('올바르지 않은 형식 입니다.');
        } else if ('EMAIL_INVALD_USER' === data.MESSAGE) {
          alert('존재하지 않는 유저 입니다.');
        }
      });
  };

  return (
    <div className="loginModal">
      <div className="login">
        <div className="loginContainer">
          <h2>로그인</h2>
          <div className="loginInfo">
            <span className="loginKoInfo">
              신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
            </span>
            <div className="loginEnInfoGuide">
              <span className="loginEnInfoComment">
                We will ask you for the information we need to speed up the
                purchase process.
              </span>
            </div>
          </div>
          <form className="userIdPw">
            <Userinput handleInput={handleInput} />
            <div className="showPassword">
              <span className="findPassword">비밀번호를 잊으셨습니까?</span>
            </div>
            <Button title="로그인" format="midium" handleClick={goMain} />
          </form>
        </div>
      </div>
      <div className="join">
        <h2>회원가입</h2>
        <Button
          title="계정 만들기"
          handleClick={handleSignupModal}
          format="small"
        />
      </div>
      <button className="closeButton" onClick={() => handleLoginModal()}>
        <IoCloseSharp />
      </button>
    </div>
  );
}

export default LoginModal;
