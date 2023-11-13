const students = [
    {
        name: 'Carl',
        testGrade1: 7,
        testGrade2: 4, 
    },
    {
        name: 'Bet',
        testGrade1: 3,
        testGrade2: 2,  
    },
    {
        name: 'Elsa',
        testGrade1: 5,
        testGrade2: 9,  
    },
    {
        name: 'Ricky',
        testGrade1: 0,
        testGrade2: 8,  
    },
];

function calcTest (test1, test2) {
    return ((test1 + test2) / 2).toFixed(2); 
}

function validateGrade (average, name ) {

     if (average >= 7) {
        alert(`Parabéns! ${name} sua média é  ${average} Você passou!`)
    }else {
        alert(`Mais empenho e dedicação na  próxima ${name}, sua média é ${average} Te vejo na recuperção muhahahah!`)
    }
}

for (let student of students) {

     let average = calcTest(student.testGrade1, student.testGrade2);
     validateGrade(average, student.name)
    
    
}





