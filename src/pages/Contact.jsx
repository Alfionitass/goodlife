import { useState, useEffect, useRef } from "react";
import { FormInput, TextArea } from "../components/FormInput";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const form = useRef();

  useEffect(() => {
    console.log(name, email, question);
  }, [name, email, question]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
    emailjs
      .sendForm("service_fexvp2r", "template_mlvdx48", form.current, {
        publicKey: "39t47ljJ1-6XXmBoo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div className="py-8 px-14">
      <h4 className="text-brand-primary-dark text-2xl md:text-3xl">
        Contact us
      </h4>
      <div className="text-left my-8 md:my-10 md:px-20">
        <p className="font-bold mb-4">We’d love to hear from you.</p>
        <p>
          Whether you’re a brand looking to grow in Indonesia, a partner
          exploring opportunities, or a customer with questions about our
          products, the Good Life team is here to help. Reach out to us today —
          let’s start building success together.
        </p>
      </div>
      <form className="grid" ref={form} onSubmit={handleSubmit}>
        {/* <form className="grid" action="https://formsubmit.co/nanakimm345@gmail.com" method="POST"> */}
        {/* <form className="grid"> */}
        <FormInput
          type="text"
          children="name"
          label="Name"
          value={name}
          handleChange={handleNameChange}
          className="md:justify-self-center mb-4"
        />
        <FormInput
          type="email"
          children="email"
          label="E-mail"
          value={email}
          handleChange={handleEmailChange}
          className="md:justify-self-center mb-4"
        />
        <TextArea
          children="message"
          label="Question"
          value={question}
          handleChange={handleQuestionChange}
          className="md:justify-self-center mb-4 h-48"
        />
        <button type="submit" className="form-btn md:justify-self-center">
          Submit
        </button>
      </form>
    </div>
  );
}
