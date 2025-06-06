import Link from "next/link";

const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/public">Home</Link>
                </li><li>
                    <Link href="/cars">Cars</Link>
                </li>

            </ul>
        </>
    );
};
export default Menu;