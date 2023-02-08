import React from "react";

import { useCallback } from "react";
import { Post } from "../post/Post";
import "./styles.css";

export const PostsList = ({ posts, setPosts, onSelectPost }) => {
    const trueDeletePost = useCallback(
        (id) => {
            const newPosts = posts.filter((post) => post.id !== id);
            setPosts(newPosts);
        },
        [posts]
    );

    if (posts.length === 0) {
        return null;
    }

    return posts.map(({ title, body, id }) => (
        <Post
            title={title}
            body={body}
            onSelectPost={() => onSelectPost(id)}
            deletePost={() => trueDeletePost(id)}
            key={id}
        />
    ));
};
