function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username==null || username==""){  
        alert("Name can't be blank");  
        return false;  
      }
      else if (password==null || password==""){  
        alert("Please Enter the passowrd");  
        return false;  
      }
      else if(password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
        }  
      
}