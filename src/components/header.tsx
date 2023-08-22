const buttons = [
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'CV', link: '/cv'},
    {name: 'Blogs', link: '/blogs'},
];

export default function Header() {
    return (
        <header
            className="flex fixed justify-between items-center text-lg p-8 w-full z-50 select-none backdrop-blur"
        >
            <a
                href="/"
            >
                <h1
                    className="font-bold text-2xl text-primary-600"
                >
                    Doyun Park
                </h1>
            </a>
            <div
                className="flex gap-6"
            >
                {buttons.map(({name, link}, i)=> (
                    <a 
                        key={i}
                        href={link}
                    >
                        <button
                            className="text-primary-500 border-b-2 hover:text-primary-700 hover:border-primary-700"
                        >
                            {name}
                        </button>
                    </a>
                ))}
            </div>
        </header>
    )
} 