import { getDay } from "@/helpers/date";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
const BlogPostCard = (props: any) => {
  let {
    publishedAt,
    tags,
    title,
    banner,
    description,
    blog_id: id,
    author,
  } = props;
  let {
    personal_info: { fullname, username, profile_img },
  } = author;

  let avatarFallBackText = fullname[0].toUpperCase();

  return (
    <div className="w-full flex gap-8 items-center justify-between border-b px-4 line-clamp-2">
      <div className="w-full">
        <div>
          <Link
            to={`/blog/${id}`}
            className="text-2xl font-bold tracking-tight hover:underline"
          >
            {title}
          </Link>
          <p className="my-2 text-base max-sm:hidden md:max-[1100px]:hidden line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex gap-2 items-center mt-2 text-zinc-500 ">
          <Avatar>
            <AvatarFallback className="font-bold bg-secondary text-secondary-foreground text-xl">
              {avatarFallBackText}
            </AvatarFallback>
            <AvatarImage src={profile_img} />
          </Avatar>
          <p className="line-clamp-1">@{username} · </p>
          <p className="min-w-fit">{getDay(publishedAt)}</p>
        </div>

        <div className="flex gap-2 my-4 flex-wrap">
          <Badge variant={"secondary"}>{tags[0]}</Badge>
          {tags[1] && <Badge variant={"secondary"}>{tags[1]}</Badge>}
          {tags[2] && <Badge variant={"secondary"}>{tags[2]}</Badge>}
        </div>
      </div>
      <div className="h-28 aspect-square rounded-md">
        <img
          src={banner}
          alt="banner image"
          className="w-full h-full aspect-square object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogPostCard;
