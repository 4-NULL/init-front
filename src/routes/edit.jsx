import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";
import { modifyUser } from "../connect/connect-api";

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

    return (
    <Form method="post" id="contact-form">
        <p>
        <span>Name</span>
        <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact?.first}
        />
        <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact?.last}
        />
        </p>
        <label>
        <span>Twitter</span>
        <input
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact?.twitter}
        />
        </label>
        <label>
        <span>Avatar URL</span>
        <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact?.avatar}
        />
        </label>
        <label>
        <span>Notes</span>
        <textarea
            name="notes"
            defaultValue={contact?.notes}
            rows={6}
        />
        </label>
        <p>
        <button type="submit">Save</button>
        <button
            type="button"
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