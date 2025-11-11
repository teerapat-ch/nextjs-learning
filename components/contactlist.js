import { fetchContact } from "@/utils/action";

const ContactList = async () => {
  const contacts = await fetchContact();

  return (
    <div>
        {contacts.map((item, index) => {
            return <li key={index}>{item.fname} {item.lname}</li>
        })}
    </div>
  )
};
export default ContactList;
