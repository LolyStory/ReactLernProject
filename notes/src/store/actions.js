export const selectPostAction = (postId) => ({
    type: "mainReducer/selectPost",
    postId,
});

export const selectPhotoAction = (photoId) => ({
    type: "mainReducer/selectPhoto",
    photoId,
});
