import React from 'react';
import Head from 'next/head';

const HelloWorldBlog = () => {
  return (
    <div className="container mx-auto py-8">
      <Head>
        <title>Hello World - Lav Patel's Blog</title>
        <meta name="description" content="This is the first blog post on Lav Patel's blog. Welcome to the world of coding and technology!" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Hello World - Lav Patel's Blog" />
        <meta property="og:description" content="This is the first blog post on Lav Patel's blog. Welcome to the world of coding and technology!" />
        <meta property="og:image" content="https://lavpatel.com/hello-world.jpg" />
        <meta property="og:url" content="https://lavpatel.com/blog/hello-world" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Hello World</h1>
      <p className="text-gray-600">Posted on September 1, 2023</p>
      <div className="mt-4">
        <p>Welcome to my blog! This is my first post. Stay tuned for more updates on coding, technology, and more.</p>
      </div>
    </div>
  );
};

export default HelloWorldBlog;
