import React, { useState, useEffect } from "react";
import { PostsList as PostsListComponent } from "../../components/postsList";
import { getPosts } from "../../api/getPosts";

export const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            setPosts(posts);
        };
        fetchData();
    }, []);
    return <PostsListComponent posts={posts} />;
};
