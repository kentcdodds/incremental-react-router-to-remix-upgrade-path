import { Link } from "@remix-run/react";

export default function Page3() {
  return (
    <div>
      <main>
        <p>Page 3 (remix)</p>

        <Link to="/">Go home (remix)</Link>
        <br />
        <Link to="/page3">Go to page 3 (remix)</Link>
        <br />
        <Link to="/page4">Go to page 4 (old)</Link>
      </main>
    </div>
  );
}
