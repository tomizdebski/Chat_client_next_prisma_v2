/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["avatars.githubusercontent.com", "scontent.xx.fbcdn.net", "lh3.googleusercontent.com"]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
