import ContactList from '@/components/contactlist';
import Form from '@/components/form'

const Contact = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <h1 className="text-5xl text-primary font-bold">Contact</h1>
      </div>
      <div>
        <Form />
        <hr />
        <ContactList />
      </div>
    </>
  );
};

export default Contact;
