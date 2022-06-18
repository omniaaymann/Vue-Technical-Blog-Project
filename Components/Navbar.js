import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
const {data:session} = useSession()
  if (session) {
    return (
      <div>
        <nav className="container">
          <div
            className="row mt-5 mb-5"
            style={{ textTransofrm: "uppercase", fontWeight: "700" }}
          >
            <Link href="/">
              <a
                className="col-lg-6 col-md-3 col-sm-3"
                style={{
                  fontSize: "1.5rem",
                  fontweight: "400",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                GLAMMED UP
              </a>
            </Link>

            <Link href="/aboutus">
              <a
                className=" col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                ABOUT US
              </a>
            </Link>

            <Link href="/products">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                PRODUCTS
              </a>
            </Link>

            <Link href="/contactus">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                CONTACT-US
              </a>
            </Link>

            <Link href="/api/auth/signout">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                SIGN OUT
              </a>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
  else {
    return (
      <div>
        <nav className="container">
          <div
            className="row mt-5 mb-5"
            style={{ textTransofrm: "uppercase", fontWeight: "700" }}
          >
            <Link href='/'>
              <a
                className="col-lg-6 col-md-4 col-sm-3"
                style={{
                  fontSize: "1.5rem",
                  fontweight: "400",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                GLAMMED UP
              </a>
            </Link>
  
            <Link href="/aboutus">
              <a
                className=" col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                ABOUT US
              </a>
            </Link>
  
            <Link href="/products">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                PRODUCTS
              </a>
            </Link>
  
            <Link href="/contactus">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                CONTACT-US
              </a>
            </Link>
  
            <Link href="/api/auth/signin">
              <a
                className="col-lg-1 col-md-4 col-sm-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                SIGN IN
              </a>
            </Link>

          </div>
        </nav>
      </div>
      
    );
  }
};

export default Navbar;
