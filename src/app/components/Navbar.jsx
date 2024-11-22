import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                    {/* Logo or Brand */}
                    
                    {/* Links */}
                    <div className="flex mx-auto justify-center gap-x-5 py-2">
                        <Link href="/" className="nav-link">
                            <span className="flex items-center">
                                <i className="fas fa-user mr-2" />
                                Home
                            </span>
                        </Link>
                        <Link href="/personal/aboutme" className="nav-link">
                            <span className="flex items-center">
                                <i className="fas fa-user mr-2" />
                                About
                            </span>
                        </Link>
                        <Link href="/personal/resume" className="nav-link">
                            <span className="flex items-center">
                                <i className="fas fa-file-alt mr-2" />
                                Resume
                            </span>
                        </Link>
                        <Link href="/personal/contactme" className="nav-link">
                            <span className="flex items-center">
                                <i className="fas fa-address-book mr-2" />
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
