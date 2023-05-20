import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to={"/about"}>
        <p>To about</p>
      </Link>
      <p>To about</p>
    </div>
  );
};
