import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
    return (
        <div className="App">
            <Header title={"На большом плоту"} />
            <Footer title={"Мне не дали свг, поэтому тут он, да он классный"} />
        </div>
    );
}

export default App;
