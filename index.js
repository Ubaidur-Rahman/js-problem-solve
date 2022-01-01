const vaxTrail = (arr) => {
    const A = arr.filter(
        (i) => i.age <= 30 && i.age >= 20 && i.temperature < 100
    );
    const B = arr.filter(
        (i) => i.age >= 31 && i.age <= 40 && i.temperature < 100
    );
    const C = arr.filter(
        (i) => i.age >= 41 && i.age <= 50 && i.temperature < 100
    );
    const D = arr.filter((i) => i.temperature >= 100);

    return { A, B, C, D };
};



// const arr = [
//     { name: 'Biplap', age: 22, temperature: 98 },
//     { name: 'sunil', age: 21, temperature: 98 },
//     { name: 'Kabir', age: 36, temperature: 99 },
//     { name: 'Rahul', age: 37, temperature: 99 },
//     { name: 'Paul', age: 42, temperature: 98 },
//     { name: 'Kat', age: 41, temperature: 98 },
//     { name: 'Nayem', age: 50, temperature: 100 },
//     { name: 'Sabnaj', age: 51, temperature: 101 }
// ];

// console.log(vaxTrail(arr));