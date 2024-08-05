
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pt-10 overflow-x-hidden bg-gray-100">
      <div className="w-full mx-auto overflow-x-hidden ">
        <div className='flex flex-col items-center mb-14'>
        <h2 className="md:text-3xl text-xl font-bold">Contact Us</h2>
        <div  className='w-1/12  border-b-8 pb-4 border-green-500 '><></></div>
        </div>
        <div className="md:flex md:flex-row flex-col lg:px-20 md:px-5 px-1 justify-center items-center">
          <div className="md:w-1/2 w-full flex justify-center flex-col  space-y-4 mb-8 md:mb-0">
            <div className='text-center'>
              <p className='mb-1'>Nyeri, Kenya</p>
              <p>Pamki House</p>
            </div>
            <div  className='text-center'>
              <p className='mb-1'>+254713974256</p>
              <p className='text-green-500'>onestopcleaningltd@gmail.com</p>
            </div>
            <div  className='text-center'>
              <p>8am-5pm</p>
            </div>
            <div  className='text-center'>
              <h3 className="md:text-2xl text-md text-green-700 font-bold mb-2">Reach out to us Today</h3>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-8 space-y-4">
            <form className="space-y-4 shadow-sm p-6 bg-gray-300 bg-opacity-25">
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
              <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-8 rounded-md transition duration-300 block mx-auto md:mx-0 items-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-14 w-full ">
          <div className="relative w-full  pb-2" style={{height:'500px'}}>
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