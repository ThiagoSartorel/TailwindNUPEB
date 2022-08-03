import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillPhone,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineGlobal,
} from "react-icons/ai";

export default function AuthorCard(props) {
  if (typeof document !== "undefined") {
    props.github != ""
      ? (document.getElementById("github").hidden = false)
      : (document.getElementById("github").hidden = true);
    props.facebook != ""
      ? (document.getElementById("facebook").hidden = false)
      : (document.getElementById("facebook").hidden = true);
    props.instagram != ""
      ? (document.getElementById("instagram").hidden = false)
      : (document.getElementById("instagram").hidden = true);
    props.linkedin != ""
      ? (document.getElementById("linkedin").hidden = false)
      : (document.getElementById("linkedin").hidden = true);
    props.twitter != ""
      ? (document.getElementById("twitter").hidden = false)
      : (document.getElementById("twitter").hidden = true);
    props.website != ""
      ? (document.getElementById("website").hidden = false)
      : (document.getElementById("website").hidden = true);
    props.email != ""
      ? (document.getElementById("email").hidden = false)
      : (document.getElementById("email").hidden = true);
    props.telephone != ""
      ? (document.getElementById("telephone").hidden = false)
      : (document.getElementById("telephone").hidden = true);
    props.youtube != ""
      ? (document.getElementById("youtube").hidden = false)
      : (document.getElementById("youtube").hidden = true);
    props.whatsapp != ""
      ? (document.getElementById("whatsapp").hidden = false)
      : (document.getElementById("whatsapp").hidden = true);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b-white border-2 pb-8 md:pb-6">
        <div className="relative w-full h-48 max-h-full rounded sm:h-auto group">
          <a href={props.id}>
            <img
              className="group-hover:opacity-20 absolute group-hover:scale-90 duration-300 bg-cover bg-center z-0 w-40 h-40 mx-auto rounded-full shadow-lg"
              src={process.env.FILESRV + props.image}
              alt="Avatar"
            />
            <div className="opacity-0 group-hover:opacity-100 hover:scale-110 duration-300 absolute inset-10 z-10 justify-center items-center text-center text-6x1 text-slate-700 font-semibold">
              Conheça {props.name}! 
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center sm:mt-0 sm:p-5 sm:col-span-2">

          <p className="text-lg font-bold border-b-slate-300 border-2 shadow mb-2 bg-white bg-opacity-50 pl-1">{props.name}</p>

          <p className="mb-4 text-xs text-gray-800">{props.ocupation}</p>

          <div className="mb-4 text-sm tracking-wide text-gray-800 h-10">{props.bio}</div>
          
          <div className="flex items-center space-x-3">
            <a id="github" hidden href={props.github} target="_blank">
              <AiFillGithub />
            </a>
            <a id="youtube" hidden href={props.youtube} target="_blank">
              <AiFillYoutube />
            </a>
            <a id="twitter" hidden href={props.twitter} target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a id="telephone" hidden href={props.phone} target="_blank">
              <AiFillPhone />
            </a>
            <a id="whatsapp" hidden href={props.whatsapp} target="_blank">
              <AiOutlineWhatsApp />
            </a>
            <a id="facebook" hidden href={props.facebook} target="_blank">
              <AiFillFacebook />
            </a>
            <a id="instagram" hidden href={props.instagram} target="_blank">
              <AiFillInstagram />
            </a>
            <a id="linkedin" hidden href={props.linkedin} target="_blank">
              <AiFillLinkedin />
            </a>
            <a id="email" hidden href={props.email} target="_blank">
              <AiOutlineMail />
            </a>
            <a id="website" hidden href={props.global} target="_blank">
              <AiOutlineGlobal />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
