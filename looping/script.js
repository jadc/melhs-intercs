(() => {
    for(let i = 0; i < 500; i++) console.log("I'm so happy");

    let multiplesOfFour = [];
    for(let i = 0; i < (800 / 4); i++) multiplesOfFour.push(i * 4);
    console.log(multiplesOfFour);

    let oddNumbers = [];
    for(let i = 55; i >= 11; i--) if(i % 2 != 0) oddNumbers.push(i);
    console.log(oddNumbers);

    let series1 = 0;
    for(let i = 5; i <= 50; i++) series1 += i;
    console.log(series1);

    let series2 = 0;
    for(let i = 10; i <= 100; i += 10) series2 += i;
    console.log(series2);
})();