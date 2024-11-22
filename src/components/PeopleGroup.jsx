import PeopleCard from "./PeopleCard";

const PeopleGroup = ({ title, obj }) => {
    return (
        <article>
            <h1 className="text-4xl font-bold mb-6 text-orange-500">{title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
                {obj.map((p, i) => (
                    <div className="m-5" key={i}>
                        <PeopleCard key={p.username} {...p} />
                    </div>
                ))}
            </div>
        </article>
    );
}

export default PeopleGroup;
