import { Link } from "react-router-dom";

export function PageFour() {
  return (
    <div>
      <main>
        <p>Page 4</p>

        <Link to="/">Go Home (remix)</Link>
        <br />
        <Link to="/page2">Go to page 2 (old)</Link>
        <br />
        <Link to="/page3">Go to page 3 (remix)</Link>
      </main>
    </div>
  );
}
