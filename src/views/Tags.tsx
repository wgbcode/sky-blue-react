import Center from "components/Center";
import Icon from "components/Icon";
import Span from "components/Span";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useTags from "components/hooks/useTag";
import Layout from "../components/Layout";

const TagList = styled.ol`
  background: #ffffff;
  font-size: 16px;
  > li {
    > a {
      padding: 12px 16px 16px 0;
      margin-left: 16px;
      border-bottom: 3px solid #dddde0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  color: white;
  background: #767676;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
`;

function Tags() {
  // eslint-disable-next-line
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.name}>
            <Link to={"/tags/" + tag.id}>
              <span className="onLine">{tag.name}</span>
              <Icon name="left" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Span />
        <Span />
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
