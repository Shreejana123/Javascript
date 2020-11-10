function assignGrade(score){
    if(score<60){
        return 'F';
    }else if(score<70){
        return 'D';
    }else if(score<80){
        return 'C';
    }else if(score<90){
        return 'B'
    }else if(score<100){
        return 'A';
    }
}
console.log(assignGrade(78));
console.log(assignGrade(90));
console.log(assignGrade(30));
console.log(assignGrade(66));
console.log(assignGrade(89));