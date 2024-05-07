document.getElementById("8Ball").addEventListener("click", response)

// Variables
let answer = "";
let pic = "";
let qPre = ""
function response() {

    let q = document.getElementById("qInput").value.toLowerCase();
    num = Math.random();
    document.getElementById("html").style.backgroundImage = `url("img/Background.png")`;
    document.getElementById("qInput").value = "";

    if (q === "") {
        pic = `<img src="img/Ball21.png" alt="8Ball" width="500px">`;
    } else if (q == qPre) {
        pic = `<img src="img/Ball26.gif" alt="8Ball" width="500px">`;
        document.getElementById("html").style.backgroundImage = `url("img/Background2.gif")`;
    } else if ((q.includes("8 ball") || q.includes("eight ball")) && (q.includes("work") || q.includes("function")) && !q.includes("not")) {
        pic = `<img src="img/Ball23.png" alt="8Ball" width="500px">`;
    } else if ((q.includes("8 ball") || q.includes("eight ball")) && (q.includes("work") || q.includes("function")) && q.includes("not")) {
        pic = `<img src="img/Ball22.png" alt="8Ball" width="500px">`;
    } else if ((q.includes("javascript") || q.includes("java")) && (q.includes("good") || q.includes("amazing") || q.includes("work") || q.includes("works")) && !(q.includes("not") || q.includes("bad"))) {
        pic = `<img src="img/Ball24.png" alt="8Ball" width="500px">`;
    } else if ((q.includes("javascript") || q.includes("java")) && (q.includes("not") || q.includes("bad") || !q.includes("terrible"))) {
        pic = `<img src="img/Ball25.png" alt="8Ball" width="500px">`;
    } else {
        if (num < 0.05) {
            pic = `<img src="img/Ball1.png" alt="8Ball" width="500px">`;
        } else if (num < 0.1) {
            pic = `<img src="img/Ball2.png" alt="8Ball" width="500px">`;
        } else if (num < 0.15) {
            pic = `<img src="img/Ball3.png" alt="8Ball" width="500px">`;
        } else if (num < 0.2) {
            pic = `<img src="img/Ball4.png" alt="8Ball" width="500px">`;
        } else if (num < 0.25) {
            pic = `<img src="img/Ball5.png" alt="8Ball" width="500px">`;
        } else if (num < 0.3) {
            pic = `<img src="img/Ball6.png" alt="8Ball" width="500px">`;
        } else if (num < 0.35) {
            pic = `<img src="img/Ball7.png" alt="8Ball" width="500px">`;
        } else if (num < 0.4) {
            pic = `<img src="img/Ball8.png" alt="8Ball" width="500px">`;
        } else if (num < 0.45) {
            pic = `<img src="img/Ball9.png" alt="8Ball" width="500px">`;
        } else if (num < 0.50) {
            pic = `<img src="img/Ball10.png" alt="8Ball" width="500px">`;
        } else if (num < 0.55) {
            pic = `<img src="img/Ball11.png" alt="8Ball" width="500px">`;
        } else if (num < 0.6) {
            pic = `<img src="img/Ball12.png" alt="8Ball" width="500px">`;
        } else if (num < 0.65) {
            pic = `<img src="img/Ball13.png" alt="8Ball" width="500px">`;
        } else if (num < 0.7) {
            pic = `<img src="img/Ball14.png" alt="8Ball" width="500px">`;
        } else if (num < 0.75) {
            pic = `<img src="img/Ball15.png" alt="8Ball" width="500px">`;
        } else if (num < 0.8) {
            pic = `<img src="img/Ball16.png" alt="8Ball" width="500px">`;
        } else if (num < 0.85) {
            pic = `<img src="img/Ball17.png" alt="8Ball" width="500px">`;
        } else if (num < 0.9) {
            pic = `<img src="img/Ball18.png" alt="8Ball" width="500px">`;
        } else if (num < 0.95) {
            pic = `<img src="img/Ball19.png" alt="8Ball" width="500px">`;
        } else {
            pic = `<img src="img/Ball20.png" alt="8Ball" width="500px">`;
        }
    }

    document.getElementById("8Ball").innerHTML = pic;
    qPre = q;

}



// Responses
// 5%   "Without a Doubt."
// 5%   "Most Definetaly"
// 5%   "As I see it, yes."
// 5%   "Yes"
// 5%   "Most Likely"
// 5%   "Possibly."
// 5%   "Totaly, 100%"
// 5%   "definetaly..."
// 5%   "Ask Again Later."
// 5%   "Do You Really Want To Know?"
// 5%   "I'm Not Gonna Tell You That!"
// 5%   "I'll Give You A Better Awnser If You Give Me A Better Question."
// 5%   "You Call That A Question"
// 5%   "Concentrate and ask again."
// 5%   "YES    wait...   no"
// 5%   "Don't count on it."
// 5%   "You Wish, LOL"
// 5%   "Never Gonna Happen"
// 5%   "No, L"
// 5%   "Not A Chance"