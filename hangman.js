var played = false;
var blanks = [];
var cities = ['LAHORE','THALL','KARACHI','KOHAT','MULTAN','HANGU',"PESHAWAR","PARACHINAR"];
var rand;
var n;
var b;
var chances = 6;
var count = 1;
var cnt = -1;
var countForWIn = -1;



function gameOver()
{
    location = "gameOver.html";
}
function createblanks(){
    rand = Math.floor(Math.random() * cities.length);
    n = cities[rand].toString();
    for(x in n)
    {
        blanks.push('-');
        b = document.getElementById("cityblanks").innerHTML += blanks[x];
    }    
}

function checkForWin()
{
    
}
function clickHandler(m)
{
    
    let arr2 = n.split("");
    checkForWin();
    for(let x in arr2)
    {
        
        if(arr2[x] == m.value && blanks[x] == "-")
        {
            blanks[x] = m.value;
            //alert(blanks[x]);
            let a = document.getElementById("cityblanks");
            a.innerHTML = "";
            for(z in n)
            {
                a.innerHTML+= blanks[z];
            }
            countForWIn++;
            if(countForWIn >= arr2.length -1)
            {
                location = "winningPage.html";
            }
            break;
        }
        if(x == arr2.length-1 && m.value != arr2[x])
        {
            document.getElementById("pic").src = "images/"+count+".jpg";
            count++;
            chances--;
            if(chances>0)
            {
                document.getElementById("chance").innerHTML = "";
                document.getElementById("chance").innerHTML+= "Remaining Chances:  "+chances;
            }else{
                document.getElementById("chance").innerHTML = "";
                document.getElementById("chance").innerHTML+= "Remaining Chances:  "+chances;
                gameOver();
            }
            break;
        }
    }
}

function play(){
            played = true;
            if(played){
                var x = document.getElementsByClassName("alpha");
                for(let m = 0;m<x.length;m++){
                    x[m].disabled = false;
                }
                var y = document.getElementById("pic");
                y.src = "images/0.jpg";
                var z = document.getElementById('guess').innerHTML = "Guess The Name of The City In Pakistan";
                becomeInvisible();
                createblanks();
            }
            
        }
        function becomeInvisible(){
            document.getElementById("playInst").innerHTML = "";
            document.getElementById("playbtn").style.visibility = "hidden";
        }