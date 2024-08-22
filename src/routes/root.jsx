import { useEffect } from "react";
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigate, useSubmit, } from "react-router-dom";
import { getContacts, createContact } from "../contacts";

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function connect() {
    const handleUserList = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/v1/userList");
        
            if(res.ok) {
                const resJson = await res.json();
                console.log(resJson);
            } else {
                console.error(`Error: ${res.status} - ${res.statusText}`);
            }
    
        } catch (error) {
            console.error('Fetch error:', error);
        }
      };

      await handleUserList()
}



export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigate();
    const submit = useSubmit();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? "loading" : ""}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                });
                            }}
                        />
                        <div id="search-spinner" aria-hidden hidden={!searching} />
                        <div className="sr-only" aria-live="polite" />
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <button onClick={connect}>Call API</button>
                        </li>
                    </ul>
                    {contacts.length ? (
                        <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <NavLink
                                    to={`contacts/${contact.id}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active" : isPending
                                            ? "pending" : ""
                                    }
                                >
                                    {contact.first || contact.last ? (
                                    <>
                                        {contact.first} {contact.last}
                                    </>
                                    ) : (
                                    <i>No Name</i>
                                    )}{" "}
                                    {contact.favorite && <span>★</span>}
                                </NavLink>
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p>
                        <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    )
}