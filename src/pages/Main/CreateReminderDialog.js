import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Project imports

import { InputGroup, ColorLabel, Error } from './styles';

function CreateReminderDialog({ isOpen, onCancel, onSubmit }) {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'cerulean',
    'blue',
    'indigo',
    'pink',
    'purple',
    'brown',
  ];

  const initialValues = {
    reminderName: '',
    color: '',
  };

  const validationSchema = yup.object({
    reminderName: yup.string().required('Digite um nome para o lembrete'),
    color: yup.string().required(),
  });

  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Lembrete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Digite um nome para seu novo lembrete</Modal.Body>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <Field name="reminderName" as={FormControl} />
            </Modal.Body>

            <ErrorMessage name="reminderName" component={Error} />
            <InputGroup>
              {colors.map(color => (
                <ColorLabel key={color}>
                  <Field type="radio" name="color" value={color} />
                  <span />
                </ColorLabel>
              ))}
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={onCancel}>
                Fechar
              </Button>
              <Button type="submit" variant="primary">
                Salvar
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
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
