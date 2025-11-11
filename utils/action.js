"use server";

import { revalidatePath } from "next/cache";

export const CreateContacts = async (prevState, formData) => {
  await new Promise((resolve) => setInterval(resolve, 500));
  const rawData = Object.fromEntries(formData);
  revalidatePath("/contact");
  console.log(rawData);
  return "Contact created";
};

export const fetchContact = async () => {
  const contacts = [
    { id: 1, fname: "hina", lname: "sorasaki" },
    { id: 2, fname: "arisu", lname: "tendou" },
    { id: 3, fname: "hoshino", lname: "takanashi" },
  ];

  return contacts;
};
