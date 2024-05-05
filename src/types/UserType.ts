interface PersonalInfo {
  fullname: string;
  email: string;
  password: string;
  username: string;
  bio?: string;
  profile_img?: string;
}

interface SocialLinks {
  youtube?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

interface AccountInfo {
  total_posts: number;
  total_reads: number;
}

interface User {
  personal_info: PersonalInfo;
  social_links: SocialLinks;
  account_info: AccountInfo;
  blogs: [];
  joinedAt: Date;
}

export default User;
