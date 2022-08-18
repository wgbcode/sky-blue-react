import Button from "components/Button";
import Icon from "components/Icon";
import Input from "components/Input";
import Layout from "components/Layout";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useTags from "components/hooks/useTag";
import Center from "components/Center";
import Span from "components/Span";

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  margin-top: 8px;
  padding: 14px;
  input {
    height: 44px;
  }
`;

type Param = {
  id: string;
};
const Tag: React.FC = (props) => {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Param>(); // 获取 id，并命名为 idString。
  let tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <Center>
        <Span />
        <Span />
        <Button
          onClick={() => {
            deleteTag(tag.id);
          }}
        >
          删除标签
        </Button>
      </Center>
      )
    </div>
  );
  const history = useHistory()
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <TopBar>
        <Icon name="right" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {tag ? tagContent(tag) : <div> tag 不存在</div>}
    </Layout>
  );
};

export default Tag;
