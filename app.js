var numberOfButtons = document.querySelectorAll(".button").length;
var buttons = document.querySelectorAll('.button');



for (i = 0; i < numberOfButtons; i++) {
    buttons[i].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;
        fetch('https://restcountries.eu/rest/v2/region/' + buttonInnerHTML)
            .then(response => response.json())
            .then(data => {

                const html = data.map(user => {
                        return `
                            <div class="single-flag">
                            <img src = "${user.flag}" alt = "Card image cap" >
                            <br>   
                                <h2>Country: ${user.name}</h2>
                                <label>Capital: ${user.capital}</label><br>
                                <label>Region: ${user.region}</label><br>
                                <label>Sub-Region: ${user.subregion}</label><br>
                                <label>Population: ${user.population}</label><br>
                                <label>Area: ${user.area} Sq.KM</label><br>
                                <label>Currency: ${user.currencies[0].name}</label><br>
                            </div> `;
                    })
                    .join("");

                document.querySelector("#card-container").insertAdjacentHTML("afterbegin", html);
                document.querySelector("#card-container").innerHTML = html;
            })

            .catch(err => alert("Sorry no data available for this continen!! -404"));
    })
}