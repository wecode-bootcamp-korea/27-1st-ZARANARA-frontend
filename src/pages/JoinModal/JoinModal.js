import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Userinput from '../LoginModal/Userinput';

import { IoCloseSharp } from 'react-icons/io5';

import { API } from '../../config';
import './JoinModal.scss';

function JoinModal({ handleJoinClick, setIsSignup, handleCloseJoin }) {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const goMain = () => {
    const { name, email, password } = userInput;

    fetch(`${API.USER}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if ('SUCCESS' === data.MESSAGE) {
          alert('회원가입 성공했습니다.');
          navigate('/');
          setIsSignup(false);
        } else if ('EMAIL_ALREADY_EXIST' === data.MESSAGE) {
          alert('동일한 이메일이 이미 존재합니다.');
        } else if ('KEY_ERROR' === data.MESSAGE) {
          alert('모든 입력값이 형식에 올바르지 않습니다.');
        } else {
          alert('이메일과 패스워드가 올바르지 않는 형식입니다.');
        }
      });
  };

  return (
    <div className="zarnaraCreateContainer">
      <div className="zaranaraCreateAccount">
        <div className="createAccountContainer">
          <span>자라홈 계정 만들기</span>
        </div>
        <div className="choiceKindOfAccount" />
        <Userinput signup handleInput={handleInput} />
        <form className="userPrivacyCheckBox">
          <div className="checkContainer">
            <input type="checkbox" name="agree" value="box1" />
            <span>모두동의</span>
          </div>
          <div className="checkPrivacy">
            <input type="checkbox" name="agree" value="box2" />
            <span>* 개인정보의 수집 및 이용에 대한 동의.</span>
          </div>
          <div className="checkAboard">
            <input type="checkbox" name="agree" value="box3" />
            <span>*개인정보의 국외 이전에 대한 동의.</span>
          </div>
          <div className="checkSubscribe">
            <input type="checkbox" name="agree" value="box4" />
            <span>
              뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.
            </span>
          </div>

          <Button title="계정만들기" format="signup" handleClick={goMain} />
        </form>
      </div>
      <button className="closeButton" onClick={() => handleCloseJoin()}>
        <IoCloseSharp />
      </button>
    </div>
  );
}

export default JoinModal;
