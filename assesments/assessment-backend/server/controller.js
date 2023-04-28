let fortunes = 
["A dream you have will come true.",
"A journey of a thousand miles begins with a single step.",
"A thrilling time is in your immediate future.",
"Accept your past without regrets. Handle your present with confidence. Face your future without fear.", 
"Watch out for bad omens"];

module.exports = {

    getFortunes: (req, res) => {
        res.status(200).send(fortunes);
    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        console.log(fortunes);
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
      
    },
    
    createFortune: (req, res) => {
        const fortune = req.body.fortune;
        if (fortune) {
          fortunes.push(fortune);
          res.status(201).send(fortune);
          console.log(fortunes);
        } else {
          res.status(400).send("Bad request: fortune missing");
        }
      },

      updateFortune: (req, res) => {
        const id = req.params.id;
        const fortune = req.body.fortune;
        if (id >= 0 && id < fortunes.length && fortune) {
          fortunes[id] = fortune;
          res.status(200).send(fortune);
        } else {
          res.status(404).send("Fortune not found");
        }
      },

      deleteFortune: (req, res) => {
        const id = req.params.id;
        if (id >= 0 && id < fortunes.length) {
          const fortune = fortunes[id];
          fortunes.splice(id, 1);
          res.status(200).send(fortune);
        } else {
          res.status(404).send("Fortune not found");
        }
      }

}