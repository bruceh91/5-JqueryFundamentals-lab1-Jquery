document.addEventListener("DOMContentLoaded", function () {



    // 1.Make a button appear on the page when it's first loaded. 
    // The button cannot already be in your html. When the button is 
    // clicked, you should display an Alert box with any (nice) message.


    $('body').append('<button>Click me for a fun fact!</button>');
    $('button').attr('id', 'Echidna');
    $('button#Echidna').click(function () {
        alert("echidnas lack nipples. Their babies drink from milk patches on their mother's stomach.")
    });

    // 2.Make a button and text box (you can just put them in your HTML). 
    // When the button is clicked, display an alert with the message that 
    // is typed in the text box.


    $('body').append('<button>alert text</button>');
    $('button').attr('id', 'get-text');
    $('body').append('<input></input>');
    $('input').attr('type','text');
    $('input').attr('id','text');
    $('button#get-text').click(function () {
        let t = $('#text').val();
        alert(t);
    });


    // 3.Create a div in HTML. Without using CSS :hover, 
    // make the div change to a different background color 
    // when your mouse hovers over it. The div should return
    //  to its original color when the mouse exits the div.

    $('body').append('<div id="hoverDiv"></div>');

    let turnBack = $('div#hoverDiv').mouseout(function() {
        $('div#hoverDiv').css('background-color','black');
    })
    $('div#hoverDiv').css({
        'background-color':'black',
        'height':'50px',
        'width':'50px'
    });

    $('div#hoverDiv').mouseover(function(){
        $('div#hoverDiv').css('background-color','red');
        turnback;
    })


    // 4.Put some text in a paragraph. Make it where when you 
    // click on the paragraph, the color of the text switches 
    // to red. Once you get that working, try to rewrite your 
    // code to make it switch to a random color each click 
    // (you don't have to show the code for just red once you 
    // get random working).

    $('body').append('<p id="rainbowText">This text changes color when you click it.</p>');
     
    //  let tempVal = "'" + randColor + "'";
    $('p#rainbowText').click(function(){
        let ranColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        $('#rainbowText').css('color', ranColor);
        console.log(ranColor);
    })


    // 5.Add a button and an empty div. When the button is clicked, 
    // add a span that contains your name to the empty div.
    // Create a button and a ul in your HTML. In JavaScript, create 
    // an array containing the names of your friends (at least 10. If 
    // you don't have that many, include your imaginary ones). 
    // When the button is clicked, add each friend's name as an 
    // li to the ul on the page.

    let friendArr = ["Andy", "Antonia", "Dante", "Ernest", "Jarad", "Jen", "Joab", "Kana", "kuvvat", "Malawo", "Sari", "Sayra", "Travis"];

    $('body').append('<button id = "bruceBtn"> click here for my name.<button>','<div id="bruceDiv"><div>');

    $('button#bruceBtn').click(function(){
        $('div#bruceDiv').append('<span>Bruce</span>')
    })




});