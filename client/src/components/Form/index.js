import React from "react";

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
        <textarea className="form-control" rows="15" {...props} />
      </div>
    );
  }
  
export function FormBtn(props) {
    return (
      <button {...props}  className="btn-lg btn-warning mb-3" id="subBotton">
        {props.children}
      </button>
    );
  }