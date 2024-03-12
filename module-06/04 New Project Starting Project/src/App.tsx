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
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const posts = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawBlogPosts[];

        const blogPosts: BlogPost[] = posts.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }

        // setError("Something went wrong!");
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <p id='error-message'>{error}</p>;
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
