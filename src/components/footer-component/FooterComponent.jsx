import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaInstagram } from "react-icons/fa";

class SubscribeForm extends React.Component {
  handleSubscribe = () => {
    const emailInput = document.getElementById('email');
  
    // Ganti "your-email@example.com" dengan alamat email yang diinginkan
    const email = 'skinaesthindonesia@gmail.com';
  
    // Buka email client dengan alamat email yang sudah ditentukan
    window.location.href = `mailto:${email}?subject=Subscribe to SkinAesth Newsletter`;
  };  

  render() {
    return (
      <div className="footer_content_item mb-8 sm:mb-0">
        <h1 className="footer__title text-xl font-manrope font-semibold mb-4">Keep In Touch With SkinAesth</h1>
        <p className="footer__subtitle font-manrope mb-4">
          Join the SkinAesth newsletter and be the first to hear about news, offers, and skincare advice
        </p>
        <form className="flex flex-col gap-4">
          <div className="form__groups flex items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              className="px-6 py-4 border-b border-gray-400 bg-transparent w-full"
              placeholder="Email Address"
            />
            <button type="button" onClick={this.handleSubscribe} className="px-6 py-3 border border-gray-900 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="form__groups flex items-center gap-4">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-sm font-light">
              By submitting your email, you agree to receive advertising emails from SkinAesth. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.
            </label>
          </div>
        </form>
      </div>
    );
  }
}

const FooterComponent = () => (
  <section className="bg-[#FBE5E3] py-0">
  <div className="custom-container">
    <div className="footer__header flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12">
      <div className="footer__brand flex items-center lg:mb-0">
        <img src="https://i.ibb.co/4tnctDK/Logo-Skinaesth.png" alt="Footer Icon" className="w-16" />
        <p className="font-playfair text-xl lg:text-2xl font-semibold">SkinAesth</p>
      </div>
      <div className="footer__sosmed flex items-center gap-4">
        <a href="https://www.instagram.com/sociolla/" target="_blank" rel="noopener noreferrer" className="footer_sosmed_item border border-pink-500 rounded-md p-4">
          <FaInstagram />
        </a>
        <a href="https://discord.gg/RSEYtTQCxk" target="_blank" rel="noopener noreferrer" className="footer_sosmed_item border border-pink-500 rounded-md p-4">
          <FaDiscord />
        </a>
      </div>
    </div>

      <div className="footer__content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="footer_content_item mb-8 sm:mb-0">
          <h1 className="footer__title text-xl font-manrope font-semibold mb-4">How Can We Help?</h1>
          <div className="footer_contentitem_list flex flex-col gap-2">
            <Link to="/" className="footer_content_text font-manrope">Home</Link>
            <Link to="./about" className="footer_content_text font-manrope">About Us</Link>
            <Link to="./categories" className="footer_content_text font-manrope">Category</Link>
            <Link to="./blog" className="footer_content_text font-manrope">Blog</Link>
            <Link to="./subscribe" className="footer_content_text font-manrope">Subscribe</Link>
          </div>
        </div>

        <div className="footer_content_item mb-8 sm:mb-0">
          <h1 className="footer__title text-xl font-manrope font-semibold mb-4">Products</h1>
          <div className="footer_contentitem_list flex flex-col gap-2">
            <p className="footer_content_text font-manrope">Toner</p>
            <p className="footer_content_text font-manrope">Sunscreen</p>
            <p className="footer_content_text font-manrope">Serum</p>
            <p className="footer_content_text font-manrope">Moisturizer</p>
            <p className="footer_content_text font-manrope">Cleanser</p>
            <p className="footer_content_text font-manrope">Facial Wash</p>
          </div>
        </div>

        <SubscribeForm />
      </div>
    </div>

    <div className="footer__copyright bg-pink-300 mt-8">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <p className="text-sm font-light mb-4 lg:mb-0">© 2023 SkinAesth. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </section>
);

export default FooterComponent;