import React from 'react'

function ProductSelection() {
  return (
    <section className="product_selection1" id="ProductSelection">
      <div className="main_product">
        <div className="products product_selection">
          <div className="product_name">Frappe</div>
          <a href="WebsiteFrappe.html" id="openProduct">
            <img src={require('../../Assets/frappeCover.jpg')} alt="cookie" />
          </a>
        </div>
        <div className="products product_selection">
          <div className="product_name">Coffee</div>
          <a href="null" id="openProduct">
            <img src={require('../../Assets/coffeecover.jpg')} alt="pandan" />
          </a>
        </div>
        <div className="products product_selection">
          <div className="product_name">Milk Tea</div>
          <a href="null" id="openProduct">
            <img src={require('../../Assets/milkteacover.jpg')} alt="yellow" />
          </a>
        </div>
        <div className="products product_selection">
          <div className="product_name">Fruit Tea</div>
          <a href="null" id="openProduct">
            <img src={require('../../Assets/sodacover.jpg')} alt="yellow" />
          </a>
        </div>
      </div>
      <button className="open-button" onclick="openMenu()">
        View our menu
      </button>
      <div className="form-popup" id="openForm">
        <form action="#" className="form-container">
          <div className="menu">
            <h1 className="menu-board">Menu</h1>
            <div className="menu-row">
              <div className="menu-section">
                <h2 className="menu-name">coffee</h2>
                <ul>
                  <li>Carame Macchiato</li>
                  <li>Americano</li>
                  <li>Spanish Latte</li>
                  <li>Vanilla Latte</li>
                  <li>Latte</li>
                  <li>French Vanilla</li>
                  <li>Caffe Mocha</li>
                </ul>
              </div>
              <div className="menu-section">
                <h2 className="menu-name">frappe</h2>
                <ul>
                  <li>Chocolate</li>
                  <li>Dark Mocha</li>
                  <li>Matcha</li>
                  <li>Salted Caramel</li>
                  <li>Strawberry &amp; Cream</li>
                  <li>Cookies &amp; Cream</li>
                </ul>
              </div>
            </div>
            <div className="menu-row">
              <div className="menu-section">
                <h2 className="menu-name">Milktea</h2>
                <ul>
                  <li>Okinawa</li>
                  <li>Winter Melon</li>
                  <li>Hokaido</li>
                  <li>Dark Choco</li>
                  <li>Salted Caramel</li>
                  <li>Cookies &amp; Cream</li>
                </ul>
              </div>
              <div />
              <div className="menu-section">
                <h2 className="menu-name">Fruit Soda</h2>
                <ul>
                  <li>Green Apple</li>
                  <li>Lychee</li>
                  <li>Strawberry</li>
                  <li>Blue Lemonade</li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn cancel" onclick="closeForm()">
              x
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ProductSelection