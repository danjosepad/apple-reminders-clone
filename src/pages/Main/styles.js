import styled from 'styled-components';

export const Container = styled.div``;

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

  li {
    font-size: 16px;
    color: #424242;
    padding: 20px;
    list-style: none;

    &:not(:last-child) {
      border-bottom: 1px solid #c6c5ca;
    }

    &:first-child {
      background: #eaeaec;
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      background: #eaeaec;
      border-radius: 0 0 10px 10px;
    }
  }

  button {
    border: none;
    background: #f6f5fa;
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
  display: flex;
  align-items: baseline;
  padding: 10px;

  input {
  }

  label {
    font-size: 18px;
    border-bottom: 1px solid #c6c5ca;
    width: 100%;
  }

  button {
    border: none;
    background: #f6f5fa;
  }
`;
