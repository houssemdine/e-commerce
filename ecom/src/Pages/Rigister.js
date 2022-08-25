import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { register } from '../actions/useraction';
const Container=styled.div`
width:100vw;
height:80vh;
background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url("/images/ca.jpg") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:white;
`;
const Title=styled.h1`
font-size:24px;
font-weight:300;

`;
const Form=styled.form`
display:flex;
flex-wrap:wrap;

`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement=styled.span`
font-size:12px;
margin:20px 0px;

`;
const Button=styled.button`
width:40%;
border:none;
padding: 20px 10px;
background-color: teal;
color :white;
cursor:pointer;
`;
export default function Rigister  (props)  {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [ redirect, userInfo]);
    return (
        <Container>
        <Wrapper>
          <Title>CERAT AN ACCOUNT</Title>
          <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <Agreement> By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></Agreement>

            <Button onClick={submitHandler}>CREATE</Button>

          </Form>
        </Wrapper>
            
        </Container>
    )
}

