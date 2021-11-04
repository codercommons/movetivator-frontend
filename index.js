let auth_link = "https://www.strava.com/oauth/token"

// get activity function

function getActivity(access_token) {

let activity_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}`
    fetch(activity_link)
        .then(res => console.log(res.json()))
}

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
reAuthorize();