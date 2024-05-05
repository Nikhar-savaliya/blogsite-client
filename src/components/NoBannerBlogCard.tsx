import { getDay } from "@/helpers/date";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NoBannerBlogCard = (blog: any) => {
  let {
    title,
    blog_id: id,
    author: {
      personal_info: { fullname, username, profile_img },
    },
    publishedAt,
  } = blog;

  let avatarFallBackText = fullname[0].toUpperCase();

  return (
    <Link
      to={`blog/${id}`}
      className="w-full flex gap-8 items-center justify-start border-b pb-5 mb-4"
    >
      <div className="flex flex-col gap-2">
        <h1 className="blog-title font-semibold text-secondary-foreground text-base leading-6">
          {title}
        </h1>
        <div className="flex gap-2 items-center">
          <Avatar className="w-6 h-6">
            <AvatarFallback className="font-bold bg-secondary text-secondary-foreground text-xl">
              {avatarFallBackText}
            </AvatarFallback>
            <AvatarImage src={profile_img} />
          </Avatar>
          <p className="line-clamp-1 text-sm">@{username} · </p>
          <p className="min-w-fit text-sm">{getDay(publishedAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default NoBannerBlogCard;
