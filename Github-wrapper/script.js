const url = "https://api.github.com/users";

const searchInputEl = document.querySelector("#searchInput");
const searchButtonEl = document.querySelector("#searchBtn");
const profileContainerEl = document.querySelector("#profileContainer");
const loadingEl = document.querySelector("#loading");

const generateProfile = (profile) => {
    return (
        `
        <div class="profile-box">
        <div class="top-section">
           <div class="left">
            <div class="avatar">
                <img src="${profile.avatar_url}"/>
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h2>@${profile.login}</h2>
            </div>
           </div> 
           <a href="${profile.html_url}" target"_blank">
           <button class="primary-btn check">Check Profile</button>
           </a>
        </div>

        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>

        <div class="status">
            <div class="status-item">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-item">
                <h3>Followings</h3>
                <p>${profile.following}</p>
            </div>
            <div class="status-item">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>
   `
    )

}


const fetchProfile = async () => {

    const username = searchInputEl.value;

    loadingEl.innerText = "Loading.....";
    loadingEl.style.color = "green";


    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();

        if (data.bio){
            loadingEl.innerText = "";
            profileContainerEl.innerHTML = generateProfile(data);
        }else{
            loadingEl.innerHTML = data.message;
            loadingEl.style.color = "red";
            profileContainerEl.innerText = "";

        }

        console.log("data",data);
    } catch (error) {
        console.log({error});
        loadingEl.innerText = "";
    }
}
searchButtonEl.addEventListener("click",fetchProfile);