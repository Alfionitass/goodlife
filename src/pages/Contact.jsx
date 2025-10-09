import { useState, useEffect, useRef } from "react";
import { FormInput, TextArea } from "../components/FormInput";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorQuestion, setErrorQuestion] = useState("");
  const form = useRef();

  useEffect(() => {
    console.log(name, email, question);
  }, [name, email, question]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errorName) {
      setErrorName("")
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorEmail) {
      setErrorEmail("")
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    if (errorQuestion) {
      setErrorQuestion("")
    }
  };

  const validateName = () => {
    if (name.trim().length === 0) {
      setErrorName("Name cannot be empty or contain only whitespace.")
      return false;
    } 
    return true;
  };

  const validateEmail = () => {
    if (email.trim().length === 0) {
      setErrorEmail("Email cannot be empty or contain only whitespace.");
      return false;
    }
    return true;
  };

  const validateQuestion = () => {
    if (question.trim().length === 0) {
      setErrorQuestion("Question cannot be empty or contain only whitespace.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validateQuestion()) {
      emailjs
        .sendForm("service_fexvp2r", "template_mlvdx48", form.current, {
          publicKey: "39t47ljJ1-6XXmBoo",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire({
              title: "Question Submitted Successfully",
              text: "Your submission has been received. Our team will get back to you soon.",
              icon: "success",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire({
              title: "Request Failed",
              text: "An unexpected error occurred. Our team has been notified. Please try again.",
              icon: "error",
            });
          },
        );
    }
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
        <FormInput
          type="text"
          children="name"
          label="Name"
          value={name}
          handleChange={handleNameChange}
          className={`md:justify-self-center ${errorName ? 'mb-14 md:mb-8' : 'mb-4'}`}
          error={errorName}
        />
        <FormInput
          type="email"
          children="email"
          label="E-mail"
          value={email}
          handleChange={handleEmailChange}
          className={`md:justify-self-center ${errorEmail ? 'mb-14 md:mb-8' : 'mb-4'}`}
          error={errorEmail}
        />
        <TextArea
          children="message"
          label="Question"
          value={question}
          handleChange={handleQuestionChange}
          className={`md:justify-self-center h-48 ${errorQuestion ? 'mb-14 md:mb-8' : 'mb-4'}`}
          error={errorQuestion}
        />
        <button type="submit" className="form-btn md:justify-self-center">
          Submit
        </button>
      </form>
    </div>
  );
}
