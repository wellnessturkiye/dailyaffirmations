
$(document).ready(function () {
    var quotes = [
      
    { title: "Aspiration", description: "You are unlimited, so aim for the stars." },
    { title: "Birth", description: "Be receptive to a new idea, child or situation." },
    { title: "Blessings", description: "Count your blessings and the good in your life will multiply." },
    { title: "Choices", description: "There is another way. Ask your inner wisdom to help you find it." },
    { title: "Closeness", description: "Your guardian angel is very close to you." },
    { title: "Dignity", description: "Hold your head up high and know the angels are supporting you." },
    { title: "Divine Sight", description: "See the divine in everyone." },
    { title: "Feather", description: "This message from the angels tell you they are near you." },
    { title: "Flight", description: "Let your creative imagination fly." },
    { title: "Freedom", description: "Let your inner voice set you free." },
    { title: "Future", description: "Let go of the past and move forward." },
    { title: "Help", description: "The help you need is on its way, so keep watching for it." },
    { title: "Honesty", description: "Honesty will ultimately be rewarded." },
    { title: "Hope", description: "Look with new eyes and create the change that awaits you." },
    { title: "Intuition", description: "Listen to your inner wisdom." },
    { title: "Invisibility", description: "Take off your cloak of invisibility and let your light be seen." },
    { title: "Laughter", description: "Laughter attracts good things." },
    { title: "Magic", description: "There is a magic around you, so expect excitement and joy." },
    { title: "Manifestation", description: "Focus on a vision beyond yourself and inner wisdom will help you." },
    { title: "Moving", description: "Change is happening, so be prepared to move physically or spiritually." },
    { title: "Mystery", description: "Explore the unknown, the unexpected waits you." },
    { title: "Openings", description: "A new door is opening for you." },
    { title: "Perspective", description: "Examine your situation from a higher perspective." },
    { title: "Prompting", description: "Call a friend today." },
    { title: "Prosperity", description: "Prosperity is flowing towards you, so be open to receiving it." },
    { title: "Rainbow", description: "There is a rainbow beyond the clouds." },
    { title: "Seeking Good", description: "Look for good in your current situation." },
    { title: "Service", description: "Service with an open heart is a key to satisfaction." },
    { title: "Soul Purpose", description: "Act on your soul purpose today." },
    { title: "The Silence", description: "Be still all the answers lie in the silence." },
    { title: "Surprise", description: "Look for the unexpected today." },
    { title: "Wisdom", description: "Act with wisdom and people will respect you." },
    { title: "Listening", description: "Listen and the answer will be revealed." },
    { title: "Soul Satisfaction", description: "Aim for that which makes your soul rejoice." }
    { title: "Wishes", description: "Be careful what you wish for as one wish will be granted." }
    { title: "Pegasus", description: "Open your heart to love and joy." }
    { title: "King", description: "You are blessed with majesty, vision and power." }
    { title: "Queen", description: "You are blessed with love, compassion and wisdom." }
        
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


