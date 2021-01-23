import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #FFF;

  text-transform: uppercase;
`;

export const Button = styled.button`
  background: #ef5ba1;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  max-width: 500px;
  font-weight: bold;
  margin-top: 16px;
  text-transform: uppercase;
  font-size: 18px;
  transition: background-color 0.2s;

  ${props =>
    props.copiedLink &&
    css`
      background: #7259c1;
    `}

  &:hover {
    background: ${shade(0.2, '#ef5ba1')};
  }
`;

export const GoBack = styled.a`
  color: #FFF;
  width: 100%;
  max-width: 500px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 16px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;

  padding-top: 36px;
`;

export const DownloadApp = styled.div`
  padding-top: 40px;
  text-align: center;

  h3 {
    padding-bottom: 40px;
  }

  a {
    background: #ef5ba1;
    border-radius: 10px;
    padding: 15px;
    color: #312e38;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, '#ef5ba1')};
    } 
  }
`;
