import User from "./UserType";

interface Activity {
  total_likes: number;
  total_comments: number;
  total_reads: number;
  total_parent_comments: number;
}

interface Blog {
  blog_id: string;
  title: string;
  banner?: string;
  description?: string;
  content?: any[];
  tags?: string[];
  author: User;
  activity: Activity;
  draft?: boolean;
  publishedAt: Date;
}

export default Blog;
