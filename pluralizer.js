function pluralize(noun, num){
    if (num != 1 && noun != 'sheep' && noun != 'geese'){
        return num + ' ' + noun + 's';
    }else {
        return num + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have '+ pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));