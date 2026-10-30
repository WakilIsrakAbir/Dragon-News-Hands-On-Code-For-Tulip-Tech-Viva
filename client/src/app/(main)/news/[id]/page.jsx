import RightSidebar from "@/components/Homepage/news/RightSidebar";
import { getSingleNews } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export const instant = false;

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getSingleNews(id);

  if (!news) {
    return (
      <div className="container mx-auto my-16 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          News not found!
        </h2>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-7 my-[40px]">
      <div className="col-span-12 lg:col-span-9">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Dragon News</h2>

        <div className="border border-gray-200 rounded-xl p-6 bg-white space-y-6 shadow-sm">
          <div className="w-full max-h-[500px] overflow-hidden rounded-lg bg-gray-100">
            <img
              src={news.image_url || news.thumbnail_url}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {news.title}
          </h1>

          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {news.details}
          </p>

          <div className="pt-4 border-t border-gray-100">
            <Link
              href={`/category/${news.category_id || "0"}`}
              className="btn bg-rose-500 hover:bg-rose-600 text-white flex items-center gap-2 w-fit px-6"
            >
              <FaArrowLeft /> All news in this category
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
