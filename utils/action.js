"use server";

import { revalidatePath } from "next/cache";

export const CreateContacts = async (prevState, formData) => {
    await new Promise((resolve) => setInterval(resolve, 500))
  const rawData = Object.fromEntries(formData);
  revalidatePath("/contact");
  console.log(rawData);
  return "Contact created";
};
