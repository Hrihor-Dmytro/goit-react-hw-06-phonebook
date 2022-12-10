import { Form } from './FormComponent/FormComponent';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './FiltrComponent/FiltrComponent';
import { BoockTitle } from './App.styled';
export const App = () => {
  return (
    <div>
      <BoockTitle>Phone book</BoockTitle>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};
