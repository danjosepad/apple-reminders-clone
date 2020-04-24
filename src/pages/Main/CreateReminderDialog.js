import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateReminderDialog({ isOpen, onCancel, onSubmit }) {
  const [reminderName, setReminderName] = useState('');

  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Lembrete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Digite um nome para seu novo lembrete</Modal.Body>
      <Modal.Body>
        <Form.Control
          size="lg"
          name="Folder"
          type="text"
          placeholder="Nome da pasta"
          value={reminderName}
          onChange={e => setReminderName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => onSubmit(reminderName)}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
CreateReminderDialog.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

CreateReminderDialog.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
};
export default CreateReminderDialog;
