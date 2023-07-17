// FOR 

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 10; i > 0; i--) {

    if ( i === 5) {
        continue; // vai ignorar o 5 e continuar o loop após
    }
    
    console.log(i);
}