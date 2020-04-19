import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import get from "lodash/get";

const FormWrapper = styled.form`
  grid-area: search;
  padding-left: 5vh;
`;

const Label = styled.label`
  color: #7f8b95;
  font-size: 18px;
  display: block;
`;

const YearInput = styled.input`
  font-size: 18px;
  padding: 10px 15px;
  color: #6a6a6a;
  display: block;
  margin: 5px 0px 10px 0px;
  border-radius: 5px;
  border: none;
  &::placeholder {
    color: #a1a1a1;
  }
`;

const Submit = styled.button`
  background-color: #2889ec;
  align-self: flex-end;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  margin: 10px 5px;
  cursor: pointer;
  &:disabled {
    cursor: no-drop;
    background-color: #b2b2b2;
    color: #e1e1e1;
  }
`;

function Input(props) {
  const { onSubmitCallBack } = props;
  const [value, setValue] = useState("");

  return (
    <FormWrapper
      aria-label="form"
      onSubmit={e => {
        e.persist();
        e.preventDefault();
        e.stopPropagation();
        onSubmitCallBack(get(e, "target[0].value", ""));
      }}
    >
      <Label htmlFor="year-input">Year</Label>
      <YearInput
        maxLength={4}
        id="year-input"
        placeholder="Search by year"
        value={value}
        onChange={e => {
          e.preventDefault();
          e.stopPropagation();
          let input = e.target.value;
          if (/^\d*\.?\d*$/.test(input)) setValue(input);
        }}
      />
      <Submit type="submit" disabled={value.length < 4} aria-label="submit">
        Update
      </Submit>
    </FormWrapper>
  );
}

export default Input;

Input.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired
};
