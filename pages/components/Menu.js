export default function Menu() {
    return (
        <div >
            <div className="absolute object-left pl-4 pt-2">
                <a href="/" className="flex">
                    <img src="LogoCompleta.png" className="h-10 inline" />
                </a>
            </div>
            <nav className="bg-orange-300 h-14 w-full flex flex-nowrap items-center justify-end text-white font-mono font-semibold p-4">
                <div className="font-sans">
                    <ul className="w-full flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-blue-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/informe-se" className="hover:text-blue-900">
                                Informe-se
                            </a>
                        </li>
                        <li>
                            <a href="/pesquisa" className="hover:text-blue-900">
                                Pesquisa
                            </a>
                        </li>
                        <li>
                            <a href="/agenda" className="hover:text-blue-900">
                                Agenda
                            </a>
                        </li>
                        <li>
                            <a href="/noticias" className="hover:text-blue-900">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/indicacoes" className="hover:text-blue-900">
                                Indicações
                            </a>
                        </li>
                        <li>
                            <a href="/labin" className="hover:text-blue-900">
                                LABIN
                            </a>
                        </li>
                        <li>
                            <a href="/contato" className="hover:text-blue-900">
                                Contato
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-blue-900" href="Login">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg></a>
                        </li>
                    </ul>
                    <div className="hover:text-orange-900">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}