/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination:
                    "https://chat-gpt-next-web-mu-lilac-41.vercel.app" +
                    "/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
