import { SectionList, FormLabel } from './FiltrComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsValue, filterChange } from '../Redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getContactsValue);

  const onFilterChange = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <SectionList>
      <FormLabel htmlFor="text">Find contacts by name</FormLabel>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </SectionList>
  );
};
