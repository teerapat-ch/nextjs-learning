import { fetchContact } from "@/utils/action";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  const contacts = await fetchContact();
  return Response.json({ contacts });
};
