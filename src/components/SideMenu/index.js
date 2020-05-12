import React from 'react';
import PropTypes from 'prop-types';

// Project imports

import { AiFillPlusCircle } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';
import { MenuContent, CreateButton, ReminderList } from './styles';
import { reminderProps } from '../../prop-types';

function SideMenu({ reminders, currentReminder, onSelectReminder, onCreate }) {
  return (
    <MenuContent>
      {reminders.map(reminder => (
        <ReminderList
          key={reminder.id}
          onClick={() => onSelectReminder(reminder)}
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

      <CreateButton type="button" onClick={onCreate}>
        <AiFillPlusCircle size={26} color="#1576e1" />
        Novo Lembrete
      </CreateButton>
    </MenuContent>
  );
}

SideMenu.propTypes = {
  reminders: PropTypes.arrayOf(reminderProps),
  currentReminder: reminderProps,
  onSelectReminder: PropTypes.func,
  onCreate: PropTypes.func,
};

SideMenu.defaultProps = {
  reminders: [],
  currentReminder: {},
  onSelectReminder: () => {},
  onCreate: () => {},
};

export default SideMenu;
