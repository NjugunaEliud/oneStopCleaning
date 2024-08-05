
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="md:flex justify-between items-start">
          <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
            <div>
              <p>Nyeri, Kenya</p>
              <p>Pamki House</p>
            </div>
            <div>
              <p>+254713974256</p>
              <p>onestopcleaningltd@gmail.com</p>
            </div>
            <div>
              <p>8am-5pm</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Reach out to us Today</h3>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 space-y-4">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md" required></textarea>
              </div>
              <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-md transition duration-300 block mx-auto md:mx-0 items-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.36032123376!2d36.94197032942378!3d-0.4164497612493139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285cb7c5c5b51f%3A0x4e486de699e0c811!2sPamki%20House%2C%20Nyeri!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;