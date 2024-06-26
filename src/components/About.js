import React from 'react';

export default function About() {
  return (
    <div className="container my-3">
      <h2>About TextHelp</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              What is TextHelp?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <strong>TextHelp</strong> is a text analysis tool designed to help users manipulate and analyze their text efficiently. It offers features like converting text to uppercase or lowercase, removing extra spaces, and copying text to the clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              How to Use TextHelp?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              <strong>Using TextHelp is simple.</strong> Enter your text in the provided textarea, and use the buttons to perform various actions like converting text to uppercase, lowercase, clearing the text, removing extra spaces, or copying the text to your clipboard. The current character and word count is displayed below the textarea.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Why Choose TextHelp?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              <strong>TextHelp</strong> is a user-friendly and efficient tool designed to streamline text analysis and manipulation tasks. Whether you're editing documents, writing emails, or just need to clean up some text, TextHelp provides the essential features you need in a straightforward interface.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
