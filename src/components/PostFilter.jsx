import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by.."
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
