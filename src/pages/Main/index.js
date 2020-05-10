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
  Title,
  CreateButton,
  ReminderTopBar,
  SBsThreeDots,
} from './styles';
import CreateReminderDialog from './CreateReminderDialog';
import EditReminderDialog from './EditReminderDialog';

export default function Main() {
  const [reminders, setReminders] = useState([]);
  const [prevReminders, setPrevReminders] = useState([]);

  const [currentReminder, setCurrentReminder] = useState(null);

  // Reminder control
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateReminderModal = () => setIsCreating(!isCreating);
  const handleEditReminderModal = () => setIsEditing(!isEditing);

  useEffect(() => {
    const reminder = JSON.parse(localStorage.getItem('@Reminders:reminder'));

    if (reminder[0]) {
      setReminders(reminder);

      setCurrentReminder(reminder[0]);
    }
  }, []);

  // I used other variable cause the useRef usage for previousState
  // wasn't working properly with the label onBlur
  useEffect(() => {
    if (prevReminders !== reminders) {
      localStorage.setItem('@Reminders:reminder', JSON.stringify(reminders));

      setPrevReminders(reminders);
    }
  }, [prevReminders, reminders]);

  const handleAddReminder = (values, { setSubmitting }) => {
    setSubmitting(true);

    const { reminderName, color } = values;

    const newReminder = {
      name: reminderName,
      tasks: [],
      color,
      id: Math.random(),
    };

    setReminders([...reminders, newReminder]);
    setCurrentReminder(newReminder);

    handleCreateReminderModal();
    setSubmitting(false);
  };

  const handleAddTask = () => {
    const index = reminders.findIndex(r => r.id === currentReminder.id);

    const lastTask = R.pipe(
      R.prop('tasks'),
      R.last(R.__),
      R.prop('name')
    )(reminders[index]);

    if (!lastTask) {
      return;
    }

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
    reminder => reminder.id === currentReminder.id
  );

  const changeTaskName = (newName, id) => {
    const reminderIndex = reminders.findIndex(r => r.id === currentReminder.id);

    const taskIndex = reminders[reminderIndex].tasks.findIndex(
      task => task.id === id
    );

    const edittedReminder = [...reminders];

    edittedReminder[reminderIndex].tasks[taskIndex].name = newName;

    setReminders(edittedReminder);
  };

  const changeTaskCheck = (check, id) => {
    const reminderIndex = reminders.findIndex(r => r.id === currentReminder.id);

    const taskIndex = reminders[reminderIndex].tasks.findIndex(
      task => task.id === id
    );

    const edittedReminder = [...reminders];

    edittedReminder[reminderIndex].tasks[taskIndex].isSelected = check;

    setReminders(edittedReminder);
  };

  const handleEditReminder = ({ reminderName, color }) => {
    const index = reminders.findIndex(r => r.id === currentReminder.id);

    const edittedReminder = {
      ...currentReminder,
      name: reminderName,
      color,
    };

    setReminders(rems => R.update(index, edittedReminder, rems));
    setCurrentReminder(edittedReminder);

    handleEditReminderModal();
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
              onClick={() => setCurrentReminder(reminder)}
              selected={reminder.id === currentReminder.id}
            >
              <BsListUl
                style={{
                  color: 'white',
                  background: reminder.color,
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

          <CreateButton type="button" onClick={handleCreateReminderModal}>
            <AiFillPlusCircle size={26} color="#1576e1" />
            Novo Lembrete
          </CreateButton>
        </SideMenu>

        <ReminderContent>
          {listReminder.map(reminder => (
            <Fragment key={reminder.id}>
              <ReminderTopBar>
                <Title color={reminder.color}>{reminder.name}</Title>
                <SBsThreeDots
                  size={26}
                  color="#2d6fbb"
                  onClick={handleEditReminderModal}
                />
              </ReminderTopBar>

              {reminder.tasks.map(task => (
                <Reminder color={reminder.color} key={task.id}>
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
              {reminders[0] ? (
                <CreateButton
                  color={reminder.color}
                  type="button"
                  onClick={handleAddTask}
                >
                  <AiFillPlusCircle size={26} color={reminder.color} />
                  Nova Tarefa
                </CreateButton>
              ) : null}
            </Fragment>
          ))}
        </ReminderContent>
      </Reminders>

      <CreateReminderDialog
        isOpen={isCreating}
        onCancel={handleCreateReminderModal}
        onSubmit={handleAddReminder}
      />
      <EditReminderDialog
        isOpen={isEditing}
        reminder={currentReminder}
        onCancel={handleEditReminderModal}
        onSubmit={handleEditReminder}
      />
    </Container>
  );
}
