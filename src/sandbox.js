function reverse(str){
    return str
      .split(' ')
      .reverse()
      .join()
    console.log(reverse('I am Joseph'))
}

function titleCase(str) {

    const words = str.split(' ')

    return words.map( (word) => {

        word.charAt[ 0 ].toUpperCase( )

    }).join(' ')
console.log(titleCase('i am joe'))
}