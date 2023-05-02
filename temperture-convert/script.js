const calculateTemp=()=>{
     
    // enter the number
    const enterNum = document.getElementById("temp").value;
    // console.log(enterNum);
     
    // choose the select options
    const numberTemp =document.getElementById('temp_diff')
    const valueTemp = numberTemp.options[numberTemp.selectedIndex].value;
    // console.log( valueTemp);

    const celToFah = (cel)=>{
        let fahrenhit = Math.round((cel*9/5)+32) ;
        return fahrenhit;

    }
    const fahToCel = (fah)=>{
        let celcius = Math.round((fah-32)*5/9);
        return celcius;

    }
    let result;
    if (valueTemp == 'cel'){
        result = celToFah(enterNum);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`;

    }else{
        result = fahToCel(enterNum);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celcius`;

        
    }




}