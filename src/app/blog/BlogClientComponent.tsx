// src/app/blog/BlogClientComponent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, categories } from "./page";

export default function BlogClientComponent({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // Use explicit format to ensure consistency
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-24 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Latest Posts</h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto py-12 px-4 md:px-0 ml-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 w-full max-w-7xl mx-auto">
          {/* Blog Posts - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) =>
                  post.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((post) => (
                  <div
                    key={post._id}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded">
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {post.title}
                      </h3>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-indigo-600 text-sm font-medium flex items-center"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg text-black font-medium mb-4">Search</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 text-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-[#2313AC] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick form */}
            <div className="p-4 rounded-lg  border-2 bg-[#6590cd] w-[370px]">
              <h3 className="text-lg font-semibold mb-4 ml-[15px]">
                Book Your Free Consultation Today
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Phone No"
                  className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <select className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option>Select Service</option>
                  <option>Business Surveillance</option>
                  <option>Home CCTV & Safety</option>
                </select>
                <select className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option>Select Area</option>
                  <option>Gurgaon</option>
                  <option>Delhi</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#FFC43C] text-black font-medium py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-black mb-4">
                Categories
              </h2>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center text-gray-700 hover:text-indigo-600 transition"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
