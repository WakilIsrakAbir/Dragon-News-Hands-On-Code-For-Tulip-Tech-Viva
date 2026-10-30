import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSidebar from "@/components/Homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

export const instant = false;

const NewsCatagoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "id");

  const categories = await getCategories();
  // console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  // console.log(news);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-7 my-[60px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      <div className="col-span-6 ">
        <h1 className="mb-1 font-bold text-2xl text-white text-center bg-purple-400 p-2 rounded-md">
          All News
        </h1>
        <div className="space-y-4 mt-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard news={n}  key={n._id} >
                </NewsCard>
              );
            })
          ) : (
            <h2>No News Found</h2>
          )}
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCatagoryPage;
