import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const copyToClipboardEmail = () => {
  navigator.clipboard.writeText("nupebuniplac@gmail.com");
  document.getElementById("emailNupeb").innerHTML = "Copiado";
  setTimeout(redefineEmail, 2000);
};

async function redefineEmail() {
  document.getElementById("emailNupeb").innerHTML = "nupebuniplac@gmail.com";
}

async function redefineNumero() {
  document.getElementById("numeroNupeb").innerHTML = "(49) 3251-1108";
}

const copyToClipboardNumber = () => {
  navigator.clipboard.writeText("49 3251 1108");
  document.getElementById("numeroNupeb").innerHTML = "Copiado";
  setTimeout(redefineNumero, 2000);
};

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-full min-h-screen mb-10">
      <div className="mb-16 pt-12 lg:mx-5 md:mx-5 sm:mx-5">
        <p className="titulo-principal">Contato</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-5">
          {/* left */}
          <div className="h-full shadow-md shadow-gray-400 rounded-xl p-4 bg-card">
            <div className="lg:p-4 h-full ">
              <div>
                <p className="uppercase pt-4 pb-4">Localização</p>
                <iframe
                  className="w-full h-60 lg:w-full lg:h-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.544008698326!2d-50.316700999999995!3d-27.823803499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e01f22ad622ac3%3A0x14a90d6184a4173a!2sAv.%20Mal.%20Castelo%20Branco%2C%20170%20-%20Universit%C3%A1rio%2C%20Lages%20-%20SC%2C%2088509-900!5e0!3m2!1sen!2sbr!4v1656695711040!5m2!1sen!2sbr"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <h2 className="py-2">NuPEB</h2>
                <p>Núcleo de Pesquisa em Educação Básica</p>
                <p className="py-4">
                  Ficaremos felizes em responder sua solicitação, obrigada pelo
                  contato!
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 ">Redes sociais</p>
                <div className="flex items-center justify-between space-between py-4">
                  <div className="group">
                    <a
                      onClick={copyToClipboardNumber}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                    <div className="absolute mt-4 w-40 group-hover:inline-block hidden">
                      <span
                        className="bg-gray-800 px-2 py-1 text-white rounded-md text-sm"
                        id="numeroNupeb"
                      >
                        (49) 3251-1108
                      </span>
                    </div>
                  </div>

                  <div className="group">
                    <a onClick={copyToClipboardEmail}>
                      <div className="rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300">
                        <AiOutlineMail />
                      </div>
                    </a>
                    <div className="absolute hidden mt-4 w-40 group-hover:inline-block">
                      <span
                        className="bg-gray-800 px-2 py-1 text-white rounded-md text-sm"
                        id="emailNupeb"
                      >
                        nupebuniplac@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="group">
                    <a
                      href="https://www.facebook.com/nupeb/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300">
                        <FaFacebook />
                      </div>
                    </a>
                  </div>
                  <div className="group">
                    <a
                      href="https://www.instagram.com/nupebuniplac/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300">
                        <FaInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4 bg-card">
            <div className="p-4">
            <p className="uppercase pt-4 pb-2">PUBLICAÇÕES</p>
              <form
                onSubmit={handleSubmit}
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" >Nome</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="Seu nome"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Contato</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="(00) 0000-0000"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    placeholder="Exemplo@gmail.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Assunto</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    placeholder="Sua ideia ou título para post"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    placeholder="O Blog do NuPEB tem como objetivo divulgar discussões, ensaios e artigos comprometidos com a problematização do mundo contemporâneo."
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="btn-submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
