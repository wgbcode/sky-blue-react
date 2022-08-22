import useUpdate from "components/hooks/useUpdate";
import createId from "lib/createId";
import { useEffect, useState } from "react";
import useRecords from "./useRecords";

// 封装一个自定义 Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const { removeRecord } = useRecords();
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0];
  };
  const findTagIndex = (id: number) => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name: obj.name } : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
    removeRecord(id);
    window.history.back();
  };
  const addTag = () => {
    const tagName = window.prompt("请输入新标签名");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const getName = (id: number) => {
    let tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      return tag.name;
    }
  };
  return {
    tags,
    getName,
    addTag,
    setTags,
    findTag,
    findTagIndex,
    updateTag,
    deleteTag,
  };
};

export default useTags;
