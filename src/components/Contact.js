import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!form.from_name) {
      errors.from_name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.from_email) {
      errors.from_email = "Email is required";
    } else if (!emailPattern.test(form.from_email)) {
      errors.from_email = "Email is invalid";
    }

    if (!form.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm("service_1aqvn1u", "template_ajw35ws", formRef.current, {
          publicKey: "9OqJmoJu0ShvBOf56",
        })
        .then(
          () => {
            toast.success("Message sent successfully");
            setForm({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            toast.error("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form is invalid");
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="md:mx-[7rem] py-6 md:py-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold border-b-4 border-[#A40700] p-2 inline">
          Contact
        </h1>
        <p className="py-6 text-white">Let's Work Together</p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 text-center lg:px-20">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <motion.div
              className="mb-12 w-full md:w-1/2 lg:w-5/12 lg:px-6"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              viewport={{ once: false }}
            >
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="from_name"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleInput90"
                    placeholder="Name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                  {errors.from_name && (
                    <p className="text-red-500 text-xs">{errors.from_name}</p>
                  )}
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    name="from_email"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleInput91"
                    placeholder="Email address"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email address
                  </label>
                  {errors.from_email && (
                    <p className="text-red-500 text-xs">{errors.from_email}</p>
                  )}
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Your message...
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full  py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#A40700] text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none mt-3"
                >
                  Send
                </button>
              </form>
            </motion.div>
            <div className="w-full lg:w-7/12 mt-8 lg:mt-0 text-center pt-10   md:text-left">
              <motion.div
                className="flex flex-wrap "
                initial="hidden"
                whileInView="visible"
                variants={topToBottomVariants}
                viewport={{ once: false }}
              >
                <div className="mb-12 w-full md:w-1/2 lg:px-8">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow ">
                      <p className="mb-2 font-bold text-white">Contact</p>

                      <a
                        href={`tel:8879003313`}
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        8879003313
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">Email</p>

                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        sahabhishek097@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12.75a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0zM15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">GitHub</p>

                      <a
                        href="https://github.com/Abhisheksah09/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        github.com/Abhisheksah09
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 px-4 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100   text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8.25v3.75h3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold text-white">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        https://www.linkedin.com/in/abhishek-sah-782409265/
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
