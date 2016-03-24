//Content

var q1 = {
    cat: "notes",
    oyes: "make your lectures available on some digitial platform in some digital format. For example: 'lecture 1 will be available as a PDF on dropbox'... ahh how nice!",
    ono: "make us copy all your notes as quickly as possible during class as if it’s 1985. Writing really fast isn't a skill we need in the 21st century. We all have apps that records everything for free. BTW, shouldn’t we be paying attention to what you are saying, rather than trying to figure out what you wrote on that last slide?"
};

var q2 = {
    cat: "summary",
    oyes: "make an outline of all the topics we are going to cover and at the beginning of each class, show us which ones you will be talking about today.",
    ono: "make us guess what today’s lecture is going to be about and where it fits into the big picture. Try and keep in mind that your class is one of many that we are frantically trying to juggle."
};

var q3 = {
    cat: "ppts",
    oyes: "make powerpoints, thats fine.",
    ono: "make the slides have entire paragraphs of text on them or animations that are distracting. Nothing looses a student better than a slide with an essay on it. TL;DR, fell asleep and we're all just wondering when will class end."
};

var q4 = {
    cat: "videos",
    oyes: "record your lectures and put them on some server for us to download. Your computer and whiteboard should be on the video if both are necessary. The ability for us to stop, replay, speed up and/or slow down what you said is priceless and SOOO doable, it's 2016! Not to mention that we all learn in different ways. See <a href='http://www.institute4learning.com/multiple_intelligences.php' target='_blank'>Gardner's Multiple Intelligence</a>",
    ono: "expect us to have our 100% attention on you, all the time, every class and all year in this age of ADD. We may miss a word or a phrase and believe it or not, it’s totally human and happens to be best of us."
};

var q5 = {
    cat: "tests",
    oyes: "give us some practice questions/tests to help prepare for a exam.",
    ono: "surprise everyone with questions the day of the exam with no preparation. Believe us, the only thing a class average of 32% does, is stroke your ego in some retarded way. It doesn’t actually help the learning process at all, which the last time we checked, was suppose to be a small part of your job."
};

var q6 = {
    cat: "help",
    oyes: "have some office hours, the ability to set appointments and help sessions. Weekends are cool too!",
    ono: "make it so that you only offer one of the above. For some us, asking for help over email can be scary while coming to office hours isn't. For others, the opposite is true and there's everything in between. We are all human and different. You've had more time to mature than we have. Can you cut us some slack?"
};

    
var quoteArr = [];
quoteArr.push(q1, q2, q3, q4, q5, q6);

function populateQuotes() {
    for (var i=0; i<quoteArr.length; i++){
        //grab the div that hold the content
        var quoteContainer = document.getElementsByClassName("quote-container");

        //append a child div with class = quote-category and add the like btn
        var quoteCatDiv = document.createElement("div");
        quoteCatDiv.setAttribute("class", "quote-category");
        quoteCatDiv.innerHTML = "Your " + quoteArr[i].cat;
        quoteContainer[0].appendChild(quoteCatDiv);

        //append the like btn to each category Div
        
        
        //append a child div with class = quote
        var quoteDiv = document.createElement("div");
        quoteDiv.setAttribute("class", "quote");
        quoteContainer[0].appendChild(quoteDiv);

        //append a child div to the quote div with class = quote-do
        var quoteDoDiv = document.createElement("div");
        quoteDoDiv.setAttribute("class", "quote-do");
        var doPrefix = "<span class='do'>DO</span> ";
        quoteDoDiv.innerHTML = doPrefix + quoteArr[i].oyes;
        quoteDiv.appendChild(quoteDoDiv);

        //append a child div to the quote div with class = quote-do
        var quoteDontDiv = document.createElement("div");
        quoteDontDiv.setAttribute("class", "quote-dont");
        quoteDoDiv.setAttribute("class", "quote-do");
        var dontPrefix = "<span class='dont'>DONT</span> ";
        quoteDontDiv.innerHTML = dontPrefix + quoteArr[i].ono;
        quoteDiv.appendChild(quoteDontDiv);
    }
};