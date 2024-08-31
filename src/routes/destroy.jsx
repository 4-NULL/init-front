import { redirect } from "react-router-dom";
import { deleteUser } from "../connect/connect-api";

export async function action({ params }) {
    await deleteUser({"id" : params.contactId});
    return redirect("/");
}