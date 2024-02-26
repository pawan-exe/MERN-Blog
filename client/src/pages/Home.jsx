import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="dark:bg-slate-900  bg-slate-50">
        <div className="flex  flex-col gap-6 p-16 sm:p-24 px-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome to my Blog</h1>
          <p className="text-gray-500 text-xs sm:text-xl">
            Here you'll find a variety of articles and tutorials on topics such
            as web development, software engineering, and programming languages.
          </p>
          <Link
            to={"/search"}
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
          >
            View all posts
          </Link>
        </div>
      </div>

      <div className="p-3  bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-5 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post}></PostCard>
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-ls text-teal-500 hover:underline text-center mb-3 dark:text-fuchsia-300"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
