/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "postprocessing", "@react-three/fiber", "@react-three/postprocessing"],
  images: {
    unoptimized: false
  },
  webpack: (config) => {
    // face-api.js optional Node modules ko browser bundle me ignore karo.
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      encoding: false
    };

    return config;
  }
};

export default nextConfig;
