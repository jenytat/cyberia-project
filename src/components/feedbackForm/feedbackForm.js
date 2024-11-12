import React, { useState, useEffect } from 'react';
import { submitFeedback } from '../../api/api';
import styled from '@emotion/styled';

import FormImage from './images/form-title-image.svg';

const FormMain = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    padding: 50px 0 32px 0;
    background: rgba(37, 38, 49, 1);
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 100%;
      width: 100vw;
      height: 100%;
      background: rgba(37, 38, 49, 1);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 100%;
      width: 100vw;
      height: 100%;
      background: rgba(37, 38, 49, 1);
    }
  }
`;

const Form = styled.div`
  h3 {
    margin: 0 0 89px;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #EFF3FF;
    max-width: 365px;
    @media (max-width: 991px) {
      font-size: 35px;
      line-height: 42px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 37px;
      padding-left: 104px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 76px;
        height: 70px;
        background: url(${FormImage}) no-repeat 50% 50% / contain;
      }
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    button {
      margin: 0 auto;
      padding: 20px 65px;
      border-radius: 85px;
      border: none;
      outline: none;
      cursor: pointer;
      background: #2D76F9;
      color: #fff;
      font-size: 18px;
      line-height: 22px;
      font-family: "Fira Sans Condensed", sans-serif;
      transition: all .3s ease;
      &:hover {
        background: #9AA8BA;
      }
      @media (max-width: 768px) {
        padding: 15px 65px;
        text-aling: center;
        font-size: 13px;
        line-height: 18px;
        width: 100%;
      }
    }
  }
`;

const Label = styled.div`
  width: calc(33.33% - 20px);
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 22px;
  }
  label {
    padding: 0 14px;
    background: #31313F;
    color: #EFF3FF;
    position: absolute;
    left: 24px;
    top: -11px;
    font-size: 18px;
    line-height: 22px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  input[type="text"] {
    width: 100%;
    outline: none;
    box-sizing: border-box;
    border: 2px solid #9AA8BA;
    border-radius: 8px;
    background: transparent;
    padding: 21px 24px;
    color: #EEF3FF;
    font-family: "Fira Sans Condensed", sans-serif;
    transition: all .3s ease;
    &::placeholder {
      color: rgb(238, 243, 255);
      font-size: 13px;
      line-height: 18px;
    }
    &:focus {
      border-color: #fff;
    }
    @media (max-width: 768px) {
      padding: 16px 13px;
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

const TextArea = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  label {
    padding: 0 14px;
    background: #31313F;
    color: #EFF3FF;
    position: absolute;
    left: 24px;
    top: -11px;
    font-size: 18px;
    line-height: 22px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  textarea {
    width: 100%;
    background: transparent;
    padding: 21px 24px;
    color: #EEF3FF;
    font-family: "Fira Sans Condensed", sans-serif;
    outline: none;
    box-sizing: border-box;
    border: 2px solid #9AA8BA;
    border-radius: 8px;
    min-height: 139px;
    transition: all .3s ease;
    &::placeholder {
      color: rgb(238, 243, 255);
      font-size: 13px;
      line-height: 18px;
    }
    &:focus {
      border-color: #fff;
    }
    @media (max-width: 768px) {
      padding: 8px 13px;
    }
  }
`;

const Checkbox = styled.label`
  font-weight: 300;
  color: #EFF3FF;
  width: 100%;
  display: inline-block;
  margin-bottom: 67px;
  @media (max-width: 768px) {
    margin-bottom: 26px;
  }
  input[type=checkbox] {
    display: none;
    &:checked + span.checkbox-text::after {
      content: "✓";
      color: green;
      font-size: 30px;
      font-weight: 900;
      position: absolute;
      color: #EFF3FF;
      left: 2px;
      top: -2px;
      opacity: 1;
    }
  }
  span {
    display: inline-block;
    width: 100%;
  }
  span.checkbox-text {
    position: relative;
    padding-left: 37px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      border: 2px solid #EFF3FF;
      border-radius: 2px;
    }
    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [placeholders, setPlaceholders] = useState({ name: '', phone: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', message: '' });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+7\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: name ? '' : 'Поле обязательно для заполнения',
      phone: validatePhone(phone) ? '' : 'Введите корректный номер телефона',
      email: validateEmail(email) ? '' : 'Введите корректный email',
      message: message ? '' : 'Поле обязательно для заполнения',
      consent: consent ? '' : 'Необходимо согласие на обработку персональных данных',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) return;

    try {
      const response = await submitFeedback({ name, phone, email, message });
      setResponseMessage('Форма успешно отправлена! С Вами свяжутся в ближайшее время.');
      setFormSubmitted(true);
      setErrors({});
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const backendErrors = error.response.data.errors || {};
        setErrors({
          name: backendErrors.name || '',
          phone: backendErrors.phone || '',
          email: backendErrors.email || '',
          message: backendErrors.message || '',
          consent: ''
        });
      } else {
        setResponseMessage('Произошла ошибка при отправке формы. Попробуйте снова.');
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setPlaceholders({
          name: 'Ваше имя*',
          phone: 'Телефон*',
          email: 'Email*',
          message: 'Сообщение*',
        });
      } else {
        setPlaceholders({ name: '', phone: '', email: '', message: '' });
      }
    };

    handleResize(); // Устанавливаем placeholder при монтировании
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FormMain>
      {
        formSubmitted ? (
          <p>{responseMessage}</p> 
        ) : (
          <Form>
            <h3>Расскажите о вашем проекте:</h3>
            <form onSubmit={handleSubmit}>
              <Label>
                <label>Ваше имя*</label>
                <input 
                  type="text" 
                  placeholder={placeholders.name}
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  style={{ borderColor: errors.name ? 'red' : 'initial' }} 
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
              </Label>
              <Label>
                <label>Email*</label>
                <input 
                  type="text" 
                  placeholder={placeholders.email}
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{ borderColor: errors.email ? 'red' : 'initial' }} 
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </Label>
              <Label>
                <label>Телефон*</label>
                <input 
                  type="text" 
                  value={phone} 
                  placeholder={placeholders.phone}
                  onChange={(e) => setPhone(e.target.value)} 
                  style={{ borderColor: errors.phone ? 'red' : 'initial' }} 
                />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
              </Label>
              <TextArea>
                <label>Сообщение*</label>
                <textarea 
                  value={message} 
                  placeholder={placeholders.message}
                  onChange={(e) => setMessage(e.target.value)} 
                  style={{ borderColor: errors.message ? 'red' : 'initial' }} 
                />
                {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
              </TextArea>
              <Checkbox>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={() => setConsent(!consent)}
                  />
                  <span className='checkbox-text'>Согласие на обработку персональных данных</span>
                  {errors.consent && <span style={{ color: 'red' }}>{errors.consent}</span>}
              </Checkbox>
              <button type="submit">Обсудить проект</button>
              {responseMessage && <p>{responseMessage}</p>}
            </form>
          </Form>
        )
      }
    </FormMain>
  );
};

export default FeedbackForm;