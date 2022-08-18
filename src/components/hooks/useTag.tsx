import useUpdate from "components/hooks/useUpdate";
import createId from "lib/createId";
import { useEffect, useState } from "react";

// 封装一个自定义 Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
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
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为？");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const getName = (id: number) => {
    let tag = tags.filter((t) => t.id === id)[0];
    return tag.name
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
