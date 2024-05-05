import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BlogPostCard from "./components/BlogPost";
import { Button } from "./components/ui/button";
import { TrendingUp } from "lucide-react";
import NoBannerBlogCard from "./components/NoBannerBlogCard";
import InPageNavigation, { activeTabRef } from "./components/InPageNavigation";

const Home = () => {
  let categories = [
    "computer science",
    "tech",
    "travel",
    "cooking",
    "health",
    "ai",
    "social media",
  ];

  const [pageState, setPageState] = useState("home");

  useEffect(() => {
    activeTabRef.current.click();
  }, [pageState]);

  return (
    <section className=" grid grid-cols-3 gap-8 h-cover py-8">
      <LeftPanelComponent pageState={pageState} />
      <RightPanelComponent
        pageState={pageState}
        categories={categories}
        setPageState={setPageState}
      />
    </section>
  );
};

const LeftPanelComponent = ({ pageState }: any) => {
  const homepageBlogs = {
    blogs: [
      {
        activity: {
          total_likes: 4,
          total_comments: 0,
          total_reads: 154,
          total_parent_comments: 0,
        },
        blog_id:
          "this-is-test-blog-to-check-if-every-style-works-PRl1LVaAlJUzPs4gNwOW-",
        title: "This Blog is Edited on 5 feb by me",
        banner:
          "https://firebasestorage.googleapis.com/v0/b/quill-blogs.appspot.com/o/1707027846138_cat_pacman.png?alt=media&token=c6f9c682-f997-40b6-a2c8-4de7012866ea",
        description:
          "this is test blog added to see if all styles of blog component works or not",
        tags: ["edited"],
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-02-05T06:48:41.726Z",
      },
      {
        activity: {
          total_likes: 0,
          total_comments: 0,
          total_reads: 192,
          total_parent_comments: 0,
        },
        blog_id:
          "this-is-test-blog-to-check-if-every-style-works-wqCU9Yuw9hTl2HSxno1tz",
        title: "this is test blog to check if every style works.",
        banner:
          "https://firebasestorage.googleapis.com/v0/b/quill-blogs.appspot.com/o/1707027846138_cat_pacman.png?alt=media&token=c6f9c682-f997-40b6-a2c8-4de7012866ea",
        description:
          "this is test blog added to see if all styles of blog component works or not",
        tags: ["test"],
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-02-04T06:46:36.886Z",
      },
      {
        activity: {
          total_likes: 4,
          total_comments: 0,
          total_reads: 51,
          total_parent_comments: 0,
        },
        blog_id: "this-is-a-quill-blogsHYy0_kD3pyi1I5dLB32nB",
        title: "this is a quill blogs",
        banner:
          "https://firebasestorage.googleapis.com/v0/b/quill-blogs.appspot.com/o/1706592781174_quill-pen.png?alt=media&token=8afb5322-ff59-470c-adf8-9a23b559e17f",
        description: "this is a test blog",
        tags: ["tech"],
        author: {
          personal_info: {
            fullname: "nikhar",
            username: "temp-GxKbH",
            profile_img:
              "https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bella",
          },
        },
        publishedAt: "2024-01-30T05:33:36.851Z",
      },
    ],
  };
  return (
    <div className=" col-span-2 flex flex-col gap-8">
      <InPageNavigation
        routes={[pageState, "treading blogs"]}
        defaultHidden={["treading blogs"]}
      >
        {homepageBlogs.blogs.map((blog, index) => {
          return <BlogPostCard {...blog} key={index} />;
        })}
        <Button variant={"link"} className="w-fit">
          Load more
        </Button>
      </InPageNavigation>
    </div>
  );
};

const RightPanelComponent = ({
  pageState,
  setPageState,
  categories,
}: {
  pageState: string;
  setPageState: Dispatch<SetStateAction<string>>;
  categories: string[];
}) => {
  const trendingBlogs: any = {
    blogs: [
      {
        blog_id:
          "this-is-test-blog-to-check-if-every-style-works-PRl1LVaAlJUzPs4gNwOW-",
        title: "This Blog is Edited on 5 feb by me",
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-02-05T06:48:41.726Z",
      },
      {
        blog_id:
          "this-is-test-blog-to-check-if-every-style-works-wqCU9Yuw9hTl2HSxno1tz",
        title: "this is test blog to check if every style works.",
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-02-04T06:46:36.886Z",
      },
      {
        blog_id: "this-is-a-quill-blogsHYy0_kD3pyi1I5dLB32nB",
        title: "this is a quill blogs",
        author: {
          personal_info: {
            fullname: "nikhar",
            username: "temp-GxKbH",
            profile_img:
              "https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bella",
          },
        },
        publishedAt: "2024-01-30T05:33:36.851Z",
      },
      {
        blog_id: "this-is-quill-blogsw1j9y_dz5hvg8nXF76NyY",
        title: "this is quill blogs",
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-01-30T05:32:45.400Z",
      },
      {
        blog_id:
          "I-strongly-recommend-trying-Ubuntu-It-s-a-fantastic-operating-system-F4Vilgm_8_Gh9mOONBxbY",
        title:
          "I strongly recommend trying Ubuntu. It's a fantastic operating system!",
        author: {
          personal_info: {
            fullname: "nikhar s",
            username: "nikhar663",
            profile_img:
              "https://lh3.googleusercontent.com/a/ACg8ocJLCqPia7lMAsyhNFvNeK0geVG0JUwa61mUWqe-CgKv9A=s384-c",
          },
        },
        publishedAt: "2024-01-23T12:58:51.762Z",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="font-semibold text-xl mb-8 capitalize">
          Recommanded Topics
        </h1>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category: string, index: number) => {
            return (
              <Button
                variant={"secondary"}
                key={index}
                className={`capitalize ${
                  pageState == category
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : ""
                } `}
                onClick={(e: any) => {
                  let category = e.target.innerText.toLowerCase();
                  if (pageState == category) {
                    setPageState("home");
                    return;
                  }
                  return setPageState(category);
                }}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="flex gap-1 font-semibold text-xl mb-8 capitalize">
          Trending
          <TrendingUp width={18} />
        </h1>
        {trendingBlogs.blogs.map((blog: any, index: number) => {
          return <NoBannerBlogCard {...blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
