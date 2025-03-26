import { useParams } from "react-router-dom";

const Page = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>news page nn slug {slug}</h1>
    </div>
  );
};

export default Page;
