import React from "react";
import userIcon from "../assets/userIcon.svg";

const commentsData = [
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Atul Aryan",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Atul Aryan",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Atul Aryan",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Atul Aryan",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Atul Aryan",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Atul Aryan",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                  {
                    name: "Atul Aryan",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                  {
                    name: "Atul Aryan",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "Atul Aryan",
                        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [],
                      },
                      {
                        name: "Atul Aryan",
                        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [
                          {
                            name: "Atul Aryan",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [],
                          },
                          {
                            name: "Atul Aryan",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [],
                          },
                          {
                            name: "Atul Aryan",
                            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [
                              {
                                name: "Atul Aryan",
                                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                replies: [],
                              },
                              {
                                name: "Atul Aryan",
                                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-zinc-800 bg-zinc-100 p-1 rounded-md my-1 w-fit">
      <img className=" w-5" alt="usercomment" src={userIcon} />
      <div className="px-3">
        <p className="font-medium">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className=" border-l border-red-400 ml-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" p-2 w-full">
      <h1 className="text-xl font-semibold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
