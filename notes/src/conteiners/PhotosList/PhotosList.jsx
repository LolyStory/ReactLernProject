import React, { useState, useEffect } from "react";
import { PhotosList as PhotosListComponent } from "../../components/photosList";
import { getPhotos } from "../../api/getPhotos";

export const PhotosList = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const photos = await getPhotos();
            setPhotos(photos);
        };
        fetchData();
    }, []);
    return <PhotosListComponent photos={photos} setPhotos={setPhotos} />;
};
