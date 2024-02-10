import { Link } from "react-router-dom";

export function Top() {
  return (
    <>
      <h1>Top page</h1>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <Link to="dashbord">Go to dashbord page</Link>
        <Link to="profile">Go to profile page</Link>
      </div>
    </>
  );
}
