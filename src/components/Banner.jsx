import { AiOutlineTag, AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai'

export const Banner = ({
    title = 'Próximamente',
    author = '',
    date = '',
    category = '',
    image = '/banner-two.svg',
    description = '',
}) => {
    return (
        <section className="Banner-container" style={{ backgroundImage: `url(${image})` }}>
            <div className="Banner-content container">
                <h1>{title}</h1>
                {author && (
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
                )}
                {description && <p>{description}</p>}
            </div>
        </section>
    )
}
