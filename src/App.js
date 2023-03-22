import { Card } from "./components/Card";

export default function App() {
  console.log("Teste no console do navegador");

  return (
    <>
      <header>
        <div className="bg-blue-500 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl text-white">
            React Elections
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <h2>O conteúdo fica aqui.</h2>
          <Card />
        </div>
      </main>
    </>
  );
}
