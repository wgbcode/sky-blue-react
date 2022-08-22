import Input from "components/Input";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  > label {
    padding: 15px 16px;
    background: #f6f6f8;
    > input {
      height: 30px;
      background: #f6f6f8;
    }
  }
`;

// 非受控组件 defaultValue
type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NotesSection: React.FunctionComponent<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        placeholder="在这里添加备注"
        value={note}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default NotesSection;
