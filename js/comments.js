function comments(cards){
    
    console.log("comments function called");
    console.log(cards);

    // create a input for comments and a submit button
    if (cards == 1){

        let card1vis = document.getElementById("card1vis");
        let card1hidden = document.getElementById("card1hid");
        let card1input = document.getElementById("card1input");
        let commentbtn = document.getElementById("c1btn");
        
        document.getElementById("card1input").innerHTML += "<textarea class= 'commentinput' type='text' id='1C' placeholder='comment'></textarea><button class='commentbtn' onclick='addcomment(1)'>Submit</button>";
        
        // make card1hid div id content visible
        
        card1hidden.style.visibility = "visible";

        // change button to close comments section
        commentbtn.innerHTML = "<a id='c1btn' onclick='closeComments(1)' class='btn btn-primary'> Close Comments </a>";

    }

}

function news(newscards){
// This will be the same as the comments function but will be for the news section.
// this section will load the news from the database and display it on the page.
// will also load on load of the page.
document.getElementById(newscards).innerHTML = "this is a test of the news section";

}

function addcomment(x){

    if (x == 1){
        // get value from input box with id 1
        // add comment to the card1hid div
        let  comment = document.getElementById("1C").value;
        //append comment to the card1hid div
        let comments = '<div class="row"> <p class="comment_p_format"><img class="comment_avatar" src="https://www.w3schools.com/howto/img_avatar.png">'+comment+'</p> </div>';
        
        document.getElementById("1").innerHTML += comments;
        console.log(comment);

    }


}

function closeComments(x){

    if (x == 1){
        let card1vis = document.getElementById("card1vis");
        let card1hidden = document.getElementById("card1hid");
        let card1input = document.getElementById("card1input");
        let commentbtn = document.getElementById("c1btn");

        card1hidden.style.visibility = "hidden";
        card1input.innerHTML = "";
        commentbtn.innerHTML = "<a id='c1btn' onclick='comments(1)' class='btn btn-primary'>Comments</a>";
    }

}
