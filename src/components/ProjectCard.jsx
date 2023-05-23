import Image from 'next/image'

export const ProjectCard = () => {
    return (
        <article className="Project-card background box-shadow">
            <div className="Project-card-image">
                <Image
                    src={
                        'https://cristiandeveloper.com/storage/projects//YekAje4tXu4AKdtnzVXd2jQIQqVRO1rHp7Des8Jq.webp'
                    }
                    fill={true}
                    alt={'project-name'}
                />
            </div>
            <div className="card-content">
                <h1 className="text">Lorem ipsum dolor sit amet.</h1>
                <p className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, molestiae.
                </p>
                <button className="btn btn-secondary">Ver proyecto</button>
            </div>
        </article>
    )
}
