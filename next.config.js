/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (cfg) => {
      
    reactStrictMode: false;
    
    cfg.module.rules.push(
        {
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] }
        }
    );
    
    cfg.resolve.fallback = { fs: false };

    return cfg;
  }
}
