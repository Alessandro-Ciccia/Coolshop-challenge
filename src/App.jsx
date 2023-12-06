import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex flex-col items-center gap-20 p-10">
      <h1 className="text-3xl font-bold text-center">
        React Challenge Coolshop
      </h1>
      <div className="flex justify-center">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
