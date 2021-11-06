let auth_link = "https://www.strava.com/oauth/token"

//get activity

function getActivity(access_token) {

    let activity_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}`
        fetch(activity_link)
            .then(res => console.log(res.json()))
}

//get stats

// function getStats(access_token, _id) {

//     let stats_link = `https://www.strava.com/api/v3/athletes/${_id}/stats?access_token=${access_token}`
//         fetch(stats_link)
//             .then(res => console.log(res.json()))
// }

// get athlete function

// function getAthlete(access_token) {

// let athlete_link = `https://www.strava.com/api/v3/athlete?access_token=${access_token}`
//     fetch(athlete_link)
//         .then(res => res.json())
//         .then(res => {
//             let id = res.id;
//             getStats(access_token, id);
//         })
// }

//Authenticate User

function reAuthorize() {
    fetch(auth_link, {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            client_id: '73665',
            client_secret: "70924964e21853dbe2e4a0b5e529891d5269e9ee",
            refresh_token: "a53503998cb969d0eef0ecfb8899154990bd1856",
            grant_type: "refresh_token"
        })
    })
    .then(res => res.json())
    .then(data => {
        let token = data.access_token;
        getActivity(token);

    })
}

