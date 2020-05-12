import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

export const ReminderTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${props => (props.color ? props.color : 'red')};
  margin-bottom: 20px;
`;

export const SBsThreeDots = styled(BsThreeDots)`
  background: #efefef;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
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
      background: ${props => (props.color ? props.color : 'orange')};
      border: 2px solid white;
      box-shadow: 0px 0px 0px 2px
        ${props => (props.color ? props.color : 'orange')};
    }
  }

  span {
    display: block;
    font-size: 18px;
    border-bottom: 1px solid #c6c5ca;
    width: 100%;
  }
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
