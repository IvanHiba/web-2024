let quotes = [];
const quoteInput = document.getElementById("quote-input");
const addQuoteBtn = document.getElementById("add-quote-btn");
const quotesList = document.getElementById("quotes-list");
const clearQuotesBtn = document.getElementById("clear-quotes-btn");
const savedQuotes = JSON.parse(localStorage.getItem("quotes"));

if (savedQuotes) {
    quotes = savedQuotes;
    renderQuotes(quotes);
}

addQuoteBtn.addEventListener("click", function() {
    const quote = quoteInput.value;
    if (quote) {
        quotes.push(quote);
        quoteInput.value = "";
        localStorage.setItem("quotes", JSON.stringify(quotes));
        renderQuotes(quotes);
    }
});

clearQuotesBtn.addEventListener("click", function() {
    localStorage.clear();
    quotes = [];
    renderQuotes(quotes);
});

quotesList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON" && event.target.classList.contains("delete-quote-btn")) {
        const index = event.target.dataset.index;
        deleteQuote(index);
    }
});

function renderQuotes(quotes) {
    quotesList.innerHTML = "";
    quotes.forEach((quote, index) => {
        const quoteItem = document.createElement("li");
        quoteItem.innerHTML = `
            <span>${quote}</span>
            <button class="delete-quote-btn" data-index="${index}">Delete</button>
        `;
        quotesList.appendChild(quoteItem);
    });
}

function deleteQuote(index) {
    quotes.splice(index, 1);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    renderQuotes(quotes);
}
