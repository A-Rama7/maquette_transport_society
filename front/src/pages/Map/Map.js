import React from "react";
import './Map.css';

export default function Map() {
  return (
    <div>
      <iframe
      className="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816199.269772319!2d28.079586761290113!3d-26.238218832524307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9517cba6dd8fbf%3A0x510fb0f8056d38c3!2s99%20Skew%20Rd%2C%20Anderbolt%2C%20Boksburg%2C%201459%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661352391255!5m2!1sfr!2sfr"
        // height="650"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
