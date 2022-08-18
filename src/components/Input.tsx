import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  white-space:nowrap;
  > span {
    margin-right: 16px;
  }
  > input {
    display: block;
    width: 100%;
    border: none;
  }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  );
};

export default Input;
