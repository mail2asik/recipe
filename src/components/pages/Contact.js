import React from 'react';

import contactImg from '../../assets/images/contact.jpg';

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={contactImg} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-6">
          <p className="lead">
          We'd love to hear from you! Whether you have questions, suggestions, or simply want to share your culinary creations, feel free to get in touch with us. Our dedicated team is here to assist you and make your experience with our recipe website as delightful as possible. Reach out via email, phone, or our social media channels. Let's cook up some great conversations together! 📧📞🍴
          <br /><br />
          Email us: <a href="mailto:support@asik.work">support@asik.work</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
