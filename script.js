const hexColor = "000000"
const colorScheme = "monochrome"
const colorCount = 5

//list of divs to populate with colors
const colorColumn1 = document.getElementById("color-column1")
const colorColumn2 = document.getElementById("color-column2")
const colorColumn3 = document.getElementById("color-column3")
const colorColumn4 = document.getElementById("color-column4")
const colorColumn5 = document.getElementById("color-column5")

const colorHexSelect = document.getElementById('color-picker')

const colorModeSelect = document.getElementById('color-mode-select')

const getColorSchemeBtn = document.getElementById("color-scheme-btn")

getColorSchemeBtn.addEventListener('click', (e) => {
    console.log("CLICKED!")
    getColorScheme()
})




// URL structure /scheme{?hex,rgb,hsl,cmyk,format,mode,count}
// ex. /scheme?hex=24B1E0&mode=triad&count=6

const apiUrl = `https://www.thecolorapi.com/scheme?${colorHex},${colorMode},${colorCount}`

fetch (apiUrl)
.then (res => res.json())
.then (data => {
    
    const colorHex = colorHexSelect.value
    const colorMode = colorModeSelect.value

    function getColorScheme() {
    
    }


    /*
        getColorSchemeBtn.addEventListener("click", async () => {
  const params = new URLSearchParams({
    hex: colorHexSelect.value.slice(1), // removes the leading #
    mode: colorModeSelect.value,
    count: colorCount
  });

  const response = await fetch(`https://www.thecolorapi.com/scheme?${params}`);
  const data = await response.json();

  const hexCodes = data.colors.map(color => color.hex.value);
  console.log(hexCodes);
});
    */


})

