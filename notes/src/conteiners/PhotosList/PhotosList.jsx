import React, { useState, useEffect } from "react";
import { PhotosList as PhotosListComponent } from "../../components/photosList";
import { getPhotos } from "../../api/getPhotos";
import { useDispatch, useSelector } from "react-redux";
import { selectPhotoAction } from "../../store/actions";

export const PhotosList = () => {
    const [photos, setPhotos] = useState([]);
    const dispatch = useDispatch();
    const selectedPhotoId = useSelector((state) => state.selectedPhotoId);

    useEffect(() => {
        const fetchData = async () => {
            const photos = await getPhotos();
            setPhotos(photos);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(selectedPhotoId);
    }, [selectedPhotoId]);

    const onSelectPhoto = (photoId) => {
        dispatch(selectPhotoAction(photoId));
    };

    return (
        <PhotosListComponent
            photos={photos}
            setPhotos={setPhotos}
            onSelectPhoto={onSelectPhoto}
        />
    );
};
