// NPM Imports
import React from 'react';

// Project Imports
import {
  Container,
  TopBar,
  Menu,
  UserInfo,
  SideMenu,
  ReminderContent,
  Reminders,
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
        </SideMenu>

        <ReminderContent>
          <h2>Lembretes</h2>
          Bla bla blá
        </ReminderContent>
      </Reminders>
    </Container>
  );
}
