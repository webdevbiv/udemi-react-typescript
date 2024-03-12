import {ReactNode, useEffect, useState} from "react";
import {get} from "./util/http";
import BlogPosts, {type BlogPost} from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawBlogPosts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const posts = (await get(
          "https://jsonplaceholder.typicode.com/posts123"
        )) as RawBlogPosts[];

        const blogPosts: BlogPost[] = posts.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));

        setFetchedPosts(blogPosts);
      } catch (error) {
        console.log(error);

        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    console.log(error);

    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id='loading-fallback'>Fetching posts...</p>;
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
