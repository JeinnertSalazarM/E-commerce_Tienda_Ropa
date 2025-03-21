import Link from "next/link";

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#"
    },
    {
        id: 2,
        name: "Productos",
        link: "#"
    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "#"
    },
    {
        id: 4,
        name: "Politica de privacidad",
        link: "#"
    }
]



const Footer = () => {
    return (
        <footer className="bg-black mt-4 text-yellow-400" >
            <div className="mx-auto mb-2 p-4 md:py-8 w-full max-w-screen-xl">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p>
                        <span>
                            Doraly Boutique E-commerce
                        </span>

                    </p>



                    <ul className="flex flex-wrap items-center mb-6 sm:mb-0 font-medium text-sm">

                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className="me-4 md:me-6 hover:underline">{data.name}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>


            <span className="block text-yellow-400 text-sm sm:text-center">
                &copy; 2025 Doraly Boutique.Todos los derechos reservados.
            </span>

        </footer>
    );
}

export default Footer;

