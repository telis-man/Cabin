import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>This is a home page</div>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default Home;
