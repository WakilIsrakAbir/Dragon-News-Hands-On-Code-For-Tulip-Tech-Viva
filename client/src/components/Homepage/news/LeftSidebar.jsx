import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="border border-blue-400 rounded-2xl">
      <h1 className="mb-4 font-bold text-2xl text-white text-center bg-blue-400 p-2 rounded-t-2xl">
        All Catagories
      </h1>
      <ul className="flex flex-col gap-3 p-3">
        {categories?.news_category?.map((catagory) => {
          const isActive = activeId === catagory.category_id;
          return (
            <li
              key={catagory.category_id}
              className={`${
                isActive
                  ? "bg-green-500 text-white"
                  : "bg-blue-50 text-gray-700 hover:bg-blue-100"
              } p-2 rounded-2xl font-bold text-center text-lg transition`}
            >
              <Link className="block" href={`/category/${catagory.category_id}`}>
                {catagory.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
