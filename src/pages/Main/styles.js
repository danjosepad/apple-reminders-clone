import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #c6c5ca;
`;

export const SideMenu = styled.ul`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  border-right: 1px solid #c6c6c8;
  background: #f6f5fa;
  padding: 20px 30px;

  button {
    border: none;
    background: #f6f5fa;
    position: absolute;
    bottom: 0;
  }
`;

export const ReminderContent = styled.div`
  padding: 25px;
  width: 100%;

  h2 {
    font-size: 32px;
    color: orange;
    margin-bottom: 20px;
  }

  button {
    border: none;
    background: #f6f5fa;
    position: absolute;
    bottom: 0;
  }
`;

export const Reminders = styled.div`
  display: flex;
`;
export const UserInfo = styled.div`
  color: #5c9ded;
  font-size: 22px;
`;
export const Menu = styled.div`
  font-weight: 300;
  font-size: 22px;

  strong {
    color: #1576e1;
  }
`;

export const Reminder = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: baseline;
  padding: 10px;

  input {
    display: none;

    & + label {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #ccc;
      transition: all 0.2s;
      cursor: pointer;
    }

    &:checked + label {
      transition: all 0.2s;
      background: orange;
      border: 2px solid white;
      box-shadow: 0px 0px 0px 2px orange;
    }
  }

  span {
    display: block;
    font-size: 18px;
    border-bottom: 1px solid #c6c5ca;
    width: 100%;
  }
`;

export const ReminderList = styled.li`
  font-size: 16px;
  color: #424242;
  padding: 20px;
  list-style: none;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      &:first-child {
        background: #eaeaec;
        border-radius: 10px 10px 0 0;
        border-bottom: 1px solid #c6c5ca;
      }

      &:not(:last-child) {
        background: #eaeaec;
      }

      &:last-of-type:not(:first-child) {
        background: #eaeaec;
        border-radius: 0 0 10px 10px;
      }
    `}
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: center;
  justify-content: center;
  grid-gap: 8px;

  input {
    display: none;

    & + span {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    &:checked + span {
      border: 4px solid white;
      box-shadow: 0px 0px 0px 3px #c9c9c9;
    }

    & + span:nth-of-type(1) {
      background: red;
    }

    & + span:nth-of-type(2) {
      background: orange;
    }

    & + span:nth-of-type(3) {
      background: yellow;
    }

    & + span:nth-of-type(4) {
      background: green;
    }

    & + span:nth-of-type(5) {
      background: #007ba7;
    }

    & + span:nth-of-type(6) {
      background: blue;
    }

    & + span:nth-of-type(7) {
      background: indigo;
    }

    & + span:nth-of-type(8) {
      background: pink;
    }

    & + span:nth-of-type(9) {
      background: purple;
    }

    & + span:nth-of-type(10) {
      background: brown;
    }
  }
`;
