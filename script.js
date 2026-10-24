// const hexColor = "000000"
// const colorScheme = "monochrome"
// const colorCount = 5

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



function getColorScheme() {
    const colorHex = colorHexSelect.value.replace('#','')
    const colorMode = colorModeSelect.value
    const colorCount = 5

    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}&count=${colorCount}`
    // URL structure /scheme{?hex,rgb,hsl,cmyk,format,mode,count}
    // ex. /scheme?hex=24B1E0&mode=triad&count=6


    fetch (apiUrl)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        //render logic goes here
        colorColumn1.style.backgroundColor = data.colors[0].hex.value;
        colorColumn1.innerHTML = `
                                    <p>${data.colors[0].hex.value}</p>
                                `
        colorColumn2.style.backgroundColor = data.colors[1].hex.value;
        colorColumn2.innerHTML = `
                                    <p>${data.colors[1].hex.value}</p>
                                `
        colorColumn3.style.backgroundColor = data.colors[2].hex.value;
        colorColumn3.innerHTML = `
                                    <p>${data.colors[2].hex.value}</p>
                                `
        colorColumn4.style.backgroundColor = data.colors[3].hex.value;
        colorColumn4.innerHTML = `
                                    <p>${data.colors[3].hex.value}</p>
                                `
        colorColumn5.style.backgroundColor = data.colors[4].hex.value;
        colorColumn5.innerHTML = `
                                    <p>${data.colors[4].hex.value}</p>
                                `


    })
}
