// NPM Imports
import React, { useState } from 'react';

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
import CreateReminderDialog from './CreateReminderDialog';

export default function Main() {
  const [reminders, setReminders] = useState([]);
  const [reminderId, setReminderId] = useState(null);

  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  const handleAddReminder = reminder => {
    const newReminder = {
      name: reminder,
      id: Math.random(),
    };

    setReminders([...reminders, newReminder]);
    setReminderId(newReminder.id);
    handleModal();
  };

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
          {reminders.map(reminder => (
            <li key={reminder.id} onClick={() => setReminderId(reminder.id)}>
              {reminder.name}
            </li>
          ))}

          <button type="button" onClick={handleModal}>
            <AiFillPlusCircle size={20} color="#1576e1" />
            Novo Lembrete
          </button>
        </SideMenu>

        <CreateReminderDialog
          isOpen={show}
          onCancel={handleModal}
          onSubmit={handleAddReminder}
        />
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
