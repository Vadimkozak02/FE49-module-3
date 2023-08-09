'use strict';

// ####  Homework 33
// ============


// #### Задачи: 

// С ниже приведенным объектом решить следующие задачи:

//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


// ```javascript
//     const subjects = {
//         mathematics: {
//             students: 200,
//             teachers: 6
//         },
//         biology: {
//             students: 120,
//             teachers: 6
//         },
//         geography: {
//             students: 60,
//             teachers: 2
//         },
//         chemistry: {
//             students: 100,
//             teachers: 3
//         }
//     }
// ```

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// Task 1. Создать строку из названий предметов написаных через запятую
const nameOfSubject = [];

for (let key in subjects) {
    nameOfSubject.push(key);
}

console.log('Task 1. Name of subject: ', nameOfSubject.join(', '));

// Task 2. Посчитать общее количнство студентов и учителей на всех предметах
const allStudentsOfSubjectArr = [];
const allTeachersOfSubjectArr = [];
let allMembersOfSubjectArr = [];

for (let key in subjects) {
    allStudentsOfSubjectArr.push(subjects[key].students);
    allTeachersOfSubjectArr.push(subjects[key].teachers);
}
allMembersOfSubjectArr = allStudentsOfSubjectArr.concat(allTeachersOfSubjectArr);
allMembersOfSubjectArr = allMembersOfSubjectArr.reduce((acc, curVal) => acc + curVal, 0);
console.log('Task 2. All members of subjects:', allMembersOfSubjectArr);

// Task 3. Получить среднее количество студентов на всех пердметах
let studentsArr = [];
let averageValueOfStudent = '';
let count = 0;
for (let key in subjects) {
    studentsArr.push(subjects[key].students);
    count++;
}
studentsArr = studentsArr.reduce((acc, curVal) => acc + curVal, 0);
averageValueOfStudent = studentsArr / count;
console.log('Task 3. Average value of all students:', averageValueOfStudent);

// Task 4. Создать массив из объектов предметов
let allSubjectArr = [];
for (let key in subjects) {
    allSubjectArr.push(subjects[key]);
}
console.log('Task 4. All subjects array', allSubjectArr);

// Task 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
allSubjectArr.sort((a, b) => a.teachers - b.teachers);
console.log('Task 5. Sorted subjects array:', allSubjectArr);

