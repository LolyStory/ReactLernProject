const url = "https://jsonplaceholder.typicode.com/photos";

export const getPhotos = async () => {
    let temp = await fetch(url);
    temp = await temp.json();
    return temp;
};
