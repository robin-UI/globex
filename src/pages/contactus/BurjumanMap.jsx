import React from 'react';

function BurjumanMap() {
  return (
    <div>
      {/* <h2>Burjuman Business Tower Location</h2> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.933073052533!2d55.3001969!3d25.2516318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43000ab4b8ed%3A0xb841c92a2428953c!2sBurjuman%20Business%20Tower!5e0!3m2!1sen!2sae!4v1698765432107!5m2!1sen!2sae"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default BurjumanMap;