function assignGrade(score){
    if (score > 90){
        return 'A';
    }else if (score > 80){
        return 'B';
    }else if (score > 70){
        return 'C';
    }else if (score > 60){
        return 'D';
    }else {
        return 'F';
    }
}
for(var i = 60; i <= 100; i++){
    console.log('For ' + i + ', you got an ' + assignGrade(i));
}