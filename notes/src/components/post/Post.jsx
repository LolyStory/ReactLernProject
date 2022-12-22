import React from "react";
import "./styles.css";

export const Post = ({ title, body }) => (
    <div className="post">
        <div className="post sectionName niga">Title:</div>
        <div className="post title">{title}</div>
        <div className="post sectionName">Post:</div>
        <div className="post body">{body}</div>
    </div>
);
