function convidados(...nomes) {
    console.log('Seja bem vindos todos os convidades', nomes);

    nomes.forEach( nome => console.log(`Seja bem vindo ${nome}`))
}

convidados('Diego', 'Icaro', 'kate')