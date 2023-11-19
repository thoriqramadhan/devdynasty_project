import { Link } from "react-router-dom";

export default function Footer() {
    return (


        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2023 <Link to="https://devdynasty-project.vercel.app/" className="hover:underline">MuseumJava™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}