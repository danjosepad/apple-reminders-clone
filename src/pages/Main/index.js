/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */

// NPM Imports
import React, { useState, Fragment, useEffect } from 'react';
import * as R from 'ramda';

// Project Imports
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';
import {
  Container,
  TopBar,
  Menu,
  UserInfo,
  SideMenu,
  ReminderContent,
  Reminders,
  Reminder,
  ReminderList,
} from './styles';
import CreateReminderDialog from './CreateReminderDialog';

export default function Main() {
  const [reminders, setReminders] = useState([]);
  const [prevReminders, setPrevReminders] = useState([]);

  const [currentReminder, setCurrentReminder] = useState(null);

  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  useEffect(() => {
    const reminder = JSON.parse(localStorage.getItem('@Reminders:reminder'));

    setReminders(reminder);
    setCurrentReminder(reminder[0].id);
  }, []);

  // I used other variable cause the useRef usage for previousState
  // wasn't working properly with the label onBlur
  useEffect(() => {
    if (prevReminders !== reminders) {
      localStorage.setItem('@Reminders:reminder', JSON.stringify(reminders));

      setPrevReminders(reminders);
    }
  }, [prevReminders, reminders]);

  const handleAddReminder = reminder => {
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
            isSelected: false,
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

  const changeTaskCheck = (check, id) => {
    const reminderIndex = reminders.findIndex(r => r.id === currentReminder);

    const taskIndex = reminders[reminderIndex].tasks.findIndex(
      task => task.id === id
    );

    const edittedReminder = [...reminders];

    edittedReminder[reminderIndex].tasks[taskIndex].isSelected = check;

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
            <ReminderList
              key={reminder.id}
              onClick={() => setCurrentReminder(reminder.id)}
              selected={reminder.id === currentReminder}
            >
              <BsListUl
                style={{
                  color: 'white',
                  background: 'blue',
                  width: 30,
                  height: 30,
                  padding: 5,
                  borderRadius: 50,
                }}
                size={20}
              />{' '}
              {reminder.name}
            </ReminderList>
          ))}

          <button type="button" onClick={handleModal}>
            <AiFillPlusCircle size={20} color="#1576e1" enableBackground />
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
              {reminder.tasks.map(task => (
                <Reminder key={task.id}>
                  <input
                    type="checkbox"
                    id={task.id}
                    checked={task.isSelected}
                    onChange={e => changeTaskCheck(e.target.checked, task.id)}
                  />
                  <label htmlFor={task.id} />
                  <span
                    contentEditable
                    onBlur={event =>
                      changeTaskName(event.currentTarget.textContent, task.id)
                    }
                    dangerouslySetInnerHTML={{ __html: task.name }}
                  />
                </Reminder>
              ))}
            </Fragment>
          ))}
          {reminders[0] ? (
            <button type="button" onClick={handleAddTask}>
              <AiFillPlusCircle size={20} color="orange" />
              Nova Tarefa
            </button>
          ) : null}
        </ReminderContent>
      </Reminders>
    </Container>
  );
}
