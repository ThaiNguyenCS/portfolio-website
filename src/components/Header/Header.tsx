export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-[1000px]">
            <nav
                className="mx-auto rounded-2xl 
                  bg-neutral-900/70 backdrop-blur px-6 py-3
                  shadow-lg ring-1 ring-white/10"
            >
                <div className="flex items-center justify-between gap-6">
                    <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
                        <li>Home</li>
                        <li>Who am I?</li>
                        <li>My Projects</li>
                        <li>My Skills</li>
                        <li>Get In Touch</li>
                    </ul>
                    <div className="flex items-center gap-4 text-neutral-300">in Beh tw</div>
                </div>
            </nav>
        </header>
    );
}
