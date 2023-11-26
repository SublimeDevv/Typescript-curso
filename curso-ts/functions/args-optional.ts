(() => {
    const x = (firstName: string, lastName?: string):string => {
        return firstName +' '+ (lastName || 'sin apellido');
    }

    console.log(x('Juan Diego', 'Mendoza'))
})()