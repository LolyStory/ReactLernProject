import React from "react";
import { useCallback } from "react";
import { Photo } from "../photo/Photo";
import "./styles.css";

export const PhotosList = ({ photos, setPhotos, onSelectPhoto }) => {
    const trueDeletePhoto = useCallback(
        (id) => {
            const newPhotos = photos.filter((post) => post.id !== id);
            setPhotos(newPhotos);
        },
        [photos]
    );

    if (photos.length === 0) {
        return null;
    }

    return (
        <div className="photoList">
            {photos.map(({ title, url, id }) => (
                <Photo
                    title={title}
                    url={url}
                    onSelectPhoto={() => onSelectPhoto(id)}
                    deletePhoto={() => trueDeletePhoto(id)}
                    key={id}
                />
            ))}
        </div>
    );
};
