import React from 'react'

export default function Homepage() {
  return (
    <section className="homepage" id="HomePage">
      <div className="welcoming_user">
        <h1>Welcome to GV Cafe</h1>
        <p>
          Discover the origins of our cozy café, where the passion for coffee and
          community blend seamlessly.
        </p>
        <a href="#ProductSelection">
          <div className="view_product">
            <button type="button">Explore Our Drinks</button>
          </div>
        </a>
      </div>
      <div className="swiper mySwiper">
        <div className="bestproduct_title">
          <h1>Check Our Best Selling Coffee</h1>
        </div>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require('../../Assets/frappe1.png')} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={require('../../Assets/coffee1.png')} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={require('../../Assets/frappe2.png')} alt="" />
          </div>
        </div>
        <div className="autoplay-progress"></div>
      </div>
    </section>
  )
}

