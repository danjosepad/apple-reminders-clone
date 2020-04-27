// NPM Imports
import React, { useState, Fragment } from 'react';
import * as R from 'ramda';

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
  const [currentReminder, setCurrentReminder] = useState(null);

  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  const handleAddReminder = reminder => {
    console.log(reminders);

    const newReminder = {
      name: reminder,
      tasks: [],
      id: Math.random(),
    };

    setReminders([...reminders, newReminder]);
    setCurrentReminder(newReminder.id);
    handleModal();
  };

  const handleAddTask = () => {
    const index = reminders.findIndex(r => r.id === currentReminder);

    setReminders(reminder => {
      const newTask = {
        ...reminder[index],
        tasks: [
          ...reminder[index].tasks,
          {
            name: '',
            id: Math.random(),
          },
        ],
      };
      return R.update(index, newTask, reminder);
    });
  };

  const listReminder = reminders.filter(
    reminder => reminder.id === currentReminder
  );

  const changeTaskName = (newName, id) => {
    const reminderIndex = reminders.findIndex(r => r.id === currentReminder);

    const taskIndex = reminders[reminderIndex].tasks.findIndex(
      task => task.id === id
    );

    const edittedReminder = [...reminders];

    edittedReminder[reminderIndex].tasks[taskIndex].name = newName;

    setReminders(edittedReminder);
  };

  return (
    <Container>
      <TopBar>
        <Menu>
          iCloud Clone <strong>Lembretes</strong>
        </Menu>
        <UserInfo>Daniel</UserInfo>
      </TopBar>

      <Reminders>
        <SideMenu>
          {reminders.map(reminder => (
            <li
              key={reminder.id}
              onClick={() => setCurrentReminder(reminder.id)}
            >
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
          {listReminder.map(reminder => (
            <Fragment key={reminder.id}>
              <h2>{reminder.name}</h2>
              <Reminder>
                {reminder.tasks.map(task => (
                  <Fragment key={task.id}>
                    <input
                      type="radio"
                      id={task.id}
                      name="gender"
                      value={task.id}
                    />
                    <span
                      contentEditable
                      htmlFor={task.id}
                      onBlur={event =>
                        changeTaskName(event.currentTarget.textContent, task.id)
                      }
                      dangerouslySetInnerHTML={{ __html: task.name }}
                    />
                  </Fragment>
                ))}
                <button type="button" onClick={handleAddTask}>
                  <AiFillPlusCircle size={20} color="orange" />
                  Nova Tarefa
                </button>
              </Reminder>
            </Fragment>
          ))}
        </ReminderContent>
      </Reminders>
    </Container>
  );
}
