import React, { useState } from 'react';

const SubsidyForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    subsidyAmount: '',
    reason: '',
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.subsidyAmount) {
      errors.subsidyAmount = 'Subsidy amount is required';
    } else if (isNaN(formData.subsidyAmount) || formData.subsidyAmount <= 0) {
      errors.subsidyAmount = 'Please enter a valid subsidy amount';
    }
    if (!formData.reason) errors.reason = 'Reason is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formData);
      // Call your backend API here, e.g., axios.post('/api/subsidy', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2>Grant Subsidy Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Beneficiary Name:</label>
          <input className='input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
        </div>

        <div>
          <label>Subsidy Amount:</label>
          <input
            type="number"
            name="subsidyAmount"
            value={formData.subsidyAmount}
            onChange={handleChange}
          />
          {formErrors.subsidyAmount && <p style={{ color: 'red' }}>{formErrors.subsidyAmount}</p>}
        </div>

        <div>
          <label>Reason for Subsidy:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />
          {formErrors.reason && <p style={{ color: 'red' }}>{formErrors.reason}</p>}
        </div>

        <button type="submit">Grant Subsidy</button>
      </form>
    </div>
  );
};

export default SubsidyForm;
