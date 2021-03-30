import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BsSearch } from 'react-icons/bs';

export default function Nav() {
  const Menuitems = [{ name: '영화' }, { name: 'TV 프로그램' }, { name: '책' }];

  return (
    <NavContainer>
      <GlobalStyle />
      <MenuWrapper>
        <div className="menu">
          <img alt="logo" src="/images/logo.png" />
          {Menuitems.map(el => {
            return (
              <NavList>
                <Button as="a" href="/">
                  {el.name}
                </Button>
              </NavList>
            );
          })}
          <NavList className="searchbar">
            <div className="searchIcon">
              <BsSearch />
            </div>
            <Search />
          </NavList>
          <NavList>
            <Button as="a" href="/">
              로그인
            </Button>
          </NavList>
          <NavList>
            <Button className="signup" as="a" href="/">
              회원가입
            </Button>
          </NavList>
          <NavList>
            <Button className="userIcon" as="a" href="/mypage">
              <img alt="유저프로필" src="/images/userprofile.png" />
            </Button>
          </NavList>
        </div>
      </MenuWrapper>
    </NavContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
      margin : 0;
      padding: 0;
      width: 100%;
      font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Nanum Gothic', 'Malgun Gothic', sans-serif;
      box-sizing: border-box;
}`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 62px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
  z-index: 100;
  transition: background-color 200ms ease 0s;
`;

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  padding: 0px;

  .menu {
    display: flex;
    align-items: center;
    max-width: 1320px;
    width: 100%;
    margin: 0 3.5%;

    img {
      display: inline-block;
      width: 151px;
      height: 29px;
    }

    .searchbar {
      position: relative;
      margin: 0 0 0 auto;

      .searchIcon {
        position: absolute;
        display: block;
        top: 24px;
        left: 20px;
        width: 14px;
        height: 14px;
      }
    }

    .signup {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      min-width: 72px;
      height: 32px;
      margin: 15px 0px;
      padding: 5px 14px 6px;
      border: 1px solid rgba(116, 116, 123, 0.5);
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
    }
    .userIcon {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
`;

const NavList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 62px;
  margin: 0 0 0 24px;
  padding: 5px;
  color: grey;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.button`
  font-size: 15px;
  border: none;
  margin: 0;
  color: rgb(126, 126, 126);
  text-decoration: none;

  &:active,
  &:hover {
    color: rgb(53, 53, 53);
  }
`;

const Search = styled.input.attrs({
  type: 'text',
  autocomplete: 'off',
  placeholder: '작품 제목, 배우, 감독을 검색해보세요.',
})`
  display: block;
  min-width: 300px;
  height: 38px;
  margin: 12px 0;
  padding: 7px 10px 8px 38px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: rgb(245, 245, 247);
  font-size: 14px;
  font-weight: 400;
`;
