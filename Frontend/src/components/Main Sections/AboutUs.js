import React from 'react'

function AboutUs() {
  return (
    <section className="about_us_two" id="aboutus">
      <div className="story_of_cafe">
        <h1>Our Story</h1>
        <p>
          Welcome to GV Café, your new favorite spot for good vibes and great
          coffee! Established in February 2024, our café was created with a simple
          mission: to be a cozy haven for students and the community.
          <br />
          <br />
          The name GV stands for Good Vibes, and that’s exactly what we aim to
          bring to everyone who steps through our doors. Located conveniently near
          schools, we’re here to offer a relaxing space where you can unwind,
          study, or catch up with friends over a cup of coffee, refreshing drinks,
          and delicious snacks. <br />
          <br />
          At GV Café, it’s not just about the food and drinks it’s about creating
          an atmosphere where positivity thrives. Whether you’re here for a quick
          break between classes or a place to recharge, we’ve got you covered.
          <br />
          <br />
          Come visit us and experience the Good Vibes!
        </p>
      </div>
      <div className="cafeinside">
        <div className="cafehome">
          <h1>Where Every Sip Feels Like Home</h1>
          <p>
            At Cafe Haven, we blend our passion for coffee with a unique
            atmosphere
            <br />
            that invites relaxation and connection.
          </p>
        </div>
        <div className="cafehomeimg">
          <img src={require('../../Assets/cafebackground2.jpg')} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs