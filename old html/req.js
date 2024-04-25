function req()
{
    var n1=document.getElementById("first").value;
    var n2=document.getElementById("last").value;
    var n3=document.getElementById("em").value;
    var n4=document.getElementById("mob").value;
    var n5=document.getElementById("pass").value;
    var n6=document.getElementById("pass2").value;

    if(n1==null || n1=="" || n2==null || n2=="" || n3==null || n3=="" || n4==null || n4=="" || n5==null || n5=="" || n6==null || n6=="")
    {
       
            alert("Please Fill the required fields!");  
            return false;
    }
}
