import React from 'react';

import './Userinput.scss';

function Userinput({ handleInput, signup }) {
  return (
    <>
      {signup && (
        <div className="input-box">
          <input
            className="username"
            type="text"
            name="name"
            placeholder="*이름"
            onChange={handleInput}
          />
          <label for="username">*이름</label>
        </div>
      )}
      <div className="input-box">
        <input
          className="email"
          type="email"
          name="email"
          placeholder="아이디"
          onChange={handleInput}
        />
        <label for="useremail">*이메일</label>
      </div>
      <div className="input-box">
        <input
          className="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleInput}
        />
        <label for="password">*비밀번호</label>
      </div>
    </>
  );
}

export default Userinput;
