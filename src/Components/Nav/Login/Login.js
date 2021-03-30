import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
// import { config } from '../../../config.js';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'kakao',
    };
  }

  responseKaKao = res => {
    this.setState({
      data: res,
    });

    //   fetch(`${config.api}/user/signin/kakao`, {
    //     //백엔드 endpoint로 수정필요
    //     headers: {
    //       Authorization: res.response.access_token,
    //     },
    //   })
    //     .then(res => res.json())
    //     .then(
    //       res => localStorage.setItem('token', res.token),
    //       alert('로그인 성공')
    //     );
  };

  render() {
    return (
      <>
        <KaKaoBtn
          jsKey={'e7f59ef4b4900fe5aa839fcbe7c5ceb7'}
          buttonText="카카오 계정으로 로그인"
          onSuccess={this.responseKaKao}
          getProfile={true}
        />
      </>
    );
  }
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default withRouter(Login);
