import Input from "components/Input";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  > label {
    padding: 10px 16px;
    > input {
      height: 70px;
      background: #f5f5f5;
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
