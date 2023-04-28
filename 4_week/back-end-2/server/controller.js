const houses = require('./db.json')
let globalId = 4;

module.exports = {
    getAllHouses: (req,res) => res.status(200).send(houses),
    createHouse: (req,res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++;
    },

    updateHouse: (req,res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => + elem.id === +id)

        if(type === 'plus'){
            houses[index].price+=10000;
        }else if(type === 'minus'){
            houses[index].price-=10000;
        }else {
            console.log("An error has occured");
            return
        }

        res.status(200).send(houses)
    },
    deleteHouse: (req,res) => {
        console.log("deleting a house");
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}
