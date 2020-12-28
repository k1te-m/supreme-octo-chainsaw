import React from "react";
import styled from "styled-components";

export function Input(props) {
    return (
      <div className="form-group col-12">
        <label htmlFor={props.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
        <input className="form-control" {...props} />
      </div>
    );
  }
  
export function TextArea(props) {
    return (
      <div className="form-group col-12">
        <label htmlFor={props.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
        <ContactTextArea className="form-control" rows="15"  {...props} />
      </div>
    );
  }
  
export function FormBtn(props) {
    return (
      <button {...props}  className="btn-lg btn-warning mt-1 mb-3" id="subBotton">
        {props.children}
      </button>
    );
  }

  const ContactTextArea = styled.textarea`
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
  `