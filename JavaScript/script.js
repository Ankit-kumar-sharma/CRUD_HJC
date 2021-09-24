var rollV;
var nameV;
var passwordV;
var addressV; 
function read()
{
rollV=document.getElementById('rollNumber').value;
nameV=document.getElementById('fullName').value;   
passwordV=document.getElementById('password').value;
addressV=document.getElementById('address').value;
// alert(rollV);
}
//Insert Data into firebase...
document.getElementById("insert").onclick = function ()
{
    // alert("Insert called");
    read();
    firebase.database().ref("student/" + rollV).set({
      name: nameV,
      rollno: rollV,
      password: passwordV,
      address: addressV,
    });
    alert('data inserted successfully');
    document.getElementById("rollNumber").value="";
    document.getElementById("fullName").value="";
    document.getElementById("password").value="";
    document.getElementById("address").value="";
}
// delete data from the firebase
document.getElementById("delete").onclick = function ()
{
  read();
  firebase.database().ref("student/"+rollV).remove();
  alert("data deleted successfully");
  document.getElementById("rollNumber").value="";
  document.getElementById("fullName").value="";
  document.getElementById("password").value="";
  document.getElementById("address").value="";

}
// update data in the firebase
document.getElementById("update").onclick=function()
{
  read();
  firebase.database().ref("student/"+rollV).update(
    {
      name:nameV,
      // rollno:rollV, can't update roll number because it acting as primary key.
      password:passwordV,
      address:addressV,
    }
  );
  alert("Data has been updated successfully");
    document.getElementById("rollNumber").value="";
    document.getElementById("address").value="";
    document.getElementById("password").value="";
    document.getElementById("fullName").value="";
}
// read the data from the firebase
document.getElementById("read").onclick = function()
{
  read();
  firebase.database().ref("student/"+rollV).on("value", function(snap)
  {
    document.getElementById("rollNumber").value=snap.val().rollno;
    document.getElementById("fullName").value=snap.val().name;
    document.getElementById("password").value=snap.val().password;
    document.getElementById("address").value=snap.val().address;
  });
}