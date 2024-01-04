var newOperation=true
var contacts= [
    {
        name:"" ,
        phone:""  
    },
]
while(newOperation==true){
    let operation= prompt("Enter your operation (add or search)");

switch(operation)
{
    case "add":
   addNewContact();
   console.log(contacts);
   break;
    case "search" :
   searchContact();
   console.log(contacts);
   break;
}
newOperation= confirm("Do you want to enter a new operation");
}
function addNewContact(){
    var newContact= {};
     newContact.name=prompt("enter contact name");
     newContact.phone=prompt("enter the contact number");
    contacts.push(newContact);
}
function searchContact(){
    var searchKeyword = prompt("enter name or phone")
    for(var i =0;i<contacts.length;i++){
        var currentContact = contacts[i];
        if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
            alert("name = "+currentContact.name +" phone = "+currentContact.phone);
            break;
        }

    }
}