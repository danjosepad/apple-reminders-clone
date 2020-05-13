/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */

// NPM Imports
import React, { useState, useEffect } from 'react';
import * as R from 'ramda';

// Project Imports
import { Container, TopBar, Menu, UserInfo, Reminders } from './styles';
import CreateReminderDialog from './CreateReminderDialog';
import EditReminderDialog from './EditReminderDialog';

import SideMenu from '../../components/SideMenu';
import ReminderInfo from '../../components/ReminderContent';

export default function Main() {
  const [reminders, setReminders] = useState([]);
  const [prevReminders, setPrevReminders] = useState([]);

  const [currentReminder, setCurrentReminder] = useState(null);
  const [listFilteredReminder, setListFilteredReminder] = useState(null);

  // Reminder control
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateReminderModal = () => setIsCreating(!isCreating);
  const handleEditReminderModal = () => setIsEditing(!isEditing);

  useEffect(() => {
    const reminder = JSON.parse(localStorage.getItem('@Reminders:reminder'));

    if (reminder) {
      setReminders(reminder);

      setCurrentReminder(reminder[0]);
    }
  }, []);

  // I used other variable cause the useRef usage for previousState
  // wasn't working properly with the label onBlur
  useEffect(() => {
    if (currentReminder) {
      const filteredReminderBySelected = reminders.filter(
        reminder => reminder.id === currentReminder.id
      );

      setListFilteredReminder(filteredReminderBySelected[0]);
    }

    if (prevReminders !== reminders) {
      localStorage.setItem('@Reminders:reminder', JSON.stringify(reminders));

      setPrevReminders(reminders);
    }
  }, [currentReminder, prevReminders, reminders]);

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

    // Check if reminder has at least one task
    if (reminders[index].tasks[0]) {
      // Check if the last task has an value
      const lastTask = R.pipe(
        R.prop('tasks'),
        R.last(R.__),
        R.prop('name')
      )(reminders[index]);

      if (!lastTask) {
        return;
      }
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

  const onSelectReminder = rem => {
    setCurrentReminder(rem);
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
        <SideMenu
          reminders={reminders}
          currentReminder={currentReminder}
          onSelectReminder={onSelectReminder}
          onCreate={handleCreateReminderModal}
        />

        <ReminderInfo
          reminder={listFilteredReminder}
          reminders={reminders}
          onEdit={handleEditReminderModal}
          onAddTask={handleAddTask}
          onChangeName={changeTaskName}
          onCheck={changeTaskCheck}
        />
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
