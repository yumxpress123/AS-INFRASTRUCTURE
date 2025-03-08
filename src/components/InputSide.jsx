import React from 'react';
import styled from 'styled-components';

const InputSideWrapper = styled.form`
  height: auto;
  padding-bottom: 100px;
  position: relative;
  padding: 10px 10px 100px 10px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  outline: 0px transparent !important;
`;

const SubmitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 12px 25px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InputSide = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the email body
    const mailtoLink = `mailto:ASInfrastructure@construction.com?subject=Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <InputSideWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <p>Name</p>
        <Input type="text" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input type="tel" required placeholder="+919425009445" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput required placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </InputWrapper>
      <SubmitButton type="submit" value="Send Message" />
    </InputSideWrapper>
  );
};

export default InputSide;
