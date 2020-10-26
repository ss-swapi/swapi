import {graphql} from "graphql";
import {REQUEST_PEOPLE, RECEIVED_PEOPLE} from "redux/actionTypes";
import schema from "graphql/schema/Schema";


const requestPeople = () => ({
    type: REQUEST_PEOPLE,
    payload: {
        isLoading: true,
    }
});


const receivedPeople = (personList) => ({
    type: RECEIVED_PEOPLE,
    payload: {
        isLoading: false,
        ...personList
    }
});


const fetchPeople = (next = '') => {
    return function (dispatch) {
        dispatch(requestPeople());

        return graphql(schema, `{ 
            personList(url:"${next}") {
                count
                next
                people {
                    name
                    height
                    mass
                    birthYear
                    url
                    homeworld {
                        name
                    }
                }
            } 
        }`).then((response) => {
            dispatch(receivedPeople(response.data.personList));
            console.log(JSON.stringify(response));
        }).catch(e => {
            debugger
        })
    };
}

export {fetchPeople};
