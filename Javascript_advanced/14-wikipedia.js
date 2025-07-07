function createElement(data) {
    let paragraph = document.createElement("p");
    let text=document.createTextNode(data);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;

            callback(extract);
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Network error");
    };

    xhr.send();
}

queryWikipedia(createElement);
