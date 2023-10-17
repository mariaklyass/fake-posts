import React from "react";
import MyButton from "./UI/MyButton/MyButton";

export default function PostItem(props) {
  return (
    <div className="bg-stone-200 border border-teal-900 m-2 p-3 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">
          {props.item.id}. {props.item.title}
        </h3>
        <p>{props.item.body}</p>
      </div>

      <MyButton onClick={() => props.remove(props.item)}>Delete</MyButton>
    </div>
  );
}
