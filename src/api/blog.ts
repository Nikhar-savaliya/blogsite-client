import { api } from "./config";

async function getBlogById(blogId: any): Promise<any> {
  try {
    const serverResponse = await api.post("/blogs/get-blog", { blogId });
    return serverResponse;
  } catch (error) {
    throw error;
  }
}

export { getBlogById };
