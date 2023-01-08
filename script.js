var selectedRow = null;
function onFromSubmit(e){
    event.preventDefault()
        var formData = readFormData();
        if(selectedRow === null ){
            InsertNewRecord(formData);
        }
        else{
              updateRecord(formData);
        }
        resetForm();
}

// Retrive the data
function readFormData(){
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["email"] = document.getElementById("email").value;
    formData["date"] = document.getElementById("date").value;
    formData["adress"] = document.getElementById("adress").value;
    formData["account"] = document.getElementById("account").value;
    formData["ifsc"] = document.getElementById("ifsc").value;
    formData["bank"] = document.getElementById("bank").value;
    return formData;

}

//Insert the data
function InsertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var Cell1 = newRow.insertCell(0);
        Cell1.innerHTML = data.fname;
    var Cell2 = newRow.insertCell(1);
        Cell2.innerHTML = data.lname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.mobile;
    var cell4 = newRow.insertCell(3);
        c.innerHTML = data.email;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.date;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.adress;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.account;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.ifsc;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.bank;
    var cell10 = newRow.insertCell(9);
        cell10.innerHTML = '<button onClick="onEdit(this)">Edit</button>  <button>Delete</button>'    
}

//edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lnamr').value = selectedRow.cells[1].innerHTML;
    document.getElementById('mobile').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('date').value = selectedRow.cells[4].innerHTML;
    document.getElementById('adress').value = selectedRow.cells[5].innerHTML;
    document.getElementById('account').value = selectedRow.cells[6].innerHTML;
    document.getElementById('ifsc').value = selectedRow.cells[7].innerHTML;
    document.getElementById('bank').value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.mobile;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.adress;
    selectedRow.cells[6].innerHTML = formData.account;
    selectedRow.cells[7].innerHTML = formData.ifsc;
    selectedRow.cells[8].innerHTML = formData.bank;
}

//Delete the data
function onDelete(td){
    if(confirm('do you  want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
     }
     resetForm();
}

//reset the data 
function resetForm(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
    document.getElementById('adress').value = '';
    document.getElementById('account').value = '';
    document.getElementById('ifsc').value = '';
    document.getElementById('bank').value = '';

}