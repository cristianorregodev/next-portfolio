/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cristiandeveloper.com',
                port: '',
                pathname: '/storage/projects/**',
            },
            {
                protocol: 'http',
                hostname: 'api.cristiandeveloper.test',
                port: '',
                pathname: '/storage/projects/**',
            },
            {
                protocol: 'https',
                hostname: 'api.cristiandeveloper.com',
                port: '',
                pathname: '/storage/projects/**',
            },
        ],
    },
}

module.exports = nextConfig
