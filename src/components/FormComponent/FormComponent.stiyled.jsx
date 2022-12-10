import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrapp = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-right: 0;
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 5px;
  transition: background-color 250ms ease-in, border 250ms ease-in,
    color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid black;
  }
`;
