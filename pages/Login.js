export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold text-center mb-6">Área de acesso Administrativo</h2>
        <div className="bg-gray-100 shadow-md shadow-gray-300 rounded-md p-4">
          <div>
            <label htmlFor="Login" className="text-sm text-gray-700 mb-1">Login</label>
            <input type="text" id="Login" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md"></input>
          </div>

          <div>
            <label htmlFor="Senha" className="text-sm text-gray-700 mb-1">Senha</label>
            <input type="password" id="Senha" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md"></input>
          </div>
          <div className="">
          <button className="w-full mt-2 text-sm bg-orange-300 p-1 px-2 rounded-md text-black hover:bg-orange-400">Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
}
