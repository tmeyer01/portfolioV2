"use client";

import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../../public/images/github-icon.svg";
import LinkedInIcon from "../../../../public/images/linkedin-icon.svg";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#39383899] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          It all starts with a conversation, my inbox is always open. Whether
          you just have a question or just want to talk about cycling, Ill try
          and get back to you!
        </p>
        <div className="socials flex flex-rows gap-2">
          <Link href="https://github.com/tmeyer01">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link href="https://www.linkedin.com/in/tm01/">
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Looking for react developer"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium "
            >
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Your message..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200 text-white hover:text-black mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
