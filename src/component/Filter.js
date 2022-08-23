import React, {useEffect} from "react";

const Filter = ({searchTerm, setSearchTerm, filter}) => {

    const sethandleChange = (event) => {
        setSearchTerm(event.target.value);
        filter(searchTerm);
    }

    useEffect( () => {
        filter(searchTerm)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={sethandleChange} value={searchTerm}/>
                <input type="submit" hidden/>
            </form>
        </>
    )
}

export default Filter;