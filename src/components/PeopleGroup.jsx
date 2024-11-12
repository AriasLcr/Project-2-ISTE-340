import PeopleCard from "./PeopleCard";

const PeopleGroup = ({ title, obj }) => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-6">{title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
                {obj.map((p) => (
                    <div className="m-5">
                        <PeopleCard key={p.username} {...p} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default PeopleGroup;
