import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to={"/contact"}>
        <p>To contanct</p>
      </Link>
      <p>To contanct</p>
    </div>
  );
};
