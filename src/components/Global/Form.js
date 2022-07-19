import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mjvlddpq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-10">
      <div className="flex justify-between">
        <div className="w-[48%] mb-3">
          <input
            className="w-full px-3 py-2 rounded outline-none focus:ring-2 ring-secondary transition-all duration-300 ease-in-out shadow-custom"
            id="email"
            type="email"
            name="email"
            placeholder="Name"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="w-[48%] mb-3">
          <input
            className="w-full px-3 py-2 rounded outline-none focus:ring-2 ring-secondary transition-all duration-300 ease-in-out shadow-custom"
            id="email"
            type="email"
            name="email"
            placeholder="Phone"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[48%] mb-3">
          <select className="w-full px-3 py-2 rounded text-slate-400 outline-none focus:ring-2 ring-secondary transition-all duration-300 ease-in-out shadow-custom">
            <option>Select Service</option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Digital Marketing</option>
            <option>SEO</option>
            <option>Content Writing</option>
            <option>Mobile App</option>
          </select>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="w-[48%] mb-3 ">
          <input
            className="w-full px-3 py-2 rounded outline-none focus:ring-2 ring-secondary transition-all duration-300 ease-in-out shadow-custom"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <textarea
        rows={7}
        className="px-3 py-2 rounded outline-none focus:ring-2 ring-secondary transition-all duration-300 ease-in-out shadow-custom"
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-secondary hover:bg-primary transition-colors text-white rounded py-2 mt-5 shadow-custom"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
