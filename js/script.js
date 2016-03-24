//Content

var q1 = {
    cat: "notes",
    oyes: "make your lectures available on some digitial platform in some digital format. For example: lecture 1 as a PDF or PPT on dropbox",
    ono: "make us copy all your notes as quickly as possible during class as if it’s 1985. Writing really fast isn't a skill we need nowadays. I have an app that records everything for free. Shouldn’t I be paying attention to what you are saying, rather than trying to figure out what you wrote on that last slide?"
};

var q2 = {
    cat: "summary",
    oyes: "make an outline of all the topics we are going to cover at the beginning of the year, then at the beginning of each class, show that original list and show which ones you will be talking about today.",
    ono: "make us guess what today’s lecture is going to be about and where it fits into the big picture, this is just 1 of like 5 other classes we have, have some mercy."
};

var q3 = {
    cat: "ppts",
    oyes: "make powerpoints, thats fine",
    ono: "make the slides that have entire paragraphs of text on them or animations from the 90s. Nothing looses a student better than a slide with an essay on it. TL;DR fell asleep and now just wondering when is this lecture over?"
};

var q4 = {
    cat: "videos",
    oyes: "make your lectures recorded and put them on some server for us to download. Your computer and whiteboard should be on the video if both are necessary. The ability for us to stop, replay speed up and/or slow down what you said is priceless. Not to mention that we all learn in different ways. See <a href='http://www.institute4learning.com/multiple_intelligences.php' target='_blank'>Gardner's Multiple Intelligence</a>",
    ono: "expect us to has 100% attention in this ADD age. We may miss a word or a phrase, believe it or not, it’s human."
};

var q5 = {
    cat: "tests",
    oyes: "give us some practice questions/tests to help prepare for a test",
    ono: "surprise everyone with questions the day of the exam with no preparation. Believe us, the only thing a class average of 52% does, is stroke your ego in some retarded way. It doesn’t actually help learning at all, which the last time we checked, was suppose to be one of your job descriptions bullets."
};

var q6 = {
    cat: "help",
    oyes: "have some office hours, the ability to set appointments and help sessions. Weekends are cool too!",
    ono: "make it so that you only offer one of the above. For some us, asking for help over email can be scary while coming to office hours isn't. For some it's vice versa. Some university emails systems suck balls!"
};

    
var quoteArr = [];
quoteArr.push(q1, q2, q3, q4, q5);

function populateQuotes() {
    for (var i=0; i<quoteArr.length-1; i++){
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