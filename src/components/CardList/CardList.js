import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {fetchPeople} from "redux/actions";
import PersonCard from  'components/PersonCard/PersonCard'
import './CardList.scss'
function CardList() {
    const dispatch = useDispatch();
    const isInitialMount = useRef(true);
    const {people, next, isLoading} = useSelector((state)=> Object.assign({}, state));

    const getButtonText = function(next, isLoading){
        if(isLoading){
            return "Loading..."
        } else if(!next){
            return 'All People Loaded'
        }
        return 'Load More'
    }

  /*  useEffect(() => {
        dispatch(fetchPeople());
    },[dispatch]);*/

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            dispatch(fetchPeople());
        }
    });

    return (
        <div className="card-list">
            <div className="flex-grid">
                {people.map(person => (
                    <div className="col" key={person.url}>
                        <PersonCard {...(person)} />
                    </div>
                ))}
            </div>
            <button onClick={() => dispatch(fetchPeople(next))} disabled={!next || isLoading}>{getButtonText(next, isLoading)}</button>
        </div>
    );
}

export default CardList;
