/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BACKEND: 'http://api.uniplaclages.edu.br:3333/',
    FILESRV: 'http://api.uniplaclages.edu.br:3333/showFile/'
  }
}

module.exports = nextConfig
