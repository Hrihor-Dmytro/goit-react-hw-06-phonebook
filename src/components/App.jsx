import { Form } from './FormComponent/FormComponent';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './FiltrComponent/FiltrComponent';
export const App = () => {
  return (
    <div>
      <h1>Phone book</h1>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};
