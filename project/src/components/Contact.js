import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [savedMessages, setSavedMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessages = [...savedMessages, message];
    setSavedMessages(newMessages);
    localStorage.setItem("messages", JSON.stringify(newMessages));
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows="4"
          cols="40"
        ></textarea>
        <br />
        <button type="submit">Save Message</button>
      </form>

      <h3>Saved Messages:</h3>
      <ul>
        {savedMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
