//DELETE remove show
const deleteButtons = document.getElementsByClassName('delete');

const deleteHandler = (event) => {
    console.log("id: ",event.target.id);

    fetch(`/api/shows/${event.target.id}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/shows'));
};

for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteHandler)
}


//POST add new show
const submitBtn = document.getElementById('submitBtn');

const addShowHandler = (event) => {
    let newShow = {
        title: document.getElementById('show_title').value,
        season: document.getElementById('season').value,
        release_year: document.getElementById('release_year').value,
    }
    console.log(newShow);


    fetch(`/api/shows/`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShow),
    }).then(() => window.location.replace('/shows'))
};


submitBtn.addEventListener('click', addShowHandler);