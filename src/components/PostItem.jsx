import React from "react";
import MyButton from "./UI/MyButton/MyButton";
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {
  const router = useNavigate();
  return (
    <div className="bg-[#b49499]/20 border border-[#b49499]/30 rounded-md drop-shadow-xl m-2 p-3 max-w-sm">
      <div className="mt-auto">
        <img alt="image" src={props.image} />
        <div>
          <h3 className="font-semibold capitalize">
            {/* {props.item.id}. */}
            {props.item.title}
          </h3>
          <p className="text-justify">{props.item.body}</p>
          <div className="flex gap-2">
            <MyButton onClick={() => router(`/posts/${props.number}`)}>
              Read
            </MyButton>
            <MyButton onClick={() => props.remove(props.item)}>Delete</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
