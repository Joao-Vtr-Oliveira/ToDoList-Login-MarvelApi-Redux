import SessionCheckHOC from "../../requests/SessionCheckHOC";

function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-auto">
        <div className="text-center">
          <h1 className="text-5xl text-custom-purple underline">
            Página não encontrada!
          </h1>
          <h3 className="text-3xl text-white">
            Voltando para página de login em 3 segundos!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SessionCheckHOC(NotFound, 3000);