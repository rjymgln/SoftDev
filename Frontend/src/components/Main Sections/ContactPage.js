import React from 'react'

function ContactPage() {
  return (
    <section className="contact" id="Contact">
      <form action="WebsiteCafe" className="container" method="post">
        <div className="contact-page">
          <div className="left" />
          <div className="right">
            <h2 className="contact-name">Contact Us</h2>
            <input
              type="text"
              className="field"
              placeholder="Enter Name"
              id="Name"
              name="Name"
              required=""
            />
            <input
              type="email"
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
              defaultValue={""}
            />
            <button className="contact-btn">Send</button>
          </div>
        </div>
      </form>
    </section>

  )
}

export default ContactPage