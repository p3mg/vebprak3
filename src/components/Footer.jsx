export function Footer(){
    return (
        <footer className="bg-red-500 text-white py-4 mt-10">
            <div className="container mx-auto px4 flex justify-between items-center text-sm">
                <span>© {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/p3mg"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                Repository
                </a>
            </div>
        </footer>
    )
}