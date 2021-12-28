function send(){
    word1= document.getElementById("word").value;
    word2= document.getElementById("word1").value;

    actual_answer= parseInt(word1)*parseInt(word2);

    question_number= "<h4>" + word1+ "X" + word2 + "</h4>";
    input_box= "<br> Answer: <input type='text' id= 'input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'> Check </button";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    number1=document.getElementById("word").value="";
    number2=document.getElementById("word1").value= "";

}