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
    transpilePackages: ["antd", "@ant-design/icons"],
};

export default nextConfig;
