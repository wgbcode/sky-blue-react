import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 36px;
    color: #333333;
    padding: 26px 16px 24px 0px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    font-size: 18px;
    color: #000000;
    > button {
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #a9a9a9;
      }
      &:nth-child(14) {
        background: #b8b8b8;
      }
    }
  }
`;

export default Wrapper;
