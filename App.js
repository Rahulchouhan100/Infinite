import ReactDOM from "react-dom/client";
import InfiniteScroll from "./src/component/InfiniteScroll";
const App = () => {
  return (
    <>
      <h1>Infinte Scroll</h1>
      <InfiniteScroll />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
