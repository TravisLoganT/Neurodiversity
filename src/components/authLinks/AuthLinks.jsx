import Link from "next/link";
import style from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "notAuthenticated";
  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={style.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
