import React, { useState, useEffect } from "react";
import "./AppointmentForm.css";
import { doctorsData, city_data } from "../../APIdata/Api"
import { useLocation } from "react-router-dom";


const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
    selectedDoctor: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {

    setTimeout(() => {
      setDoctors(doctorsData);
    }, 1000);


    const urlParams = new URLSearchParams(location.search);
    const cityParam = urlParams.get("city");

    if (cityParam) {

      setFormData((prevData) => ({ ...prevData, city: cityParam }));
    }
  }, [formData.city, location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && !validatePhoneNumber(formData.phoneNumber)) {
      alert("Invalid phone number. Please enter a valid phone number.");
      return;
    }

    if (step === 5 && formData.selectedDoctor === "") {
      alert("Please select a doctor before proceeding.");
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (step === 5 && formData.selectedDoctor === "") {
      alert("Please select a doctor before submitting.");
      return;
    }


    setTimeout(() => {
      setFormSubmitted(true);


      setTimeout(() => {
        setFormSubmitted(false);
        setStep(1);
        setFormData({
          name: "",
          phoneNumber: "",
          age: "",
          city: "",
          company: "",
          chiefComplaints: "",
          previousExperience: "",
          selectedDoctor: "",
        });
      }, 2000);
    }, 1000);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              maxLength={10}
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <br />
            <label>City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              {city_data.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </select>
            <br />
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label>Chief Complaints:</label>
            <textarea
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        );
      case 4:

        if (parseInt(formData.age) < 40) {
          setStep(5);
          return null;
        }
        return (
          <div>
            <label>Any Previous Experience with Physiotherapy:</label>
            <label>
              <input
                type="radio"
                name="previousExperience"
                value="Yes"
                onChange={handleInputChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="previousExperience"
                value="No"
                onChange={handleInputChange}
                required
              />
              No
            </label>
          </div>
        );
      case 5:
        const filteredDoctors = doctors.filter((doctor) => doctor.city === formData.city);

        return (
          <div>
            <p>
              {filteredDoctors.length > 0
                ? `Show best available doctors filtered for ${formData.city}`
                : `No doctors available for ${formData.city}`}
            </p>
            {filteredDoctors.length > 0 ? (
              <div>
                <p>Select a doctor:</p>
                {filteredDoctors.map((doctor, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="selectedDoctor"
                      value={doctor.name}
                      onChange={handleInputChange}
                      checked={formData.selectedDoctor === doctor.name}
                    />
                    {doctor.name}
                  </label>
                ))}
              </div>

            ) : (
              <p></p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const getButtonText = () => {
    switch (step) {
      case 1:
        return 'Start Recovery';
      case 5:
        return 'Submit';
      default:
        return 'Continue';
    }
  };

  return (
    <div className="appointment-form">
      <h3 style={{ marginBottom: "10px", color: "rgb(92, 156, 184)" }}>Schedule your Inaugural Appointment at No Cost</h3>
      <h4 style={{ marginBottom: "20px", color: "grey" }}>Let us get to know you better!</h4>
      {formSubmitted ? (
        <div>
          <p>Your appointment has been booked successfully!</p>

        </div>
      ) : (
        <>
          {renderStep()}
          <br />
          {step > 1 && <button onClick={handlePrevStep}>Previous</button>}
          {step < 5 ? (
            <button onClick={handleNextStep}>{getButtonText()}</button>
          ) : (
            <button onClick={handleSubmit}>{getButtonText()}</button>
          )}
        </>
      )}
    </div>
  );
};

export default AppointmentForm;
