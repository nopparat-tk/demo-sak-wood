import Link from "next/link";
// import { useRouter } from "next/router"
// import { Link } from "@/i18n/navigation";

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="teak">Thai Teak Products</Link>
        </li>
        <li>
          <Link href="hardwoods">Hardwoods Products</Link>
        </li>
        {/* <li>
               <Link href="merbau">Merbau</Link>
            </li> */}
        {/* <li>
               <Link href="Mersawa">Mersawa</Link>
            </li>
            <li>
               <Link href="Keruing">Keruing</Link>
            </li> */}
        <li>
          <Link href="contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
