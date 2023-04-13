import { PropTypes } from 'prop-types';
// import { useEffect } from 'react';
import { UlOfContact, ContactItem, Button } from './ContactList.styled';
import { deleteContacts } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const arrayContacts = useSelector(state => state.data);
  const filterValue = useSelector(state => state.filter.filterValue);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(arrayContacts));
  // }, [arrayContacts]);

  // const contacts = window.localStorage.getItem('contacts');
  // const parsed = JSON.parse(contacts);
  // console.log(contacts);

  const filterNormilized = filterValue.toLowerCase().trim();
  const visibleContacts = arrayContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormilized)
  );

  return (
    <UlOfContact>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContacts(id))} type="button">
            Delete
          </Button>
        </ContactItem>
      ))}
    </UlOfContact>
  );
};

export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
