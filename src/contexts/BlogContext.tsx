import React, { ReactNode, createContext, useState } from "react";

export const initialBlogStructure = {
  _id: "",
  blog_id: "",
  title: "",
  description: "",
  content: [],
  banner: "",
  author: { personal_info: { username: "", fullname: "", profile_img: "" } },
  activity: {
    total_likes: 0,
    total_comments: 0,
    total_reads: 0,
    total_parent_comments: 0,
  },
  comments: [],
  tags: [],
  publishedAt: "",
};

export const BlogContext = createContext<{
  blog: typeof initialBlogStructure;
  setBlog: React.Dispatch<React.SetStateAction<typeof initialBlogStructure>>;
}>({
  blog: initialBlogStructure,
  setBlog: () => {},
});

const BlogContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blog, setBlog] = useState(initialBlogStructure);

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
