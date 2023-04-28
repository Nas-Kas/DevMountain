const complimentBtn = document.getElementById("complimentButton")
const getfortuneBtn = document.getElementById("getfortuneButton")
const postFortuneBtn = document.getElementById("postFortuneButton");
const getAllFortunesBtn = document.getElementById("getAllFortunesButton");
const deleteFortuneBtn = document.getElementById("deleteFortuneButton");
const putFortuneBtn = document.getElementById("putFortuneButton");

const URL = "http://localhost:4000/api/"

const getCompliment = () => {
    axios.get(URL + "compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(URL + "fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postFortune = () => {
    const newFortune = prompt("Enter a new fortune:");
    axios.post(URL + "fortune", { fortune: newFortune })
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            console.error(err);
        });
};

const getFortunes = () => {
    axios.get(URL + "fortunes")
    .then(res => {
        const data = res.data;
        alert(JSON.stringify(data));
    })
    .catch(err => {
        console.error(err);
    });
};

const deleteFortune = () => {
    const id = prompt ("Enter an id of the fortune you want to delete");
    axios.delete(URL + `fortune/${id}`)
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            console.error(err);
        });
};

const putFortune = () => {
    const id = prompt("Enter the ID of the fortune to update:");
    const updatedFortune = prompt("Enter the updated fortune:");
    axios.put(`http://localhost:4000/api/fortune/${id}`, { fortune: updatedFortune })
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            console.error(err);
        });
};


complimentBtn.addEventListener('click', getCompliment)
getfortuneBtn.addEventListener('click', getFortune)
postFortuneBtn.addEventListener('click', postFortune);
getAllFortunesBtn.addEventListener('click', getFortunes);
deleteFortuneBtn.addEventListener('click', deleteFortune);
putFortuneBtn.addEventListener('click', putFortune);