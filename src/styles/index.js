import React from 'react';
import styled, { keyframes } from 'styled-components';
import { WaveLoading } from 'styled-spinkit';

export const Typography = styled.div`font-family: Helvetica Neue, Roboto;`;

export const BG = styled.div`background: #e6ecf0;`;

export const niceblue = '#40a5ed';
export const babyblue = '#ecf6fd';
export const twitterblue = '#1da1f2';
export const Input = styled.input`
  position: relative;
  display: inline-block;
  padding: 4px 7px;
  margin: 4px;
  width: 200px;
  height: 28px;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;
export const Button = styled.a`
  display: inline-block;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${niceblue};
  text-decoration: none;
  color: #0ae;
  font-family: Roboto;
  font-size: 15px;
  background: transparent;
  -webkit-transition: all 0.45s;
  transition: all 0.45s;
  text-align: center;
  line-height: 36px;
  margin-left: 8px;
  :hover {
    background: #40a5ed;
    color: white;
  }
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  padding: 5px;
  justify-content: center;
  margin-left: 10px;
  overflow: hidden;
`;
export const BasicFlex = Typography.extend`
  display: flex;
  padding: 5px;
`;

export const UserName = BasicFlex.extend`font-size: 16px;`;

export const AlertBox = Typography.extend`
  padding: 16px 16px 16px 60px;
  position: relative;
  border-radius: 4px;
  color: rgba(0,0,0,.65);
  line-height: 1.5;
  border: 1px solid #d2eafb;
  background-color: #ecf6fd;
  position: relative;
  padding: 8px 48px 8px 38px;
  border-radius: 4px;
  color: rgba(0,0,0,.65);
  font-size: 12px;
  line-height: 1.5;
}`;

export const Spinner = () => <WaveLoading />;
export const H1 = styled.h1`
  font-weight: 300;
  font-family: Roboto;
`;

export const Pop = BasicFlex.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 20px;
  color: hsla(0, 0%, 93%, 1);
  text-shadow: -1px -1px 0 hsla(0, 0%, 0%, 0.7);
  background: hsla(0, 0%, 0%, 0.85);
  border-radius: 4px;
  border: solid 1px hsla(0, 0%, 20%, 1);
  box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.7);
`;
export const Pop2 = BasicFlex.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  color: hsla(0, 0%, 93%, 1);
  text-shadow: -1px -1px 0 hsla(0, 0%, 0%, 0.7);
  background: hsla(0, 0%, 0%, 0.85);
  border-radius: 4px;
  border: solid 1px hsla(0, 0%, 20%, 1);
  box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.7);
  :after {
    position: absolute;
    right: 5px;
    top: -5px;
    content: '';
    display: block;
    border-bottom: solid 5px hsla(0, 0%, 0%, 0.85);
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
  }
`;
export const Sym = styled.span`
  font-size: 24px;
  position: absolute;
  right: 16px;
  top: 10px;
  color: rgba(0, 0, 0, 0.43);
  outline: none;
  text-decoration: none;
  transition: delay 1s;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;

export const NotificationMsg = Typography.extend`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 4px;
  line-height: 20px;
  display: inline-block;
`;

export const NotificationText = Typography.extend`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
`;

export const Notification = ({ title, text, onClose, show }) => {
  if (!show) return <div />;
  return (
    <Pop>
      <Sym onClick={() => setTimeout(onClose, 1000)}>&times;</Sym>
      <NotificationMsg>{title}</NotificationMsg>
      <NotificationText>{text}</NotificationText>
    </Pop>
  );
};
