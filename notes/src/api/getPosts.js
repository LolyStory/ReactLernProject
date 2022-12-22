const url = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    let temp = await fetch(url);
    temp = await temp.json();
    return temp;
};
