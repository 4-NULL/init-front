import { Form, useLoaderData, redirect, useNavigate, useLocation, } from "react-router-dom";
import { modifyUser } from "../connect/connect-api";
import { useEffect, useState } from "react";

export async function action({ request, params }) {
    // formData 객체를 일반 자바스크립트 객체로 변환
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

  // id 추가
  updates.id = params.contactId;

  // 사용자 정보수정 Server Connect
  await modifyUser(updates);
  return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();

    // form 초기값 설정
    const [formValues, setFormValues] = useState({
        first   : contact?.first || '',
        last    : contact?.last || '',
        twitter : contact?.twitter || '',
        avatar  : contact?.avatar || '',
        notes   : contact?.notes|| '',
    });

    useEffect(() => {
        setFormValues({
            first   : contact?.first || '',
            last    : contact?.last || '',
            twitter : contact?.twitter || '',
            avatar  : contact?.avatar || '',
            notes   : contact?.notes|| '',
        });
    }, [location.state, contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

  return (
    <Form method='post' id='contact-form'>
      <p>
        <span>Name</span>
        <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            // defaultValue={contact?.first}
            value={formValues.first}
            onChange={handleChange}
        />
        <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            // defaultValue={contact?.last}
            value={formValues.last}
            onChange={handleChange}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
            type="text"
            name="twitter"
            placeholder="@jack"
            // defaultValue={contact?.twitter}
            value={formValues.twitter}
            onChange={handleChange}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            // defaultValue={contact?.avatar}
            value={formValues.avatar}
            onChange={handleChange}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
            name="notes"
            rows={6}
            // defaultValue={contact?.notes}
            value={formValues.notes}
            onChange={handleChange}
        />
        </label>
        <p>
        <button type="submit">Save</button>
        <button
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
