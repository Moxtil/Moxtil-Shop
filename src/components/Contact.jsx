import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <img
          src="https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?semt=ais_hybrid"
          alt="Contact"
        />
        <form action="#">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: 200 }}
            defaultValue={""}
            required
          />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </>
  );
}
