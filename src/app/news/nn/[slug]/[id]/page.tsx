import { useParams } from "react-router-dom";

const Page = () => {
  const { slug, id } = useParams();
  return (
    <div>
      <h1>
        news page nn slug {slug} {id}
      </h1>
    </div>
  );
};

export default Page;
