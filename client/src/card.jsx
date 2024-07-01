import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profilepic from "./assets/profile.png";
import dogfeedback from "./assets/DogFeedBack.png";

function Card() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_nckoscw", "template_jg6k6t6", formRef.current, {
        publicKey: "6PccufxRySu_qP384",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus("success");
          setShowSuccess(true);
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
          toast.error("Failed to send message. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <div className="card p-1 text-left w-full inline-block">
          <img
            className="card-image max-w-20 h-auto mb-4"
            src={profilepic}
            alt="profile picture"
          />
        </div>
        <div className="absolute top-0 right-0 m-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Dashboard
          </button>
        </div>
      </div>
      <div className="Greeting w-full">
        <p className="card-Greeting font-serif text-2xl text-center">
          Write Us!!!
        </p>
        <p className="card-Palleha font-serif text-xl text-center">
          Feedback helps us work better to give you and your pet the best
          service possible!
        </p>
      </div>
      <div className="main-submit w-full flex justify-center items-center relative">
        <div className="boxname">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="mt-8 text-center"
          >
            <div className="mb-5">
              <label htmlFor="user_name" className="block font-serif mb-1">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-60 p-3 font-serif text-sm border border-gray-600 rounded-full mx-auto"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="user_email" className="block font-serif mb-1">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-60 p-3 font-serif text-sm border border-gray-600 rounded-full mx-auto"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block font-serif mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-60 p-5 font-serif text-sm border border-gray-600 rounded-full mx-auto"
              />
            </div>
            <button
              type="submit"
              className="px-10 py-2 font-serif text-base bg-blue-500 text-white border border-blue-500 rounded-full cursor-pointer transition duration-300 hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        <img
          src={dogfeedback}
          className="absolute top-0 right-0 h-full w-auto"
          alt="dog feedback"
        />
      </div>
    </>
  );
}

export default Card;
