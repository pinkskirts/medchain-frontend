import Link from "next/link";

function NotFoundPage() {
  return (
    <div>
      <h1>Page not found!</h1>
      <Link href="/">Back to HomePage</Link>
    </div>
  );
}

export default NotFoundPage;