import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
  height: 50vh;
  color: #fff;
`;

const Title = styled.h1`
  color: #fff;
`;

const Line = styled.hr`
  width: 50px;
  border: 1px solid #fff;
`

const Description = styled.p`
  width: 65%;
  font-size: 18px;
  text-align: center;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

const Phone = styled.div`
`;

const Email = styled.div`
`;

const Address = styled.div`
`;

const Touch = () => {
  return (
    <Footer>
      <Title>Let's Get In Touch!</Title>
      <Line />
      <Description>Ready to start your next project with me? That's great! Give me a call or send me an email and I will get back to you as soon as possible!</Description>
      <Contact>
        <Phone className="contact">
          <i className="fa fa-phone fa-3x"></i>
          <p>646-251-5609</p>
        </Phone>
        <Email className="contact">
          <i className="fa fa-envelope-o fa-3x"></i>
          <p>
            <a href="mailto:junjie.chen18@gmail.com">junjie.chen18@gmail.com</a>
          </p>
        </Email>
        <Address className="contact">
          <i className="fa fa-location-arrow fa-3x"></i>
          <p>5 Hanover Square<br />Floor 25<br />New York, NY 10004</p>
        </Address>
      </Contact>
    </Footer>
  );
}

export default Touch;