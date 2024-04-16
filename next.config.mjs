const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https:;
        font-src 'self' data:;
        connect-src 'self';
        media-src 'self';
        frame-src 'self';
        frame-ancestors 'self';
        worker-src 'self';
        manifest-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        upgrade-insecure-requests;
`


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vdolita.com',
            }
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader.replace(/\n/g, ''),
                    },
                ]
            },
        ];
    },
};

export default nextConfig;
