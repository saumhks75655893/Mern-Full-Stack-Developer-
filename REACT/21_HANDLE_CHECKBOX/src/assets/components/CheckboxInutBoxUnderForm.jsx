import React from "react";
import { useState } from "react";

const CheckboxInutBoxUnderForm = () => {
  const [form, setForm] = useState({
    email: "",
    html: false,
  });

  function handleForm(e) {
    const { name, type, checked, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault;
    console.log(form);
    form.html && alert("Form submitted");
    setForm({ email: "", html: false });
  }
  return (
    <>
      <form action={submitForm}>
        <div
          style={{ padding: "10px 20px" }}
          className="flex flex-col w-50 border-red border-2  gap-5 select-none"
        >
          <input
            className="border-2"
            name="email"
            type="text"
            value={form.email}
            placeholder="Enter email"
            onChange={handleForm}
          />

          <label htmlFor="sa">
            <input
              type="checkbox"
              id="sa"
              name="html"
              checked={form.html}
              onChange={handleForm}
            />
            Select All
          </label>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CheckboxInutBoxUnderForm;
