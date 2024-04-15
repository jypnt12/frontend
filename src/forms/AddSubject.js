import React, { useState } from 'react'
import TimePicker from '../components/TimePicker';

const AddSubject = () => {

    const [formData, setFormData] = useState({
        subject_code: '',
        subject_name: '',
        subject_description: '',
        
      });
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const validationErrors = validateFormData(formData);
        setErrors(validationErrors);
        // If there are no errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            submitForm(formData);
        }
    };

    
  const validateFormData = (data) => {
    const errors = {};
    if (!data.class_code.trim()) {
      errors.class_code = 'Username is required';
    }
    if (!data.year.trim()) {
      errors.year = 'Email is required';
    } 
    
    return errors;
  };



  const submitForm = (formData) => {
    // Submit the form data to the server or perform further actions
    // console.log('Form submitted:', formData);
  };

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const sections = ['A', 'B', 'C', 'D'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div  className='form-wrapper' onSubmit={handleSubmit}>

        <h2>Add Class</h2>

      

        <form action="POST">
            <div>
                <label htmlFor="class_code">Class code </label>
                <input type="text" id='class_code' placeholder='Class code' value={formData.class_code} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="year">Year</label>
                <select id="year" name="year"  onChange={handleChange} >
                <option value="">Select year</option>
                {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
                </select>
            </div>

            <div>
                <label htmlFor="section">Section</label>
                <select id="section"  onChange={handleChange} >
                <option value="">Select section</option>
                {sections.map((section, index) => ( 
                    <option key={index} value={section}>{section}</option>
                ))}
                </select>
            </div>

            <div>
              <label htmlFor="subject_name">Subject </label>
              <input type="text" name='subject_name' placeholder='Subject' value={formData.subject_name}  onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input type="text" name='description' placeholder='Description' value={formData.description}  onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="instructor">Instructor</label>
              <input type="text" name='instructor' placeholder='Instructor' value={formData.instructor}  onChange={handleChange}/>
            </div>

            
            <div>
                <label htmlFor="day">Day</label>
                <select id="day"  onChange={handleChange} >
                <option value="">Select day</option>
                {days.map((day, index) => ( 
                    <option key={index} value={day}>{day}</option>
                ))}
                </select>
            </div>

            <div>
              <label htmlFor="status">Status</label>
              <input type="text" name='status' placeholder='Status' value={formData.status}  onChange={handleChange}/>
            </div>

        
            
            <button className='primary-button'>Submit</button>

            {/* {errors && <div className='error'>{errors}</div>} */}
        </form>
    </div>
  )
}

export default AddSubject