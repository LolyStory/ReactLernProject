import React, { useCallback, useState } from "react";
import * as styles from "./styles.css";
import cn from "classnames";

const cx = cn.bind(styles);

export const Photo = ({ title, url, deletePhoto }) => {
    const [isColorChanged, setIsColorChanged] = useState(false);
    const onRecolorClick = useCallback(
        () => setIsColorChanged(!isColorChanged),
        [isColorChanged]
    );

    return (
        <div
            className={cx("photo", {
                bottonRecolorActive: isColorChanged,
                photoColor: !isColorChanged,
            })}
        >
            <div className="photo img">{<img src={url} width="300px" />}</div>
            <div className="photo title">{title}</div>
            <div className="photo buttons">
                <button onClick={deletePhoto} className="photo buttons delete">
                    Delete
                </button>
                <button
                    onClick={onRecolorClick}
                    className="photo buttons recolor"
                >
                    Recolor
                </button>
            </div>
        </div>
    );
};
