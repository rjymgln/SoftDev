import React, { useState } from 'react'

function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/softdev/contactpage.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          Email: email,
          Message: message,
        }),
      });

      const result = await response.text();
      setResponseMsg(result); // show PHP response message
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setResponseMsg('❌ Submission failed. Please try again.');
    }

    // Clear form fields
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact" id="Contact">
      <form className="container" onSubmit={handleSubmit}>
        <div className="contact-page">
          <div className="left" />
          <div className="right">
            <h2 className="contact-name">Contact Us</h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field"
              placeholder="Enter Email"
              id="Email"
              name="Email"
              required
            />

            <textarea
              className="field"
              placeholder="Message"
              id="Message"
              name="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="contact-btn" type="submit">Send</button>
            {responseMsg && <p className="response">{responseMsg}</p>}
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactPage