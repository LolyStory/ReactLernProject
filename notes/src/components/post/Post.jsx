import React, { useCallback, useState } from "react";
import * as styles from "./styles.css";
import cn from "classnames";

const cx = cn.bind(styles);

export const Post = ({ title, body, deletePost, onSelectPost }) => {
    const [isColorChanged, setIsColorChanged] = useState(false);
    const onRecolorClick = useCallback(
        () => setIsColorChanged(!isColorChanged),
        [isColorChanged]
    );

    return (
        <div
            className={cx("post", {
                bottonRecolorActive: isColorChanged,
                postColor: !isColorChanged,
            })}
        >
            <div className="post sectionName niga">Title:</div>
            <div className="post title">{title}</div>
            <div className="post sectionName">Post:</div>
            <div className="post body">{body}</div>
            <div className="post buttons">
                <button onClick={deletePost} className="post buttons delete">
                    Delete
                </button>
                <button
                    onClick={onRecolorClick}
                    className="post buttons recolor"
                >
                    Recolor
                </button>
                <button
                    onClick={onSelectPost}
                    className="post buttons onSelectPost"
                >
                    Select
                </button>
            </div>
        </div>
    );
};