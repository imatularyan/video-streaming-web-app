import React from "react";
import userIcon from "../assets/userIcon.svg";

const commentsData = [
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [
      {
        name: "Atul Aryan",
        text: " Lorem Ipsum has been the industry's standard dummy",
        replies: [],
      },
      {
        name: "Atul Aryan",
        text: " Lorem Ipsum has been the industry's standard dummy",
        replies: [
          {
            name: "Atul Aryan",
            text: " Lorem Ipsum has been the industry's standard dummy",
            replies: [],
          },
          {
            name: "Atul Aryan",
            text: " Lorem Ipsum has been the industry's standard dummy",
            replies: [
              {
                name: "Atul Aryan",
                text: " Lorem Ipsum has been the industry's standard dummy",
                replies: [
                  {
                    name: "Atul Aryan",
                    text: " Lorem Ipsum has been the industry's standard dummy",
                    replies: [],
                  },
                  {
                    name: "Atul Aryan",
                    text: " Lorem Ipsum has been the industry's standard dummy",
                    replies: [],
                  },
                  {
                    name: "Atul Aryan",
                    text: " Lorem Ipsum has been the industry's standard dummy",
                    replies: [
                      {
                        name: "Atul Aryan",
                        text: " Lorem Ipsum has been the industry's standard dummy",
                        replies: [],
                      },
                      {
                        name: "Atul Aryan",
                        text: " Lorem Ipsum has been the industry's standard dummy",
                        replies: [
                          {
                            name: "Atul Aryan",
                            text: " Lorem Ipsum has been the industry's standard dummy",
                            replies: [],
                          },
                          {
                            name: "Atul Aryan",
                            text: " Lorem Ipsum has been the industry's standard dummy",
                            replies: [],
                          },
                          {
                            name: "Atul Aryan",
                            text: " Lorem Ipsum has been the industry's standard dummy",
                            replies: [
                              {
                                name: "Atul Aryan",
                                text: " Lorem Ipsum has been the industry's standard dummy",
                                replies: [],
                              },
                              {
                                name: "Atul Aryan",
                                text: " Lorem Ipsum has been the industry's standard dummy",
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
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
  {
    name: "Atul Aryan",
    text: " Lorem Ipsum has been the industry's standard dummy",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-zinc-800 bg-slate-500 p-2 rounded-lg my-2">
      <img className=" w-14 h-14" alt="usercomment" src={userIcon} />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-semibold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
