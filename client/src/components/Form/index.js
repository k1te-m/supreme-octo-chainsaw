import React from "react";
import styled from "styled-components";

export function Input(props) {
  return (
    <div className="form-group col-12">
      <FormLabel htmlFor={props.name}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </FormLabel>
      <FormInput className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group col-12">
      <FormLabel htmlFor={props.name}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </FormLabel>
      <ContactTextArea className="form-control" rows="15" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn-lg btn-warning mt-3 mb-3" id="subBotton">
      {props.children}
    </button>
  );
}

const ContactTextArea = styled.textarea`
  background-color: #fff9a4;
  border: 2px solid #ffd47f;
  :focus {
    background-color: #fff9a4;
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px#ffd47f;
  }
  height: 200px;
  @media screen and (min-width: 576px) {
    height: 350px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const FormLabel = styled.label`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  background-color: #fff9a4;
  border: 2px solid #ffd47f;
  :focus {
    background-color: #fff9a4;
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px#ffd47f;
  }
`
