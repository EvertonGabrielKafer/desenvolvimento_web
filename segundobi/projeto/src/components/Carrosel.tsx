interface ICarosselProps {
    src: string;
    src2: string;
    src3: string;
    p1: string;
    p2: string;
    p3: string;
}

export default function Card({ src, src2, src3, p1, p2, p3 }: ICarosselProps) {
    return (
        <div className="carousel-card">
            <img src={src} alt="Imagem perfil cliente" />
            <span className="testimony">
                <p>
                    {p1}
                </p>
            </span>
            <span className="rating">
                <img src={src2} alt="ícone estrela" width={22} height={20} />
                <img src={src2} alt="ícone estrela" width={22} height={20} />
                <img src={src2} alt="ícone estrela" width={22} height={20} />
                <img src={src2} alt="ícone estrela" width={22} height={20} />
                <img src={src3} alt="ícone estrela" width={20} height={22} />
            </span>
            <span className="names">
                <p>{p2}</p>
                <p>{p3}</p>
            </span>
        </div>
    )
}