import { AiOutlineTag, AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai'

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
                        <AiOutlineUser /> {author}
                    </li>
                    <li>
                        <AiOutlineTag /> {category}
                    </li>
                    <li>
                        <AiOutlineCalendar /> {date}
                    </li>
                </ul>
            </div>
        </section>
    )
}
