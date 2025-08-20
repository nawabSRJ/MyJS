// Project 1 : Live Character Count
// On keypress event we will take the count of the current chars in textarea and minus it with the allowed limit
document.querySelector('.txtArea').addEventListener('keypress',function(event){
    // cound the chars in the textarea
    const currChars = this.value.length;
    // console.log(currChars);
    document.getElementById('currentChars').textContent = currChars
    document.getElementById('reaminChars').textContent = 20-currChars;
})