import { Link } from "react-router-dom";

export function PageTwo() {
  return (
    <div>
      <main>
        <p>Page 2 (old)</p>

        <Link to="/">Go home (remix)</Link>
        <br />
        <Link to="/page3">Go to page 3 (remix)</Link>
        <br />
        <Link to="/page4">Go to page 4 (old)</Link>
      </main>
    </div>
  );
}
