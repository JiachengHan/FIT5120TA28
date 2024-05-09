import React from "react";

const faqData = [
  {
    id: "One",
    question: "Exercise for Preventing Falls",
    answer: {
      "1. Broad Benefits": [
        "Exercise helps reduce fall rates in older people, effective across varying risk profiles.",
      ],
      "2. Greater Impact for Higher-Risk Groups": [
        "More significant reduction in falls among those at higher risk.",
      ],
      "3. Effective Exercise Types:": [
        "a.	Balance and Functional Exercises: Best for preventing falls (e.g., Tai Chi).",
        "b.	Resistance Training: Strengthens muscles, reducing fall severity.",
        "c.	Combined Exercises: Balance, functional, and resistance exercises reduce falls by up to 34%.",
      ],
    },
  },
  {
    id: "Two",
    question: "Home Safety Improvements",
    answer: {
      "1.	Lighting": [
        "Install bright and motion-sensitive lights near bathrooms and stairs.",
      ],
      "2.	Floor Safety": [
        "Secure rugs with adhesive strips, use non-slip treatments on slippery floors.",
      ],
      "3.	Clutter": ["Keep floors clear and unobstructed."],
      "4.	Furniture Safety": ["Ensure furniture is sturdy and accessible."],
    },
  },
  {
    id: "Three",
    question: "Health and Wellness",
    answer: {
      "1.	Routine Health Checks": ["Stay current with medical appointments."],
      "2.	Diet and Exercise": [
        "Maintain a healthy diet and engage in exercises like Tai Chi.",
      ],
      "3.	Footwear": ["Wear well-fitting shoes with non-slip soles."],
    },
  },
  {
    id: "Four",
    question: "Additional Precautions",
    answer: {
      "1.	Appropriate Clothing": [
        "Avoid long clothes that might cause tripping.",
      ],
      "2.	Professional Advice": [
        "Consult with an occupational therapist for personalized home safety strategies.",
      ],
    },
  },
];

const Faq3 = () => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={`heading${faq.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded="false"
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${faq.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${faq.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              {Object.entries(faq.answer).map(([key, values]) => (
                <div key={key}>
                  <strong>{key}</strong>
                  <ul>
                    {values.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq3;
