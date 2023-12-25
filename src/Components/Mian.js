import React, { useState } from "react";
import "../App.css";

export default function Main() {
  const initialFormData = {
    name: "",
    lastName:"",
    email: "",
    phone: "",
    serviceRating: "",
    beverageQuality: "",
    cleanlinessRating: [],
    overallExperienceRating: [],
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  //-----------------------------------------------------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
          ? value
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  //--------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name ||!formData.lastName ||!formData.email || !formData.phone) {
      alert("All fields are mandatory");
      return;
    }

    if (!formData.serviceRating) {
      alert("Please select a service rating");
      return;
    }

    if (!formData.beverageQuality) {
      alert("Please select a beverage rating");
      return;
    }

    if (!formData.cleanlinessRating || formData.cleanlinessRating.length === 0) {
      alert("Please select cleanliness ratings");
      return;
    }
  
    if (!formData.overallExperienceRating || formData.overallExperienceRating.length === 0) {
      alert("Please select overall experience ratings");
      return;
    }

    if (!formData.comments) {
      alert("Please Enter the comments");
      return;
    }

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(formData);
    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Thank you for completing the information");

   

    setFormData(initialFormData);
  };
  //----------------------------------------------------------------------------
  return (
    <>
      <form className="animation" id="survey-form" onSubmit={handleSubmit}>
        <div className="box">
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            className="input-elm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Full Name"
          />
        </div>

        

        <div>
          <label htmlFor="Last name">Last Name:</label>
          <br />
          <input
            className="input-elm"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Your last Name"
          />
        </div>

        </div>

        <div className="box">
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="input-elm"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email ID"
          />
        </div>

        <div>
          <label htmlFor="number" id="number-label">
            Mobile no:
          </label>
          <br />
          <input
            className="input-elm"
            type="number"
            name="phone"
            id="number"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}  
            minLength={10} 
            pattern="[0-9]*"  
            required placeholder="(000) 000 0000"
          />
        </div>
        </div>


        <div className="box">
          <div>
            <div>
              Please rate the quality of the service you received from your
              host.
            </div>
            <ul>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="serviceRating"
                  value="Excellent"
                  checked={formData.serviceRating === "Excellent"}
                  onChange={handleChange}
                  id="radio-1"
                />
                <label htmlFor="radio-1">Excellent</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="serviceRating"
                  value="Good"
                  checked={formData.serviceRating === "Good"}
                  onChange={handleChange}
                  id="radio-2"
                />
                <label htmlFor="radio-2">Good</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="serviceRating"
                  value="Fair"
                  checked={formData.serviceRating === "Fair"}
                  onChange={handleChange}
                  id="radio-3"
                />
                <label htmlFor="radio-3">Fair</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="serviceRating"
                  value="Bad"
                  checked={formData.serviceRating === "Bad"}
                  onChange={handleChange}
                  id="radio-4"
                />
                <label htmlFor="radio-4">Bad</label>
              </li>
            </ul>
          </div>

          <div>
            <div>Please rate the quality of your beverage.</div>
            <ul>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="beverageQuality"
                  value="Excellent"
                  checked={formData.beverageQuality === "Excellent"}
                  onChange={handleChange}
                  id="beverage-excellent"
                />
                <label htmlFor="beverage-excellent">Excellent</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="beverageQuality"
                  value="Good"
                  checked={formData.beverageQuality === "Good"}
                  onChange={handleChange}
                  id="beverage-good"
                />
                <label htmlFor="beverage-good">Good</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="beverageQuality"
                  value="Fair"
                  checked={formData.beverageQuality === "Fair"}
                  onChange={handleChange}
                  id="beverage-fair"
                />
                <label htmlFor="beverage-fair">Fair</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="beverageQuality"
                  value="Bad"
                  checked={formData.beverageQuality === "Bad"}
                  onChange={handleChange}
                  id="beverage-bad"
                />
                <label htmlFor="beverage-bad">Bad</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div>
            <div>Was our restaurant clean?</div>
            <ul>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="cleanlinessRating"
                  value="Excellent"
                  checked={formData.cleanlinessRating === "Excellent"}
                  onChange={handleChange}
                  id="radio-1"
                />
                <label htmlFor="radio-1">Excellent</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="cleanlinessRating"
                  value="Good"
                  checked={formData.cleanlinessRating === "Good"}
                  onChange={handleChange}
                  id="radio-2"
                />
                <label htmlFor="radio-2">Good</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="cleanlinessRating"
                  value="Fair"
                  checked={formData.cleanlinessRating === "Fair"}
                  onChange={handleChange}
                  id="radio-3"
                />
                <label htmlFor="radio-3">Fair</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="cleanlinessRating"
                  value="Bad"
                  checked={formData.cleanlinessRating === "Bad"}
                  onChange={handleChange}
                  id="radio-4"
                />
                <label htmlFor="radio-4">Bad</label>
              </li>
            </ul>
          </div>

          <div>
            <div>Please rate your overall dining experience.</div>
            <ul>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="overallExperienceRating"
                  value="Excellent"
                  checked={formData.overallExperienceRating === "Excellent"}
                  onChange={handleChange}
                  id="experience-radio-1"
                />
                <label htmlFor="experience-radio-1">Excellent</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="overallExperienceRating"
                  value="Good"
                  checked={formData.overallExperienceRating === "Good"}
                  onChange={handleChange}
                  id="experience-radio-2"
                />
                <label htmlFor="experience-radio-2">Good</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="overallExperienceRating"
                  value="Fair"
                  checked={formData.overallExperienceRating === "Fair"}
                  onChange={handleChange}
                  id="experience-radio-3"
                />
                <label htmlFor="experience-radio-3">Fair</label>
              </li>
              <li className="list-items">
                <input
                  className="input-elm input-radio"
                  type="radio"
                  name="overallExperienceRating"
                  value="Bad"
                  checked={formData.overallExperienceRating === "Bad"}
                  onChange={handleChange}
                  id="experience-radio-4"
                />
                <label htmlFor="experience-radio-4">Bad</label>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <label htmlFor="comments">Comments:</label>
          <br />
          <textarea
            className="input-elm textarea-elm"
            name="comments"
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter your comments..."
            rows="4"
          />
        </div>

        <button className="button-elm" type="submit">
          Submit Form
        </button>
      </form>
    </>
  );
}
