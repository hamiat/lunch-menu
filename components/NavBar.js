import { styles } from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <Image src={"/logo.png"} alt="company logo" width={70} height={70} />
        </div>
        <ul>
          <Link href="/" passHref>
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/about" passHref>
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link href="/drinks" passHref>
            <li>
              <a>Drinks</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
