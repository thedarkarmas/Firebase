const db = firebase.firestore();
const table = document.querySelector('#tbresult')
const form = document.querySelector('#addForm')



db.collection('test').get().then((snapshot) => {
    snapshot.forEach(doc => {
        showData(doc);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('test').add({

        name: form.name.value,
        lastname: form.lastname.value,


    });
});



function showData(doc) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);

    
    cell1.innerHTML = doc.data().name;
    cell2.innerHTML = doc.data().lastname;



    let btn = document.createElement('button');
    btn.textContent = 'ลบ';
    btn.setAttribute('class', 'btn btn-danger');
    btn.setAttribute('data-id', doc.id);
    cell3.appendChild(btn);

    btn.addEventListener('click', (e) => {
        let id = e.target.getAttribute('data-id');
        db.collection('test').doc(id).delete();
    });
}