const messageFactory = (set1, set2, set3) => {
    return {
        _messageSet1: set1,
        _messageSet2: set2,
        _messageSet3: set3,

        generateMessages () {
            return{
                _message1: this._messageSet1[Math.floor((Math.random() * this._messageSet1.length))],
                _message2: this._messageSet2[Math.floor((Math.random() * this._messageSet2.length))],
                _message3: this._messageSet3[Math.floor((Math.random() * this._messageSet3.length))]
            }
        },
    
        displayMessages () {
            messages = this.generateMessages();
            console.log(`${messages._message1}\n\n${messages._message2}\n\n${messages._message3}`);
        }
    } 
}

const iAm = ["I am successful.", "I am confident.", "I am powerful.", "I am strong.", "I am getting better and better every day."];

const iWill = ["I will be kind to myself.", "I will be kind to others.", "I will allow myself to hope.", "I will believe in a bright future.", "I will honor my body."];

const iCan = ["I can do hard things.", "I can do anything I put my mind to.", "I can change the world.", "I can create my life the way I want it.", "I can learn anything."];

positiveAffirmations = messageFactory(iAm, iCan, iWill);
positiveAffirmations.displayMessages();