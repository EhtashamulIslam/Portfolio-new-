// app/page.js
import { personalData } from "@/utils/data/personal-data";
import HomeClient from "./components/homepage/HomeClient";

async function getData() {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }
    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return []; // Fallback to prevent build failure
  }
}

export default async function Home() {
  const blogs = await getData();
  return <HomeClient blogs={blogs} />;
}