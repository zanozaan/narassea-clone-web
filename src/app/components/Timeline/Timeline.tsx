import Header from "./Header";
import Content_img from "./Content_img";
import Comment from "./Comment";

export default function Timeline() {
  return (
    <div className="max-w-[570px] border-[1px] py-7 justify-between">
      <Header />
      <Content_img />
      <Comment />
    </div>
  );
}
