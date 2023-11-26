(() => {
    const x = (msg:string):(never|string) => {
        if ( false ) {
            throw new Error(msg)
        }
        return "Hola";
    }

    x("Auxilio");
})();