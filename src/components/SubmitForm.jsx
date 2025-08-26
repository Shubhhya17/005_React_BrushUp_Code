
"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function SubmitForm() {
  async function handleSubmit(formData) {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submitted", formData);
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" />
      <br />
      <input type="password" name="password" placeholder="Enter Password" />
      <br />
      <SubmitButton />
    </form>
  );
}
