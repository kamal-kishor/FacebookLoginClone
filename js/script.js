registration_validate(){
    var Value = document.querySelector( 'input[name="optradio"]:checked');   
    if(Value != null) {   
        // document.write("Radio button is selected");
        return true;
    }  
    else {  
        // document.write("Nothing has been selected");  
        alert ("Please Enter Subsequent Fields")
    }
}