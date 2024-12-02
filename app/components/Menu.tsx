import Link from "next/link";

const Menu = () => {

    return (
        <div className="flex flex-col">
            <Link href="/genres/country" className="p-3 my-3 bg-blue-500 hover:bg-blue-200 rounded-xl text-white">Country</Link>
            <Link href="/genres/hiphop" className="p-3 my-3 bg-blue-500 hover:bg-blue-200 rounded-xl text-white">Hip-Hop</Link>
            <Link href="/genres/pop" className="p-3 my-3 bg-blue-500 hover:bg-blue-200 rounded-xl text-white">Pop</Link>
            <Link href="/genres/rock" className="p-3 my-3 bg-blue-500 hover:bg-blue-200 rounded-xl text-white">Rock</Link>
        </div>
    )
}

export default Menu