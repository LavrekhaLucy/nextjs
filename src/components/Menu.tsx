import Link from "next/link";

const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li><li>
                    <Link href="/cars">Users</Link>
                </li>

            </ul>
        </>
    );
};
export default Menu;