import styled, { css } from 'styled-components';

export const MenuContent = styled.ul`
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
