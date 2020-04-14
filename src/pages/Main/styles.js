import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#7159c1')};

  small {
    display: block;
    font-size: 16px;
    color: #333;
  }
`;

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

export const SideMenu = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  border-right: 1px solid #c6c6c8;
  background: #f6f5fa;
  padding: 20px;
`;

export const ReminderContent = styled.div`
  padding: 25px;

  h2 {
    font-size: 32px;
    color: orange;
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
