import {ReactNode, useEffect, useState} from "react";
import {get} from "./util/http";
import BlogPosts, {type BlogPost} from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

type RawBlogPosts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawBlogPosts[];

      const blogPosts: BlogPost[] = posts.map((post) => ({
        id: post.id,
        title: post.title,
        text: post.body,
      }));

      setFetchedPosts(blogPosts);
    }

    fetchPosts();
  });

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt='Fetching image depicting data fetching'
      />
      {content}
    </main>
  );
}

export default App;
