//////////////  display highlight on cliclk ////////////////

const hideNShow = document.getElementById("btn-container-info-on-graph");

console.log(hideNShow);
function myClick() {
  if (hideNShow.style.display === "none") {
    hideNShow.style.display = "flex";
  } else {
    hideNShow.style.display = "none";
  }
}
////////////////       Fetching      //////////////////////
const spinner = document.getElementById("loader--spinner");

var list = document.querySelector("first-list-table diff-first-list-tle");

const getTodoItems = async () => {
  spinner.style.display = "block";
  try {
    const response = await window.axios.get(
      "https://cors-any-where-code-mena.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "837459ce-5242-457a-82c9-af52040c2776",
        },
      }
    );
    const table = document.getElementById("table-inu");
    spinner.style.display = "none";
const value = response.data.data;
    value.forEach((element) => {
      const { name, cmc_rank, circulating_supply, symbol } = element;

      const a = `<tr>
            <td class="first-list-table diff-first-list-tle">
              <div><i class="fa-solid fa-star-of-david"></i></div>
              <div>${cmc_rank}</div>
            </td>
            <td class="camp-name diff-camp-name">
             <img src="./images/1027.png" alt="" />
              <div class="name-class">
                <h3>${name}</h3>
                 <p class="coin--shortname">${symbol}</p>
              </div>
              <span>Buy</span>
            </td>
            <td class="mmds">$ ${element.quote.USD.price.toFixed(2)}</td>
            <td class="drop mmds">
              <div><i class="fa-solid fa-caret-down"></i></i></div>
              <p>${element.quote.USD.percent_change_24h.toFixed(2)}</p>
            </td>
            <td class="drop mmds">
              <div><i class="fa-solid fa-caret-down"></i></div>
              <p>${element.quote.USD.percent_change_7d.toFixed(2)}</p>
            </td>