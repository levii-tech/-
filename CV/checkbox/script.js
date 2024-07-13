var citiesByState = {
    Iran:['Tehran','Mashhad'],
    England:['Manchester','London']
}

function makeSubmenu(value){
    if (value.length === 0){
        document.getElementById('town').innerHTML = "<option></option>";
    }else {
        var citiesOptions = "";
        for(cityId in citiesByState[value]) {
            citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
        }
        document.getElementById('town').innerHTML  = citiesOptions;
    }
}

function displaySelected(){
    var country = document.getElementById('country').value;
    var town = document.getElementById('town').value;
    alert(country+'/n'+ town);
}

function resetSelection(){
    document.getElementById('town').selectedIndex = 0;
    document.getElementById('country').selectedIndex = 0;
}
