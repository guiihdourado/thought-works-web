import styled from 'styled-components';
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

export const InputDiv = styled.div`
  margin-top: 16px;
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  max-width: 500px;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
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

  &:hover {
    background: ${shade(0.2, '#ef5ba1')};
  }
`;
