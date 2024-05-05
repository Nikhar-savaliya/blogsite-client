import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();

  return <div>BlogPage of {id}</div>;
};

export default BlogPage;
