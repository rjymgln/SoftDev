import React, { useState } from 'react'

function ContactPage() {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact" id="Contact">
      <form action="WebsiteCafe" className="container" method="post" onSubmit={handleSubmit}>
        <div className="contact-page">
          <div className="left" />
          <div className="right">
            <h2 className="contact-name">Contact Us</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName (e.target.value)}
              className="field"
              placeholder="Enter Name"
              id="Name"
              name="Name"
              required=""
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail (e.target.value)}
              className="field"
              placeholder="Enter Email"
              id="Email"
              name="Email"
              required=""
            />
            <textarea
              type="text"
              className="field"
              placeholder="Message"
              id="Message"
              name="Message"
              required=""
              value={message}
              onChange={(e) => setMessage (e.target.value)}
            />
            <button className="contact-btn">Send</button>
          </div>
        </div>
      </form>
    </section>

  )
}

export default ContactPage