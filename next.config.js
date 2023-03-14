/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BACKEND: 'http://api.uniplaclages.edu.br:40001/',
    FILESRV: 'http://api.uniplaclages.edu.br:40001/showFile/'
  }
}

module.exports = nextConfig
