import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import HtmlParser from 'react-html-parser';
const cheerio = require('cheerio');
import axios from 'axios'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]


export default function editor() {
  const [value, setValue] = useState('')

  const enviar = (a, b) => {
    const respostra = axios.post('http://172.16.248.88:3333/news',{
      "title":"teste",
      "content":value,
      "description":"teste"
    });
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="px-8">
        <QuillNoSSRWrapper modules={modules} value={value} onChange={setValue} formats={formats} theme="snow" className="bg-white" />
        <button onClick={(event) => enviar(value, event)}>Enviar</button>
      </div>
      <div className="px-10 bg-white">
        <h1 className="titulo-principal">Conteudo</h1>
        {HtmlParser(value)}
      </div>
      
    </div>
  );
}


