import React from 'react'
import MySwiper from './MySwiper'

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
      <MySwiper />
    </section>
  )
}

