import useRecords, { RecordItem } from "components/hooks/useRecords";
import useTags from "components/hooks/useTag";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CategorySection from "./Money/CategorySection";
import day from "dayjs";
import Icon from "../components/Icon";

const Header = styled.div`
  background: white;
  padding: 10px 16px;
  font-size: 16px;
  margin-top: 16px;
  .data {
    font-weight: 700;
  }
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
const NoData = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25vh;
  .icon {
    height: 7em;
    width: 7em;
  }
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
  useEffect(() => {
    console.log(selectedRecords);
  }, [selectedRecords]);
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    return 0;
  });

  return (
    <Layout>
      <CategorySection
        value={category}
        onChange={(value) => setCategory(value)}
      />
      {selectedRecords.length === 0 ? (
        <NoData>
          <Icon name="nodata" />
        </NoData>
      ) : (
        ""
      )}
      {array.map(([data, records], index) => {
        return (
          <Fragment key={index}>
            <div>
              <Header>
                <div className="data">{data}</div>
              </Header>
              <div>
                {records.map((r) => {
                  return (
                    <Item key={r.createdAt}>
                      <div className="tag">
                        {r.tagIds
                          .map((tagId) => (
                            <span key={tagId}>{getName(tagId)}</span>
                          ))
                          .reduce(
                            (result, span, index, array) =>
                              result.concat(
                                index < array.length - 1 ? [span, "，"] : [span]
                              ),
                            [] as ReactNode[]
                          )}
                      </div>
                      {r.note && <div className="note">{r.note}</div>}
                      <div className="amount">￥{r.amount}</div>
                    </Item>
                  );
                })}
              </div>
            </div>
          </Fragment>
        );
      })}
    </Layout>
  );
}

export default Statistics;
