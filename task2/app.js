document.addEventListener('DOMContentLoaded', () =>{
    function isPrime(n){
        let i = 1;
        let div = 0;
        while(i <= n){
            if(n % i == 0){
                div++;
            }
            i++;
        }
        if(div == 2){
            return true;
        }else{
            return false;
        }
    }
    const numb = Number(prompt('User, please insert a number to check if is prime:'));
    document.getElementById('prime').textContent = 'Number ' + numb + (isPrime(numb) ? ' is ' : ' is not ') + 'prime.';
});