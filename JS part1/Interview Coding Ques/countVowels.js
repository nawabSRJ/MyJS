// Q12. Count vowels in a string

// (Asked at: Wipro, HCL)

// Input:  "javascript"
// Output: 3   (a, a, i)

function countVowels(str){
    var vowels = 'aeiou';
    var cnt=0;
    for(let i of str){
        // console.log(i);
        if(vowels.includes(i)){ 
            console.log(`Vowel found : ${i}`);
            cnt++
        };
    }
    console.log(`Total Vowels are : ${cnt}`);
}

countVowels('javascript');

