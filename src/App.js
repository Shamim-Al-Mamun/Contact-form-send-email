import React, { useState } from "react";
import emailjs from "emailjs-com";

function App() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_dseum91",
        "template_fig75ic",
        e.target,
        "3Lz0qE7tu2R6ZvtgI"
      )
      .then((res) => {
        setSubmit(true);
        setError("");
        res && setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError("Something went wrong");
        setSubmit(false);
        err && setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <main>
        <section>
          {submit && <p>The form has been submitted successfully</p>}
          <form onSubmit={sendMail}>
            {error && <p>{error}</p>}
            <h1>Contact Form</h1>
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Phone</label>
            <input type="number" name="phone" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea name="message" required />
            <button>
              {loading && (
                <i
                  className="fa fa-circle-o-notch fa-spin"
                  style={{ marginRight: "5px" }}
                />
              )}
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
