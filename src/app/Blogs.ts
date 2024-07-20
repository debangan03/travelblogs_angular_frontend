export interface Blogs {
  _id: string;
  name: string;
  title: string;
  description: string;
  imgurl: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  likes?: number; // Making likes optional
}
