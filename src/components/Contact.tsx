import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  const FORM_ACCESS_KEY = "6bc7779e-83c2-4e87-891b-5225b61cb567";

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="min-h-dvh bg-dark text-gray-200 flex flex-col items-center py-12 px-6 border-b-2">
      <h2 className="text-3xl font-monteserrat mb-8 font-bold">Hire Us</h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-5 max-sm:px-4 py-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="nameField" className="text-[18px] opacity-90 px-3">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nameField"
              placeholder="Enter your name"
              required
              name="name"
              className="border-2 border-cyan rounded-lg py-2 px-4 text-[20px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="emailField" className="text-[18px] opacity-90 px-3">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailField"
              placeholder="Enter your email"
              required
              name="email"
              className="border-2 border-cyan rounded-lg py-2 px-4 text-[20px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="subjectField"
              className="text-[18px] opacity-90 px-3"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subjectField"
              placeholder="Reason for contacting"
              required
              name="subject"
              className="border-2 border-cyan rounded-lg py-2 px-4 text-[20px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="messageField"
              className="text-[18px] opacity-90 px-3"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="messageField"
              placeholder="Enter your message"
              required
              name="message"
              className="border-2 border-cyan rounded-lg py-2 px-4 text-[20px] min-h-[50px]"
            ></textarea>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" border-2 border-cyan hover:bg-cyan rounded-lg py-2 px-4 text-[20px] transition-colors duration-300 ease-in-out cursor-pointer"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};
export default Contact;
