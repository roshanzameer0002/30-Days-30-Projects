var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var flag = 0;
// addFriend.addEventListener("click", function() {
//     if(flag == 0)
//     isStatus.innerHTML = "Friend";
//     flag = 1;
// });

// remove friend
var removeFriend = document.querySelector("#remove");
removeFriend.addEventListener("click", function() {
    if(flag == 0) {
      isStatus.innerHTML = "Friends";
      removeFriend.innerHTML = "Remove Friend"
      removeFriend.style.backgroundColor = "rgb(206, 199, 199)";
      flag = 1;
    }
    else {
        flag = 0;
        isStatus.innerHTML = "Stranger";
        removeFriend.innerHTML = "Add Friend"
        removeFriend.style.backgroundColor = "cornflowerblue";
    }
    
})
