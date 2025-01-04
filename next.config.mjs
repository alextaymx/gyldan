/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        has: [
          {
            type: 'host',
            value: 'gyldan.com.my', // Replace with the domain you want to match
          },
        ],
        source: '/',
        destination: '/coming-soon.html',
        permanent: false, // Set true if the redirect is permanent (HTTP 301)
      },
    ];
  },
};

export default nextConfig;
