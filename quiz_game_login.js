function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.set("player1_name", player1_name);
    localStorage.set("player2_name", player2_name);
}