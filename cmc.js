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
