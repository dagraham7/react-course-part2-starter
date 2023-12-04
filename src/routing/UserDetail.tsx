import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  console.log(params);
  console.log(location);
  console.log(searchParams.get("id"));

  return <p>User {params.id}</p>;
};

export default UserDetail;
