const initialState = { selectedPostId: null };

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case "mainReducer/selectPost": {
            const { postId } = action;

            return {
                ...state,
                selectedPostId: postId,
            };
        }
        case "mainReducer/selectPhoto": {
            const { photoId } = action;
            return {
                ...state,
                selectedPhotoId: photoId,
            };
        }
        default:
            return state;
    }
}
