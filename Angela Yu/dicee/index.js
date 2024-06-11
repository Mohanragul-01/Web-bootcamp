var randomNumber_1 = Math.random() ;
randomNumber_1 = Math.floor( randomNumber_1 * 6 ) + 1 ;

if ( randomNumber_1 === 1 ) {
    document.querySelector(".img1").setAttribute( "src", "images/dice1.png" ) ;
}
else if ( randomNumber_1 === 2 ) {
    document.querySelector(".img1").setAttribute( "src", "images/dice2.png" ) ;
}
else if ( randomNumber_1 === 3 ) {
    document.querySelector(".img1").setAttribute( "src", "images/dice3.png" ) ;
}
else if ( randomNumber_1 === 4 ) {
    document.querySelector(".img1").setAttribute( "src", "images/dice4.png" ) ;
}
else if ( randomNumber_1 === 5 ) {
    document.querySelector(".img1").setAttribute( "src", "images/dice5.png" ) ;
}
else {
    document.querySelector(".img1").setAttribute( "src", "images/dice6.png" ) ;
}


var randomNumber_2 = Math.random() ;
randomNumber_2 = Math.floor( randomNumber_2 * 6 ) + 1 ;

if ( randomNumber_2 === 1 ) {
    document.querySelector(".img2").setAttribute( "src", "images/dice1.png" ) ;
}
else if ( randomNumber_2 === 2 ) {
    document.querySelector(".img2").setAttribute( "src", "images/dice2.png" ) ;
}
else if ( randomNumber_2 === 3 ) {
    document.querySelector(".img2").setAttribute( "src", "images/dice3.png" ) ;
}
else if ( randomNumber_2 === 4 ) {
    document.querySelector(".img2").setAttribute( "src", "images/dice4.png" ) ;
}
else if ( randomNumber_2 === 5 ) {
    document.querySelector(".img2").setAttribute( "src", "images/dice5.png" ) ;
}
else {
    document.querySelector(".img2").setAttribute( "src", "images/dice6.png" ) ;
} ;


if ( randomNumber_1 > randomNumber_2 ) {
    document.querySelector("h1").innerHTML = "Player 1 Won !" ;
}
else if ( randomNumber_1 < randomNumber_2 ) {
    document.querySelector("h1").innerHTML = "Player 2 Won !" ;
}
else {
    document.querySelector("h1").innerHTML = "Draw !" ;
} ;