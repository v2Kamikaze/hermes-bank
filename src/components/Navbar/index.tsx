export function Navbar() {
    return (
        <nav className="border-b">
            <div className="flex justify-between items-center m-4 max-w-5xl mx-auto">
                <img src="https://ceosjr.com/images/ceos_logo.svg" alt="" />
                <ul className="flex gap-2">
                    <li className="">Início</li>
                    <li>Serviços</li>
                    <li>Objetivos</li>
                    <li>Nosso Time</li>
                    <li>Sobre Nós</li>
                </ul>
            </div>
        </nav>
    )
}