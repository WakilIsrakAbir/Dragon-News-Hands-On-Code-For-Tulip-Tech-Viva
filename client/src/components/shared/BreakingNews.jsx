import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 0,
      title: "Russia and Ukraine Agree to Localized Humanitarian Ceasefire",
    },
    {
      id: 1,
      title:
        "US Orders Partial Diplomatic Evacuation in Saudi Arabia Amid Regional Tensions",
    },
    {
      id: 2,
      title: "Microsoft Offers Voluntary Buyouts to 60,000 Employees",
    },
    {
      id: 3,
      title:
        "Cyclone Arnab Nears India; Evacuations Underway in Coastal Regions",
    },
  ];

  return (
    <div className="container mx-auto flex items-center bg-purple-200 px-4 py-2 gap-4 rounded-md">
      <button className="btn bg-red-500 hover:bg-red-600 text-white border-none text-base">
        Latest News
      </button>
      <Marquee pauseOnHover={true}>
        {news.map((n) => {
          return (
            <span className="mx-8" key={n.id}>
              {n.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
