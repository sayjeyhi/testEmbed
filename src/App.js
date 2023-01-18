import useHoory from "@hoory/embed";
import "./styles.css";

export default function App() {
  const { isInitialized } = useHoory("uc-product-description");
  return (
    <div className="App">
      <h1>Hoory is {isInitialized ? "isInitialized" : "not isInitialized"}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
