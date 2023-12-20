
$(document).ready(function () {
    var quotes = [
      
    { title: "Discover", description: "Spot new opportunities." },
    { title: "Envolve", description: "The potential flows through you." },
    { title: "Expand", description: "Growth is often uncomfortable and messy, but necessary." },
    { title: "Inspire", description: "There is a fire inside you burning brighter than the sun." },
    { title: "Limitless", description: "Know your worth." },
    { title: "Love", description: "… to the moon and back." },
    { title: "Outer Space", description: "Take the time to heal, grow and expand." },
    { title: "Re-evaluate", description: "In the starlit sky we still look for the falling stars." },
    { title: "Replenish", description: "The sun will rise and we will try again." },
    { title: "Take Charge", description: "Don’t wait for the stars to align, reach up and arrange them the way you want." },
    { title: "The Sun", description: "Rise to the occasion." },
    { title: "The Moon", description: "Take time to reflect." },
    { title: "Adapt", description: "You will get yourself where you want to be." },
    { title: "Be Present", description: "Use the hours; don’t count them." },
    { title: "Beginnings", description: "Don’t be afraid to start small." },
    { title: "Change", description: "As with the falling leave, embrace change." },
    { title: "Courage", description: "When picking roses, don’t fear the thorns." },
    { title: "Dare", description: "Take a risk and fly." },
    { title: "Find", description: "Look at the early dew drops before they disappear with morning sun." },
    { title: "Grow", description: "All flowers must grow through dirt." },
    { title: "Hidden Depths", description: "You only see the surface; look beyond." },
    { title: "Joy", description: "Make time for the little things today." },
    { title: "Move", description: "A rolling stone gathers no moss." },
    { title: "Opportunity", description: "There is no use looking for luck; it arrives at unexpected times." },
    { title: "Persevere", description: "Leave no stone unturned." },
    { title: "Potential", description: "The littlest key can open the heaviest door." },
    { title: "Release", description: "Lighten your load." },
    { title: "Rest", description: "Slow down; you don’t have to solve everything today." },
    { title: "Retreat", description: "Never underestimate the healing power of a quiet moment." },
    { title: "Share", description: "The busy bee should still make time for each flower." },
    { title: "Success", description: "Bloom wherever you are planted." },
    { title: "Surprises", description: "Venture down the rabbit hole." },
    { title: "Transform", description: "Rise above any situation and become the best version of you." },
    { title: "Wallflower", description: "Look for the crack in the concrete to find your way out." }

  
        
    ];

    var cardSelected = false; // Variable to track if a card has been selected

    $("#myCard").click(function () {
        if (!cardSelected) {
            // User has not selected a card yet
            var randomIndex = Math.floor(Math.random() * quotes.length);
            var selectedQuote = quotes[randomIndex];
            var formattedQuote = '<h1>' + selectedQuote.title + '</h1>' + '<h4>' + selectedQuote.description + '</h4>';
            $("#quote-container").html(formattedQuote);
            $("#flip-toggle").toggleClass('flip');
            cardSelected = true; // Update the variable to indicate a card has been selected
        } else {
            // User has already selected a card
            $("#lightbox").show(); // Show a message
        }
    });
    
    // Close the lightbox when the 'Okay' button is clicked
    $("#close-lightbox").click(function() {
        $("#lightbox").hide();
    });
});


