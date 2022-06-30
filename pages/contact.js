import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const copyToClipboardEmail = () => {
  navigator.clipboard.writeText("nupebuniplac@gmail.com");
  document.getElementById("emailNupeb").innerHTML = "nupebuniplac@gmail.com"
};

const copyToClipboardNumber = () => {
  navigator.clipboard.writeText("49 3251 1108");
  document.getElementById("numeroNupeb").innerHTML = "(49) 3251-1108"
};



const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' className='w-full min-h-screen '>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
        <p className='text-[3rem] text-center font-bold text-3xl tracking-widest uppercase text-[#f7a439] py-4'>
          Contato
        </p>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4 bg-slate-300'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300 '
                  src={"/contact/contato-foto.jpg"}
                  alt='Foto de contato'
                  height={"300px"}
                  width={"400px"}
                />
              </div>
              <div>
                <h2 className='py-2'>NuPEB</h2>
                <p>Núcleo de Pesquisa em Educação Básica</p>
                <p className='py-4'>
                  Ficaremos felizes em responder sua solicitação, obrigada pelo contato!
                </p>
              </div>

              <div>
                <p className='uppercase pt-8 '>Redes sociais</p>
                <div className='flex items-center justify-between space-between py-4'>
                  <div className='group'>
                    <a
                      href='https://www.facebook.com/nupeb/'
                      target='_blank'
                      rel='noreferrer'
                    >

                      <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300'>
                        <FaFacebook />
                      </div>

                    </a>
                    <div className="absolute hidden mt-4 w-40 group-hover:inline-block">
                      <span className='bg-gray-800 px-2 py-1 text-white rounded-md text-sm'>@nupeb</span>
                    </div>
                  </div>


                  <div className='group'>
                    <a
                      onClick={copyToClipboardEmail}
                    >

                      <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300'>
                        <AiOutlineMail />
                      </div>

                    </a>
                    <div className="absolute hidden mt-4 w-40 group-hover:inline-block">
                      <span className='bg-gray-800 px-2 py-1 text-white rounded-md text-sm group-active:bg-green-700' id="emailNupeb">nupebuniplac@gmail.com</span>
                    </div>
                  </div>
                  <div className='group'>
                    <a
                      onClick={copyToClipboardNumber}
                      target='_blank'
                      rel='noreferrer'
                    >

                      <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange-300 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>

                    </a>
                    <div className="absolute mt-4 w-40 group-hover:inline-block tras">
                      <span className='bg-gray-800 px-2 py-1 text-white rounded-md text-sm group-active:bg-green-700 ' id="numeroNupeb">(49) 3251-1108</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4 bg-slate-300'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Contato
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="bg-slate-50 h-2 w-full pt-2 mt-4 mb-1 text-center text-sm rounded-lg shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-300 hover:text-neutral-600">Enviar</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;