/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const entryPoint= document.querySelector('.cards')
// axios.get("https://api.github.com/users/krisdmonroe")
//   .then(response => {
//     console.log(response);
//       const newPerson = gitHub(response);
//       entryPoint.appendChild(newPerson);
//     });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
let followersArray = [];

// axios.get(`https:api.github.com/users/krisdmonroe/followers`).then(response =>{
// followersArray = response.data
// return response.data;
// }).then(userNames => {
//   userNames.forEach(data => {
//   axios.get(data.url)
//   .then(info => {
//     const cardRespone = gitHub(info.data)
//     entryPoint.appendChild(cardRespone)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//     });
// })
// Step 3: Create a function that accepts a single object as its only argument,
//          Using DOM methods and properties, create a component that will return the following DOM element:
function gitHub(info) {
const
// create element............................

  newCard = document.createElement('div');
  newImg = document.createElement('img');
  cardInfo = document.createElement('div');
      newUsersName = document.createElement('h3');
      newUsersUserName = document.createElement('p');
      newLocation = document.createElement('p');
      newProfile = document.createElement('p');
        newProfileHref = document.createElement('a');
      newFollowers = document.createElement('p');
      newFollowing = document.createElement('p');
      newBio = document.createElement('p');

//class list................................

newCard.classList.add('card');
newImg.classList.add('card-info');
newUsersName.classList.add('name');
newUsersUserName.classList.add('username');
newProfileHref.href = info.html_url;

//Text Content.............................

newImg.src = info.avatar_url

newUsersName.textContent = info.name
newUsersUserName.textContent = info.login
newLocation.textContent = `location:${info.location}`;
newProfile.textContent = `Profile: `;
newProfileHref.textContent = info.html_url;
newFollowers.textContent = `Followers:${info.followers}`;
newFollowing.textContent = `Following::${info.following}`;
newBio.textContent = `Bio::${info.bio}`;
//Append children................................

newCard.appendChild(newImg);
newCard.appendChild(cardInfo);
  cardInfo.appendChild(newUsersName);
  cardInfo.appendChild(newUsersUserName);
  cardInfo.appendChild(newLocation);
  cardInfo.appendChild(newProfile);
  newProfile.appendChild(newProfileHref);
  cardInfo.appendChild(newFollowers);
  cardInfo.appendChild(newFollowing);
  cardInfo.appendChild(newBio);

return newCard;
}
//<div class="card">
//  <img src={image url of user} />
//  <div class="card-info">
//    <h3 class="name">{users name}</h3>
//    <p class="username">{users user name}</p>
//   p2 <p>Location: {users location}</p>
//   p3 <p>Profile:  
//     <a href={address to users github page}>{address to users github page}</a>
//    </p>
//  p4 <p>Followers: {users followers count}</p>
//  p5  <p>Following: {users following count}</p>
//  p6  <p>Bio: {users bio}</p>
//  </div>
//</div>

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const entryPoint= document.querySelector('.cards')
axios.get("https://api.github.com/users/krisdmonroe")
  .then(response => {
      const newPerson = gitHub(response.data);
      entryPoint.appendChild(newPerson);
      axios.get(`https:api.github.com/users/krisdmonroe/followers`).then(response =>{
        followersArray = response.data
        return response.data;
      })
        .then(userNames => {
          userNames.forEach(data => {
          axios.get(data.url).then(info => {
            const cardRespone = gitHub(info.data)
            entryPoint.appendChild(cardRespone)
            })
            .catch(error => {
              console.log(error)
            })
            });
        })
    }
    );
    

// axios.get("https://api.github.com/users/rUpadhyayahacks")
//       .then(response => {
//         console.log(response);
//           const newPerson = gitHub(response);
//           entryPoint.appendChild(newPerson);
//         });

// axios.get("https://api.github.com/users/KParrish193")
//   .then(response => {
//     console.log(response);
//       const newPerson = gitHub(response);
//       entryPoint.appendChild(newPerson);
//     });
    
// axios.get("https://api.github.com/users/zakmayfield")
//   .then(response => {
//     console.log(response);
//       const newPerson = gitHub(response);
//       entryPoint.appendChild(newPerson);
//     });
    
// axios.get("https://api.github.com/users/ljh-c")
//   .then(response => {
//     console.log(response);
//       const newPerson = gitHub(response);
//       entryPoint.appendChild(newPerson);
//     });
  
// axios.get("https://api.github.com/users/Ramonta-Lee")
//   .then(response => {
//     console.log(response);
//       const newPerson = gitHub(response);
//       entryPoint.appendChild(newPerson);
//     });





