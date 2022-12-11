import { Form } from './FormComponent/FormComponent';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './FiltrComponent/FiltrComponent';
import { BoockTitle } from './App.styled';
import { ButtonTheme } from './ButtonTheme/ButtonTheme';

export const App = () => {
  return (
    <div>
      <ButtonTheme />
      <BoockTitle>Phone book</BoockTitle>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};
