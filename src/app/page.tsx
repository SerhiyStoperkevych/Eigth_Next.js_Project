import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/recipe">Recipe</Link>
      <Link href="/new">New Recipe</Link>
      <Link href="/search">Search</Link>
    </div>
  );
}
