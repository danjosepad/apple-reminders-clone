import styled from 'styled-components';

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

export const ReminderContent = styled.div`
  padding: 25px;
  width: 100%;

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

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 550px;
  margin: 10px 20px;
`;

export const CreateButton = styled.div`
  border: none;
  background: #f6f5fa;
  position: absolute;
  bottom: 0;

  color: ${props => (props.color ? props.color : '#1576e1')};
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin: auto;
`;

export const ColorLabel = styled.label`
  width: 10%;
  input {
    display: none;

    & + span {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    &:checked + span {
      border: 4px solid white;
      box-shadow: 0px 0px 0px 3px #c9c9c9;
    }
  }

  &:nth-of-type(1) {
    input + span {
      background: red;
    }
  }
  &:nth-of-type(2) {
    input + span {
      background: orange;
    }
  }
  &:nth-of-type(3) {
    input + span {
      background: yellow;
    }
  }

  &:nth-of-type(4) {
    input + span {
      background: green;
    }
  }

  &:nth-of-type(5) {
    input + span {
      background: #007ba7;
    }
  }

  &:nth-of-type(6) {
    input + span {
      background: blue;
    }
  }
  &:nth-of-type(7) {
    input + span {
      background: indigo;
    }
  }
  &:nth-of-type(8) {
    input + span {
      background: pink;
    }
  }
  &:nth-of-type(9) {
    input + span {
      background: purple;
    }
  }
  &:nth-of-type(10) {
    input + span {
      background: brown;
    }
  }
`;

export const Error = styled.div`
  margin: 0 20px;
  color: red;
  font-weight: 600;
`;
