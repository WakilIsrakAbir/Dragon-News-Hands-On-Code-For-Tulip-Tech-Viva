import Link from "next/link";
import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, title, author, image_url, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = author?.published_date
    ? author.published_date.split(" ")[0]
    : "Recent";

  return (
    <div className="card bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between bg-gray-50 px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://placehold.co/100x100"}
            alt={author?.name || "Author"}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">
              {author?.name || "Unknown Author"}
            </h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <button title="Bookmark" className="hover:text-blue-600 transition">
            <FaRegBookmark />
          </button>
          <button title="Share" className="hover:text-blue-600 transition">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <Link href={`/news/${_id}`}>
          <h2 className="font-bold text-xl text-gray-800 hover:text-blue-600 transition leading-snug cursor-pointer">
            {title}
          </h2>
        </Link>

        <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image_url || thumbnail_url}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-gray-600 text-sm leading-relaxed">
          {details?.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <Link
                href={`/news/${_id}`}
                className="text-orange-500 font-bold hover:underline inline-block ml-1 cursor-pointer"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-600">
        <div className="flex items-center gap-2 text-orange-400">
          <div className="flex items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="opacity-40" />
          </div>
          <span className="font-bold text-gray-700 ml-1">
            {rating?.number || 4.5}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span className="font-medium">{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
