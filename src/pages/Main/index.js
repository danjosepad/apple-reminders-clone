// NPM Imports
import React from 'react';

// Project Imports
import { AiFillPlusCircle } from 'react-icons/ai';
import {
  Container,
  TopBar,
  Menu,
  UserInfo,
  SideMenu,
  ReminderContent,
  Reminders,
  Reminder,
} from './styles';

export default function Main() {
  return (
    <Container>
      <TopBar>
        <Menu>
          iCloud <strong>Lembretes</strong>
        </Menu>
        <UserInfo>Daniel</UserInfo>
      </TopBar>

      <Reminders>
        <SideMenu>
          <li>Lembretes</li>
          <li>Coisas pra ver</li>

          <button type="button" onClick={() => {}}>
            <AiFillPlusCircle size={20} color="#1576e1" />
            Novo Lembrete
          </button>
        </SideMenu>

        <ReminderContent>
          <h2>Lembretes</h2>

          <Reminder>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>

            <button type="button" onClick={() => {}}>
              <AiFillPlusCircle size={20} color="orange" />
              Nova Tarefa
            </button>
          </Reminder>
        </ReminderContent>
      </Reminders>
    </Container>
  );
}
