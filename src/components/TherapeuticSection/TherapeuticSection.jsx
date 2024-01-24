
import React from 'react';
import './TherapeuticSection.css';

const TherapeuticSection = () => {
  return (
    <div className="physio-treatment-section">
      <p style={{ color: "white", marginTop: "30px", fontSize: "40px" }}>Our Process</p>
      <p style={{ color: "white", marginTop: "10px", marginBottom: "60px", fontSize: "20px" }}>Backed by study in International Journal of Physiotherapy and Research</p>
      <h2>Physiotherapy Treatment</h2>
      <div className="methods-container">
        <div className="method">
          <img
            src="https://progressivemedicalfitness.com/wp-content/uploads/2021/08/Therapeutic-Exercise.jpg"
            alt="Therapeutic Exercises"
          />
          <h3 style={{ color: "white" }}>Therapeutic Exercises</h3>
          <p>
            Our physiotherapists design personalized exercise programs to
            improve strength, flexibility, and range of motion, tailored to your
            specific condition.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
        <div className="method">
          <img src="https://images.ctfassets.net/222znibi5gto/ppm_wysiwyg_fid8303_asset/9272584444f615df24d10b74cdab7853/17825208_XL.jpg" />
          <h3>Manual Therapy</h3>
          <p>
            Hands-on techniques, such as massage and joint mobilization, are
            employed to alleviate pain, reduce muscle tension, and enhance
            physical function.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
        <div className="method">
          <img src="https://www.abbey-physiotherapy.co.uk/images/stories/flexicontent/item_389_field_15/l_tens-machine.jpg" alt="Electrotherapy" />
          <h3>Electrotherapy</h3>
          <p>
            Utilizing electrical stimulation and modalities to manage pain,
            reduce inflammation, and promote tissue healing in a non-invasive
            manner.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default TherapeuticSection;
