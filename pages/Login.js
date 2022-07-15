import {
  ExclamationIcon
} from "@heroicons/react/solid";
import axios from "axios";
import Router from "next/router";
import { useForm } from "react-hook-form";
import nookies from 'nookies'


async function auth(data) {
  console.log(data)
  try {
    const retorno = await axios.post(process.env.BACKEND + 'login', {
      "email": data.email,
      "password": data.password
    })
    console.log(retorno)
    console.log("usuario logado com sucesso")
    nookies.set(null, 'nupeb-auth', retorno.data.token, {
      maxAge: 60 * 60 * 1,
      path: '/'
    });
    Router.push("http://localhost:3001")
    console.log(retorno)
  }
  catch (e) {
    document.getElementById("error").hidden = false;
  }
}

export default function Login() {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold text-center mb-4">Área de acesso Administrativo</h2>
        <div className="bg-slate-300 shadow-md shadow-gray-300 rounded-md p-6">
          <form onSubmit={handleSubmit(auth)}>
            <div>
              <label htmlFor="Login" className="text-sm text-gray-700 mb-1">Login</label>
              <input type="text" id="Login" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md" {...register("email")}></input>
            </div>

            <div>
              <label htmlFor="Senha" className="text-sm text-gray-700 mb-1">Senha</label>
              <input type="password" id="Senha" className="px-2 w-full border hover:bg-gray-100 border-gray-400 rounded-md" {...register("password")}></input>

            </div>
            <div className="bg-red-300 mt-2 w-full rounded-md" id="error" hidden>
              <div className="flex flex-row">
                <span className="pt-1 px-2" id="error">Usuario ou senha incorreto</span>

                <svg className="icon-alert w-6">
                  <ExclamationIcon />
                </svg>
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn-submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
