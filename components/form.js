"use client";
import { CreateContacts } from "@/utils/action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-secondary" type="submit" disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useActionState(CreateContacts, null);

  return (
    <>
      <form className="mx-15 my-8" action={formAction}>
        <label className="mr-1">First Name</label>
        <input className="border rounded-md mr-4 p-1" name="fname"></input>
        <label className="mr-1">Last Name</label>
        <input className="border rounded-md mr-4 p-1" name="lname"></input>
        <SubmitBtn />
      </form>
      {message && <h1 className="flex justify-center">{message}</h1>}
    </>
  );
};
export default Form;
