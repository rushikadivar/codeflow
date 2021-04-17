import { useState } from "react";
import styled from 'styled-components';
import './App.css';
import db from "./firebase";
import firebase from "firebase/app";

function App() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      // add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <Div className="App">
      <Container className="">
          <Form onSubmit={submitHandler}>
          <H2>Subscribe our newsletter</H2>
          <Input type="email" onChange={inputHandler}/>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>      
    </Div>
  );
}
const Div = styled.div`  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #414345, #232526);
  overflow: hidden;
`;
const Container = styled.div`
  position: relative;
`;
const Form = styled.form`
position: relative;
padding: 3rem;
min-width: 500px;
border-radius: 5px;
box-shadow: 0 0 30px #333;
background: rgba(255, 255, 255, 0.1); 
border: solid 1px rgba(255, 255, 255, 0.2);
backgroud-clip: padding-box; 
backdrop-filter: blur(10px);
z-index: 2;
`;

const H2= styled.h2`
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 10px;
  // margin-right: 10px;
  border-radius: 10px 0 0 10px;
  border: none;
  width: 80%;
  outline: none;
  color: #cf1d22;
`;

const Button = styled.button`
  background-image: linear-gradient(
  to right,
  #eb3349 0%,
  #f45c43 51%,
  #eb3349 100%
  );
  width: 20%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 0 10px 10px 0;
  border: none; 
  outline: none;
  cursor: pointer;
  &:hover {
  background-position: right center;
  }
`;

export default App;
