// BookingModal.js
import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookNowOverlay.css";

const BookNowOverlay = ({ onClose }) => {
  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default BookNowOverlay;
