const shows = [
    {
        id: 1,
        title: "King of the Hill",
        season: 1,
        release_year: 1997
    }
];
let index = 1;

//GET
const getShows = () => {
    return shows;
};

//POST
const addShow = (show) => {
    show.id = ++index;
    shows.push(show);
    return shows[shows.length -1];
};


//DELETE
const deleteShow = (id) => {
    const foundIndex = shows.findIndex((el) => id == el.id);
    let result;
    if(foundIndex == -1){
        result = { error : "Id not found."}
    } else {
        result = shows[foundIndex];
        shows.splice(foundIndex, 1);
    };
    return result;
};

//PATCH
const updateShow = (req) => {
        const foundIndex = shows.findIndex((el) => req.body.id == el.id);
        let result;
        if(foundIndex === -1){
            result = { error : "Id not found."}
        } else {
            shows.fill(req.body, foundIndex, foundIndex +1);
            result = shows[foundIndex]
            //object.keys and foreach
        }
        return result;
};
    

//PUT
const updateOrAdd = (req) => {
    const foundIndex = shows.findIndex((el) => req.body.id === el.id);
    let result;
    if(foundIndex === -1){
        shows.push(req.body);
        // req.body.id = index++;
        req.body.id = ++index;
        result = {
            error:"Id not found. Created new.", 
            data: req.body
        };
    } else {
        shows.fill(req.body, foundIndex, foundIndex +1);
        result = shows[foundIndex]
    }
    console.log(result)
    return result;
};


module.exports = {
    getShows,
    addShow,
    updateOrAdd,
    deleteShow,
    updateShow
};