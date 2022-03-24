import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";


const Button = styled.button`
  background-color: #FAD34F;
  color: white;
  border: none;
  border-radius: 500px;
  width: 218px;
  height: 73px;
`;

const Form = styled.form`
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Rowdies', cursive;
  font-family: 'Rubik', sans-serif;
  margin-left: 219px;
  margin-top: 179px;
    width: 557px;
    display: flex;
  flex-direction: column;

`;


const SimpleInp = styled.input`
    border-radius: 10px;
  border: 1px solid #DCDCDC;
   height: 93px;
  margin-bottom: 8px;
  padding-left: 46px;
  font-size: 18px;
  

`;

const BigInp = styled.input`
  border-radius: 10px;
  border: 1px solid #DCDCDC;
    height: 189px;
  margin-bottom: 23px;
  padding-left: 46px;
  font-size: 18px;

`;









const FormInp = () => {



    const name = React.createRef()
    const email = React.createRef()
    const message = React.createRef()







    const [inpName, setInputName] = useState('');
    const [inpEmail, setInputEmail] = useState('');
    const [inpMessage, setInputMessage] = useState('');

    const body = {

        name: inpName,
        email: inpEmail,
        message: inpMessage


    }

    const handleChange = () => {
        setInputName(name.current.value)
        setInputEmail(email.current.value)
        setInputMessage(message.current.value)


    }

    const handleSubmit = (e) => {
        e.preventDefault()


        sendRequest()
}


function sendRequest(){
        return fetch('http://localhost:3001/sms',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })

}





    return (

            <Form onSubmit={handleSubmit}>
                <h1>Reach out to us!</h1>
                <SimpleInp  onChange={handleChange} ref={name} type="text" placeholder="Your name*"/>
                <SimpleInp onChange={handleChange} ref={email} className="simp" type="text" placeholder="Your e-mail*"/>
                <BigInp onChange={handleChange} ref={message} type="text" placeholder="Your message*"/>
                <Button >Send message</Button>
            </Form>

    );
};

export default FormInp;
