import Link from "next/link";

const NotFound = () => {
    return <div>
        <h1>Page can't be found</h1>
        <Link href="/">Click here</Link>
  </div>;
};

export default NotFound;
