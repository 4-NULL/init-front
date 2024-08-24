import { redirect } from "react-router-dom";
// import { deleteContact } from "../contacts";
import { deleteUser } from "../connect/connect-api";

export async function action({ params }) {
    // throw new Error("oh dang!");

    await deleteUser(params.contactId);
    // await deleteContact(params.contactId);

    return redirect("/");
}