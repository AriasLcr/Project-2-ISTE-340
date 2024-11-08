import PeopleModal from "./PeopleModal"

const PeopleGroup = ({title, obj}) => {
    return (
        <>
            <h1>{title}</h1>

            <div className="peopleList">
                {/* Loop */}
                {obj.map((p)=>
                    <div className="peopleListItem" key={p.username}>
                        <img src={p.imagePath} alt="pic person"/>
                        <PeopleModal {...p} />
                    </div>
                )};
            </div>
        </>
    )
}

export default PeopleGroup;