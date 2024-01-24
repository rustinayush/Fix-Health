import React, { useState } from 'react';
import './FAQbanner.css';

const FAQbanner = () => {
  const physiotherapyAppFAQs = [
    {
      question: 'How does the physiotherapy app work?',
      answer: 'Our app provides personalized physiotherapy programs based on your specific needs. You will have access to guided exercises, progress tracking, and expert advice, all from the convenience of your device.'
    },
    {
      question: 'Is the information shared on the app secure?',
      answer: 'Yes, we prioritize the security and privacy of your health information. Our app complies with industry standards to ensure that your data remains confidential and protected.'
    },
    {
      question: 'Can I communicate with a physiotherapist through the app?',
      answer: 'Absolutely. Our app facilitates direct communication with qualified physiotherapists. You can ask questions, seek guidance, and receive personalized recommendations to enhance your rehabilitation journey.'
    },
    {
      question: 'How do I know if physiotherapy is right for me?',
      answer: 'Physiotherapy can benefit a wide range of individuals, from those recovering from injuries to those managing chronic conditions. If you have specific health concerns, consult with a healthcare professional to determine if physiotherapy is suitable for you.'
    },
    {
      question: 'What types of conditions can be addressed with the app?',
      answer: 'Our physiotherapy app is designed to address various conditions, including musculoskeletal injuries, joint pain, post-operative rehabilitation, and more. The personalized programs cater to different needs for an effective recovery.'
    },
    {
      question: 'Can I use the app without prior physiotherapy experience?',
      answer: 'Absolutely. The app is user-friendly and suitable for individuals with varying levels of physiotherapy experience. Whether you are new to physiotherapy or familiar with rehabilitation exercises, our app provides guidance for all.'
    },
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQ's</h2>
      <div className="accordion-container">
        {physiotherapyAppFAQs.map((faq, index) => (
          <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <h4>{faq.question}</h4>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQbanner;
