export default function Menu() {
    return (
        <div>
            <nav className="bg-orange-300 sm:text-base lg:text-xl xl:text-xl text-white font-mono font-semibold text-lg">
                <div className="">
                    <div className="absolute object-left p-4">
                        <a href="/" className="">
                            <img src="LogoCompleta.png" className="w-32" />
                        </a>
                    </div>
                    <ul className="flex items-stretch space-x-4 p-8 justify-end text-center flex-col md:flex-row ">
                        <li>
                            <a href="/" className="hover:text-orange-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/informe-se" className="hover:text-orange-900">
                                Informe-se
                            </a>
                        </li>
                        <li>
                            <a href="/pesquisa" className="hover:text-orange-900">
                                Pesquisa
                            </a>
                        </li>
                        <li>
                            <a href="/agenda" className="hover:text-orange-900">
                                Agenda
                            </a>
                        </li>
                        <li>
                            <a href="/noticias" className="hover:text-orange-900">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/indicacoes" className="hover:text-orange-900">
                                Indicações
                            </a>
                        </li>
                        <li>
                            <a href="/labin" className="hover:text-orange-900">
                                LABIN
                            </a>
                        </li>
                        <li>
                            <a href="/contato" className="hover:text-orange-900">
                                Contato
                            </a>
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