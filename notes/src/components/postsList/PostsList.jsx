import React from "react";
import { Post } from "../post/Post";
import "./styles.css";

export const PostsList = ({ posts }) =>
    posts && posts.length > 0
        ? posts.map(({ title, body }) => <Post title={title} body={body} />)
        : null;
