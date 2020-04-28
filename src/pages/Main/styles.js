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
  grid-template-columns: 30px 1fr;
  align-items: baseline;
  padding: 10px;

  input {
    display: block;
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

      &:last-child {
        background: green;
        border-radius: 0 0 10px 10px;
      }
    `}
`;
