import axios from "axios";
import { useForm } from "react-hook-form";

import Router from "next/router";
import { setCookie } from 'cookies-next';

export default function Login() {
  const { register, handleSubmit } = useForm()

  async function auth(data) {
    //console.log(data)
    try {
      const retorno = await axios.post(process.env.BACKEND + 'login', {
        "email": data.email,
        "password": data.password
      })
      console.log(retorno.data.token)
      setCookie('auth', retorno.data.token, { maxAge: 60 * 6 * 24 })
      Router.push("http://localhost:3001")
    }
    catch {
      console.log("falha no login")
    }

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold text-center mb-6">Área de acesso Administrativo</h2>
        <div className="bg-slate-300 shadow-md shadow-gray-300 rounded-md p-4">
          <form onSubmit={handleSubmit(auth)}>
            <div>
              <label htmlFor="Login" className="text-sm text-gray-700 mb-1">Login</label>
              <input type="text" id="Login" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md" {...register("email")}></input>
            </div>

            <div>
              <label htmlFor="Senha" className="text-sm text-gray-700 mb-1">Senha</label>
              <input type="password" id="Senha" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md" {...register("password")}></input>
            </div>
            <div className="w-full bg-red-200 mt-2">
              <span className="text-gray-500 font-thin text-sm">teste</span>
              <svg>
             
              </svg>
            </div>
            <div>
              <button type="submit" className="btn-submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
