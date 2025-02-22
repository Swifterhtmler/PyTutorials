

let showButton = document.getElementById('show');
let list = document.getElementById("navList-2");
let factbox = document.getElementById("fact");

document.addEventListener('DOMContentLoaded', function() {
showButton.addEventListener('click', function() {
    if (list.style.display === "none") {
       list.style.display = "block";
    } else {
        list.style.display = "none";
    }
   });

// fetch quote

fetchQuote().then(quote => {
    factbox.textContent = quote;
}).catch(error => {
    console.error('Error fetching quote:', error);
    factbox.textContent = "Failed to load quote.";
});


});


async function fetchQuote() {
    try {
        let response = await fetch('https://quotes-api-self.vercel.app/quote');
        let data = await response.json();

        if (data.quote.length > 100) {
          return fetchQuote();
        } else if (data.quote.length >= 20) {
        return data.quote;
      } else {
        return "No quote available.";
      }
        
    } catch (error) {
        console.error(error);
        return "Python is an experiment in how much freedom programmers need";
    }
}