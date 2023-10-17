import React from "react";
import MyButton from "../MyButton/MyButton";

const MyPagination = ({ allPages, page, changePage }) => {
  return (
    <div className="flex gap-2 mt-2">
      {allPages.map((p) => (
        <div
          className={
            page === p ? "bg-stone-100 rounded-full" : "border-teal-800"
          }
        >
          <MyButton key={p} onClick={() => changePage(p)}>
            {p}
          </MyButton>
        </div>
      ))}
    </div>
  );
};

export default MyPagination;
