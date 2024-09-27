import {  getMyPostsFeed } from "@/actions/post";
import HomeView from "@/sections/home/view/HomeView";
import { currentUser } from "@clerk/nextjs";
import { QueryClient } from "@tanstack/react-query";

export const metadata = () => {
  return {
    title: `No Idea!`,
    description: `Born to Rule`,
  };
};

const HomePage = async () => {
  const queryClient = new QueryClient();
  const user = await currentUser()
  // get posts
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "all"],
    queryFn: ({ pageParam = "" }) => getMyPostsFeed(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage?.metaData.lastCursor;
    },
    enabled: !!user,
  });

  return <HomeView />;
};

export default HomePage;
