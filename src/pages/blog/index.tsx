import { getBlogById } from "@/api/blog";
import BlogContent from "@/components/BlogContent";
import Loader from "@/components/Loader";
import BlogContextProvider, { BlogContext } from "@/contexts/BlogContext";
import { getDay } from "@/helpers/date";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();
  const { blog, setBlog } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchBlog = async () => {
      try {
        const fetchedBlog = await getBlogById(blogId);
        setBlog(fetchedBlog.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchBlog();
  }, [blogId, setBlog]);

  if (loading) {
    return <Loader />;
  }

  const {
    title,
    content,
    banner,
    author: {
      personal_info: { username: authorUsername, profile_img },
    },
    publishedAt,
  }: any = blog;

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 py-10 max-lg:px-[5vw]">
      <h2 className="text-4xl leading-normal font-bold max-md:text-3xl tracking-tight">
        {title}
      </h2>
      <div className="border-t">
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-2 items-center mt-2 text-muted-foreground ">
            <img
              src={profile_img}
              className="w-6 h-6 rounded-full"
              alt="Author Profile"
            />
            <p className="line-clamp-1">
              @
              <Link to={`/user/${authorUsername}`} className="hover:underline">
                {authorUsername} ·
              </Link>
            </p>
            <p className="min-w-fit">{getDay(publishedAt)}</p>
          </div>
        </div>
      </div>
      <img src={banner} className="aspect-video" alt="Blog Banner" />
      <div className="font-serif text-xl leading-10 md:text-2xl">
        {content[0].blocks.map((blogItem: any, index: any) => {
          return (
            <div className="my-4 md:my-8" key={index}>
              <BlogContent item={blogItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BlogPageWrapper = () => (
  <BlogContextProvider>
    <BlogPage />
  </BlogContextProvider>
);

export default BlogPageWrapper;
