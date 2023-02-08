import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PostsList } from "./conteiners/PostsList";
import { PhotosList } from "./conteiners/PhotosList";
import React, { useState } from "react";

function App() {
    const [isPhotosMode, setIsPhotosMode] = useState(false);

    return (
        <div className="App">
            <Header
                title={"На большом плоту"}
                setIsPhotosMode={setIsPhotosMode}
            />
            {isPhotosMode ? <PhotosList /> : <PostsList />}

            <Footer title={"Мне не дали свг, поэтому тут он, да он классный"} />
        </div>
    );
}

export default App;
