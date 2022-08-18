import useRecords, { RecordItem } from "components/hooks/useRecords";
import useTags from "components/hooks/useTag";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CategorySection from "./Money/CategorySection";
import day from "dayjs";

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 20px;
  background: white;
  > .note {
    margin-right: auto;
    margin-left: 24px;
    color: #a0a0a0;
  }
`;
const Header = styled.div`
  padding: 9px 0;
  font-size: 16px;
  margin-left: 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [k: string]: RecordItem[] } = {}; // 注意类型声明的方式
  const selectedRecords = records.filter((r) => r.category === category);

  selectedRecords.forEach((r) => {
    const key = day(r.createdAt).format("YYYY-MM-DD");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    return 0;
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      {array.map(([data, records]) => {
        return (
          <div>
            <Header>
              <h2>{data}</h2>
            </Header>
            <div>
              {records.map((r) => {
                return (
                  <Item>
                    <div className="tag">
                      {r.tagIds
                        .map((tagId) => (
                          <span key={tagId}>{getName(tagId)}</span>
                        ))
                        .reduce(
                          (result, span, index, array) =>
                            result.concat(
                              index < array.length - 1 ? [span, ", "] : [span]
                            ),
                          [] as ReactNode[]
                        )}
                      {/* [] as ReactNode[], initialValue=[] */}
                    </div>
                    {r.note && <div className="note">{r.note}</div>}
                    <div className="amount">￥{r.amount}</div>
                  </Item>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export default Statistics;
