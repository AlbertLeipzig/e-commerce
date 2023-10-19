import { useEffect, useState } from 'react';
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function validateName(name) {
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/;
    if (name.length > 50) {
      return false;
    }
    return nameRegex.test(name).trim();
  }

  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email.length > 50) {
      return false;
    }
    return emailRegex.test(email).trim();
  }

  function validateSubject(subject) {
    if (subject.length > 100) {
      return false;
    }
    return subject.trim();
  }

  function validateMessage(message) {
    if (message.length > 1000) {
      return false;
    }
  }

  function validateForm() {
    const { name, email, subject, message } = formData;
    if (
      validateName(name) &&
      validateEmail(email) &&
      validateSubject(subject) &&
      validateMessage(message)
    ) {
      return formData;
    } else {
      return false;
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    const validatedData = validateForm();
    validatedData ? console.log(validatedData) : console.log('error');
  };

  /*   const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [formData.name]: e.target.value,
    });
    console.log(formData);
  }; */

  // Name

  return (
    <div className="contact-page">
      <h1>Contact Page</h1>
      <form action="" onSubmit={(e) => submitForm(e)}>
        <label htmlFor="">
          Name
          <input
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          Subject
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </label>
        <label
          htmlFor=""
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        >
          Message
          <textarea />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
