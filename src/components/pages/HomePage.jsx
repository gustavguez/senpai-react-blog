import { BlogCard } from "../common/BlogCard";
import header from "../../assets/header.webp";

export function HomePage() {
  return (
    <>
      <div>
        <img src={header} className="img-fluid w-100" />
      </div>

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-12 mt-2">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}
