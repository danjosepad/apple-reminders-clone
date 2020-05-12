import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

// Project imports

import {
  ReminderTopBar,
  Title,
  SBsThreeDots,
  Reminder,
  CreateButton,
  ReminderContent,
} from './styles';
import { reminderProps } from '../../prop-types';

function ReminderInfo({
  reminder,
  reminders,
  onEdit,
  onAddTask,
  onCheck,
  onChangeName,
}) {
  return (
    <ReminderContent>
      {reminder && (
        <>
          <ReminderTopBar>
            <Title color={reminder.color}>{reminder.name}</Title>
            <SBsThreeDots size={26} color="#2d6fbb" onClick={onEdit} />
          </ReminderTopBar>
          {reminder.tasks.map(task => (
            <Reminder color={reminder.color} key={task.id}>
              <input
                type="checkbox"
                id={task.id}
                checked={task.isSelected}
                onChange={e => onCheck(e.target.checked, task.id)}
              />
              <label htmlFor={task.id} />
              <span
                contentEditable
                onBlur={event =>
                  onChangeName(event.currentTarget.textContent, task.id)
                }
                dangerouslySetInnerHTML={{ __html: task.name }}
              />
            </Reminder>
          ))}

          {reminders[0] ? (
            <CreateButton
              color={reminder.color}
              type="button"
              onClick={onAddTask}
            >
              <AiFillPlusCircle size={26} color={reminder.color} />
              Nova Tarefa
            </CreateButton>
          ) : null}
        </>
      )}
    </ReminderContent>
  );
}

ReminderInfo.propTypes = {
  reminder: reminderProps,
  reminders: PropTypes.arrayOf(reminderProps),
  onEdit: PropTypes.func,
  onAddTask: PropTypes.func,
  onCheck: PropTypes.func,
  onChangeName: PropTypes.func,
};

ReminderInfo.defaultProps = {
  reminder: {
    id: '',
    name: '',
    color: '',
    tasks: [],
  },
  reminders: [
    {
      id: '',
      name: '',
      color: '',
      tasks: [],
    },
  ],
  onEdit: () => {},
  onAddTask: () => {},
  onCheck: () => {},
  onChangeName: () => {},
};

export default ReminderInfo;
