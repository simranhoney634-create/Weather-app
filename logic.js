let info=document.querySelector(".info")
let button=document.querySelector(".search")
button.addEventListener("click",async ()=>{
    const apikey="00b96abf1894b49bb913f5b18ee6944d"
    let input=document.querySelector("input")
    let city=input.value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    let response=await  fetch(url)
    let data=await response.json()
    console.log(data)
    info.style.display="flex"
    let div=document.querySelectorAll("p")
    div[1].innerText=""
    div[2].innerText=""
    div[3].innerText=""
    div[4].innerText=""
    div[0].innerText=city.toUpperCase()
    let t=data['main']['temp']
    div[1].innerText="Temperature~ "+t+"°C"
    let p=data['main']['pressure']
    div[2].innerText="Pressure~ "+p+"hpa"
    let w=data['weather'][0]['description']
    div[3].innerText="Weather~ "+w
    let s=data['wind']['speed']
    div[4].innerText="Wind speed~ "+s
})
