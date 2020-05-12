import PropTypes from 'prop-types';

export const reminderProps = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
});
