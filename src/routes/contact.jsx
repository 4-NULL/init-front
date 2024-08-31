/* eslint-disable react/prop-types */
import { useLoaderData, Form, useFetcher } from 'react-router-dom';
// import { getContact, updateContact } from "../contacts";
// import { updateContact } from "../contacts";
import {
  findUserOne,
  modifyFavorite,
  modifyUser,
} from '../connect/connect-api';
// import { useDebugValue } from "react";

export async function loader({ params }) {
  const contact = await findUserOne({ id: params.contactId });

  return { contact: contact };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  // id 추가
  updates.id = params.contactId;

  if (updates.favorite) {
    return await modifyFavorite(updates);
  } else {
    return await modifyUser(updates);
  }
  // 사용자 정보수정 Server Connect

  // return updateContact(params.contactId, {
  //     favorite: formData.get("favorite") === "true",
  // });
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div id='contact'>
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target='_blank' href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  const favorite = fetcher.formData
    ? fetcher.formData.get('favorite') === 'true'
    : contact.favorite;

  return (
    <fetcher.Form method='post'>
      <button
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
