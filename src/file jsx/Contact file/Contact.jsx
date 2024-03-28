import Popup from "./popupcontact";
function Contact() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 headercontact">
        <header>
          <div className="shopnamecontact">Food Shop</div>
          <div>
            Address: 590 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City
          </div>
          <div>Hotline: +84 123 45 67 89</div>
          <div className="footercontact">
            <Popup />
          </div>
        </header>
      </div>
      <div className="col-md-6">
        <section>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.32524763064!2d106.66372207569508!3d10.786382259008672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710335435900!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
              title="binh da di qua day"
            ></iframe>
          </div>
        
        </section>
      </div>
    </div>
  </div>
  );
}

export default Contact;
