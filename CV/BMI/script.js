const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        //NaN !== NaN
        result.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
       const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
       result.innerHTML = `${bmi}`;
    }
});
// The purpose of e.preventDefault(); is to prevent the default behavior associated with the form submission event. In the context of a form submission, the default behavior is to reload the page or navigate to a new one. By calling e.preventDefault();, you are telling the browser not to execute its default action for the event.
