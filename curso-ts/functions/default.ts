(() => {
    const x = (firstName: string, lastName?: string, upper: boolean = false):string => {
       if (upper) {
        return (firstName +' '+ (lastName || 'sin apellido')).toUpperCase();
       }
       return (firstName +' '+ (lastName || 'sin apellido'));

    }
    const a = x('Juan Diego', 'Mendoza', true);
    console.log({a})
})()