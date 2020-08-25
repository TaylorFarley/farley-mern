//fetch
// function fet(){
//     fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res = res.json())
//     .then(json => console.log(json))
// }
// func()
const fetch = require('fetch')
let x = async()=>{
    let fet = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const output = await fet.json()
    console.log(output)
}
x();