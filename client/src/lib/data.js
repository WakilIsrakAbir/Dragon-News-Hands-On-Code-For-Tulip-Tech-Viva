export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "force-cache",
    },
  );
  const data = await res.json();
  return data.data;
}

export async function getNewsByCategoryId(catagory_Id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catagory_Id}`,
    {
      cache: "force-cache",
    },
  );
  const data = await res.json();
  return data.data;
}

export async function getSingleNews(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
    {
      cache: "force-cache",
    },
  );
  const data = await res.json();
  return data.data?.[0] || null;
}
