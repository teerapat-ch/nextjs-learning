import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-12 text-3xl h-12 bg-base-300">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};
export default Navbar;
