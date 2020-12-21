let quotes = ["Don't rush what God is preparing for you. It will be worth the wait!",
              "Stress has the tendency to blind you from your blessings.",
              "Never be ashamed of a scar. It simply means you are stronger than whatever tried to hurt you.",
              "On particularly rough days when I'm sure I can't possibly endure, I like to remind myself that my track record for getting through bad days so far is 100%, and that's pretty good.",
              "What if the worst thing that happened to you turns out to be the best thing that has ever happened to you?",
              "You may have to fight a battle more than once to win.",
              "It is very important that we do not run away from our painful feelings. We can recognize, accept, embrace, and look deeply.",
              "Be a blessing to someone today.",
              "You glow different when you see yourself the way God sees you.",
              "Fall in love with the process of becoming the best version of yourself.",
              "Grow through what you go through."];

$("button").click(function() {
    
var random = Math.floor( Math.random() * quotes.length );
    
    $(".motivation").text(quotes[random]); 
    
});

