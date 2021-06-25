// ********************************************
// CATS FLOW
// index
function getAllCats(){
    fetch('http://localhost:3000/cats')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
};

// create
function submitCat(e){
    e.preventDefault();
    const catData = {
        name: e.target.name.value,
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(catData),
        headers: {
            "Content-Type": "application/json"
        }
    };
    let add = e.target.name.value

    fetch('http://localhost:3000') //fetches base URL
        .then(r => r.text())
        .then(appendMessage)
        .catch(console.warn)
    
    



    fetch('http://localhost:3000/cats', options)
        .then(r => r.json())
        .then(appendCat)
        .catch(console.warn)

        function appendMessage(msgText){
            // const msg = document.createElement('p');
            // msg.textContent = msgText;
            // // msg.style.color = 'red';
            // document.body.append(msg);
            // something to fetch form input 
        
            // add form input to msgtext
            msgText2 = msgText + add 
            window.location.href = msgText2;
        };
        
        
};

// helpers



function appendCats(cats){
    cats.forEach(appendCat);
};





function appendCat(catData){
    const newLi = document.createElement('li');
    newLi.textContent = ` ${catData.name}`
    const catsList = document.querySelector('ul');
    catsList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    // const msg = document.createElement('p');
    // msg.textContent = msgText;
    // // msg.style.color = 'red';
    // document.body.append(msg);
    window.location.href = msgText;
};




// ********************************************

module.exports = {
    getAllCats,
    submitCat,
    appendCats,
    appendCat,
    getMessage,
    renderMessage
}