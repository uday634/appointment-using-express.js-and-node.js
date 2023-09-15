var description = document.getElementById('description');
var expence = document.getElementById('expence');
var btn = document.getElementById('btn');
var url = 'http://localhost:3000/data';

// Fetching the data from the server
axios
.get('http://localhost:3000/api/data')
.then((res) => {
    let data = res.data;
    for (let i = 0; i < data.length; i++) {
        let name1 = data[i].name;
        let des = data[i].description; // Update field name to 'description'
        let id = data[i].id;
        createList(name1, des, id);
    }
    console.log(res);
})
.catch((err) => console.log(err));

// Delete element from the list
function removeing(button, lisam, li, id) {
    button.addEventListener('click', (e) => {
        lisam.removeChild(li);
        axios
        .delete('http://localhost:3000/store' + '/' + id)
        .then((res) => {
            li.remove();
        })
        .catch((err) => console.log(err));
    });
}

function createList(name, des, id) {
    var li = document.createElement('li');
    var edit = document.createElement('button');
    var delbtn = document.createElement('button');
    var list1 = document.getElementById('odlist1');
    var list2 = document.getElementById('odlist2');
    edit.innerHTML = 'Edit' 
    delbtn.innerHTML = 'X';
    li.innerHTML = name + '-' + des;
    list1.appendChild(li);
    li.appendChild(edit);
    li.appendChild(delbtn);

    removeing(delbtn, list1, li, id);

    check.addEventListener('click', (e) => {
        list2.appendChild(li);
        removeing(delbtn, list1, li, id);
        removeing(delbtn, list2, li, id);
    });
}

btn.addEventListener('click', (e) => {
    var desval = description.value;
    var toname = expence.value;
    var obj = {
        name: toname,
        description: desval, // Update field name to 'description'
    };
    // Posting the data to the server
    axios
    .post('http://localhost:3000/data', obj)
    .then((res) => {
        console.log(res);
        let name = res.data.name;
        let des = res.data.description; // Update field name to 'description'
        let id = res.data._id;
        createList(name, des, id);
    })
    .catch((err) => console.log(err));
});
