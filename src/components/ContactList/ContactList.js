import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { showContacts } from 'redux/selectors';

export function ContactList() {

    // const contacts = useSelector(state => state.contacts.contacts);
    // const filter = useSelector(state => state.filter);
    // // const visibleContacts = contacts.filter(element => element.name.toLowerCase().includes(filter));
    const contacts = useSelector(showContacts)
    return (
        <ContactListEl>
            {contacts.map((contact) => {
                    return (
                        <ContactItem 
                            key={contact.id}
                            name={contact.name}
                            number={contact.number}
                            id={contact.id}
                        />
                    );
                })}                
        </ContactListEl>
    );
};