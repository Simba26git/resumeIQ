import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="group">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <p className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform duration-200">ResumeIQ</p>
                </div>
            </Link>
            <Link to="/upload" className="primary-button w-fit px-8 py-3 text-lg font-semibold">
                <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload Resume
                </span>
            </Link>
        </nav>
    )
}
export default Navbar
