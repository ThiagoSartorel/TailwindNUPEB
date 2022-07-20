/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BACKEND: 'http://172.16.248.88:3333/',
    FILESRV: 'http://172.16.248.88:3333/showFile/'
  }
}

module.exports = nextConfig
