import React from 'react';
import Link from 'next/link';

const blogs = [
  {
    title: 'Hello World',
    date: '2023-09-01',
    link: '/blog/hello-world',
  },
  // Add more blog entries here
];

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <Link href={blog.link} className="text-xl font-semibold text-blue-600 hover:underline">
              {blog.title}
            </Link>
            <p className="text-gray-600">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
