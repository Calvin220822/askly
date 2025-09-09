import type { NextConfig } from 'next';

const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000' : '';

const nextConfig: NextConfig = {
  // only for client side
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
