import React, { useState } from "react";
import generateOutput from "./NumberSection/generateOutput";
import Wrapper from "./NumberSection/Wrapper";

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOK?: () => void;
};

const NumberSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === "保存") {
      if (props.onOK) {
        props.onOK();
      }
      return;
    }
    if ("0123456789.".split("").concat(["删除", "清空"]).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">保存</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export default NumberSection;
