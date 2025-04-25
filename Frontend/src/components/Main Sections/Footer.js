import React from 'react'

function Footer() {
  return (
    <footer className="more_information">
      <div className="information-links">
        <div className="documents_cafe">
          <a href="null">Copyright</a>
          <a href="null">Privacy Policy</a>
          <a href="null">FAQ</a>
        </div>
        <div className="creditscafe">
          <p>© GV Cafe 2024, Where Every Coffee Feels Like Home</p>
        </div>
      </div>
      <div className="cafe_logo_footer">
        <img src={require('../../Assets/cafelogo.png')} alt="GV CAFE" />
      </div>
      <div className="socmedia-links">
        <div className="socialmedia_text">
          <h1>Visit Us</h1>
          <a href="https://www.google.com/maps/place/GV+CAFE/@14.6190669,120.9666608,861m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3397b500696278fb:0x8265e4970f5fcedc!2sGV+CAFE!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403!3m5!1s0x3397b500696278fb:0x8265e4970f5fcedc!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            <lord-icon
              className="googleicon"
              src="https://cdn.lordicon.com/rbsqvtgo.json"
              trigger="morph"
              state="morph-circle"
              colors="primary:#ffffff,secondary:#3080e8"
              style={{ width: 20, height: 20 }}
            ></lord-icon>
          </a>
          <p>1901 franco st tondo manila, Manila, Philippines</p>
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/profile.php?id=61555611452098">
            <lord-icon
              src="https://cdn.lordicon.com/bfoumeno.json"
              trigger="morph"
              state="morph-circle"
              colors="primary:#ffffff,secondary:#3080e8"
              style={{ width: 30, height: 30 }}
            ></lord-icon>
          </a>
          <a href="https://www.tiktok.com/@gvcafe?fbclid=IwZXh0bgNhZW0CMTAAAR39Sgtpo06l86D_zxzkJpL_P0LFH6D0z5h_5AbWWFQhGPgAlQhuWUt5xwo_aem_5OmquRJTT0_YnvJbMhUysw">
            <lord-icon
              src="https://cdn.lordicon.com/zmvgugmh.json"
              trigger="morph"
              state="morph-circle"
              colors="primary:#ffffff,secondary:#000000"
              style={{ width: 30, height: 30 }}
            ></lord-icon>
          </a>
          <a href="null">
            <lord-icon
              src="https://cdn.lordicon.com/ewswvzmw.json"
              trigger="morph"
              state="morph-circle"
              colors="primary:#ffffff,secondary:#e8308c"
              style={{ width: 30, height: 30 }}
            ></lord-icon>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer