import { Link } from "@remix-run/react";

export default function Page3() {
  return (
    <div>
      <main>
        <p>Home (remix)</p>

        <Link to="/page2">Go to page 2 (old)</Link>
        <br />
        <Link to="/page3">Go to page 3 (remix)</Link>
        <br />
        <Link to="/page4">Go to page 4 (old)</Link>
      </main>
    </div>
  );
}
