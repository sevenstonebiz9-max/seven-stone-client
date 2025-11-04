
import AllNews from "@/components/pages/AllNews";
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Stories & Insights - Sevenstone ltd",
  description: "Read whats happening at Sevenstones",
}

const Page = () => {
  return (
    <main>
      <AllNews/>
    </main>
  );
};

export default Page;
