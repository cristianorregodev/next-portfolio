export const Banner = ({
    title = 'Lorem ipsum noe truwen am',
    author = 'Cristian Orrego',
    date = 'hace 8 días',
    category = 'Programación',
}) => {
    return (
        <section className="Banner-container">
            <div className="Banner-content container">
                <h1>{title}</h1>
                <ul>
                    <li>
                        <span>Author:</span> {author}
                    </li>
                    <li>
                        <span>Categoría:</span> {category}
                    </li>
                    <li>
                        <span>Publicado:</span> {date}
                    </li>
                </ul>
            </div>
        </section>
    )
}
