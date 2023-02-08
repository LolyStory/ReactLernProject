import React, { useState, useEffect } from "react";
import { PostsList as PostsListComponent } from "../../components/postsList";
import { getPosts } from "../../api/getPosts";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAction } from "../../store/actions";

export const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const selectedPostId = useSelector((state) => state.selectedPostId);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            setPosts(posts);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(selectedPostId);
    }, [selectedPostId]);

    const onSelectPost = (postId) => {
        dispatch(selectPostAction(postId));
    };

    return (
        <PostsListComponent
            posts={posts}
            setPosts={setPosts}
            onSelectPost={onSelectPost}
        />
    );
};
