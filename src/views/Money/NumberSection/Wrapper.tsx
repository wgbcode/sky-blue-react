import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #f6f6f8;
    font-size: 32px;
    color: #333333;
    padding: 12px 16px 12px 0px;
    text-align: right;
    box-shadow: inset 0 -4px 4px -5px rgba(0, 0, 0, 0.25),
      inset 0 4px 2px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    font-size: 18px;
    color: #000000;
    padding-bottom: 8px;
    background: white;
    > button {
      float: left;
      width: 25%;
      height: 56px;
      border: 0.5px solid #e9e9e9;
      background: white;
      &.ok {
        height: 112px;
        float: right;
        background: #5fb39b;
        color: white;
        font-weight: 700;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`;

export default Wrapper;
