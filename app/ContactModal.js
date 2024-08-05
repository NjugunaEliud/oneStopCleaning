// components/ContactModal.js
import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          backgroundColor: 'white',
          borderRadius: '0',
          maxWidth: '100%',
          width: '100%',
          height: '100%',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          padding: '1.5rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <button 
        onClick={onRequestClose} 
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        <CloseIcon />
      </button>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4 w-full max-w-md">
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
        <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Send Message
        </button>
      </form>
    </Modal>
  );
};

export default ContactModal;