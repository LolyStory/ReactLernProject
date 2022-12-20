import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PostsList } from "./conteiners/PostsList";

function App() {
    return (
        <div className="App">
            <Header title={"На большом плоту"} />
            <PostsList />
            <Footer title={"Мне не дали свг, поэтому тут он, да он классный"} />
        </div>
    );
}

export default App;
