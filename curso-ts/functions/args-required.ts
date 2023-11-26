(() => {
    const fullName = (firstName: string, lastName: string):string => {
        if (!firstName)  {
            firstName = 'Sin nombre'
        }
        return (firstName + " " + lastName);
    }

    let x: any; 

    const name = fullName(x,'Mendoza');
    console.log({name});

})()