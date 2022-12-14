import { useEffect, useState } from "react";
import styled from "styled-components";


import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/useraction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/c.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export default function Login (props)  {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
 

  const redirect = 
  '/';
  const dispatch = useDispatch();
const userSignin = useSelector((state) => state.userSignin );
const {userInfo} = userSignin;


const handleClick = (e) => {
  e.preventDefault();
  dispatch(signin(email, password));
};
useEffect(() => {
  if (userInfo) {
    props.history.push(redirect);
  }
}, [props.history, redirect, userInfo]);
  return (
    <form  onSubmit={handleClick}>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" >
            LOGIN
          </Button>
          {  <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    </form>
  );
};

