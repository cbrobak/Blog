import Counter from "./Counter";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="p-20 border border-gray-700 mb-5">
        <ul className="flex justify-around border rounded-md border-gray-600 mb-5 p-5">
          <li className=""><Link href="/" className="">Home</Link></li>
          <li className=""><Link href="/about" className="">About</Link></li>
          <li className=""><Link href="/about/projects" className="">Projects</Link></li>
        </ul>
        <Counter />
      </header>
    </>
  );
}
