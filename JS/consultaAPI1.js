const fetchFood = () => {
    // const pokeNameInput = document.getElementById("pokeName");
    // let pokeName = pokeNameInput.value;
    // pokeName = pokeName.toLowerCase();
    const url = `www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log("aaa")
            console.log(res);
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log("cccc")
            console.log(data);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}