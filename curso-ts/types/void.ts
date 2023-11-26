(() => {
    function callBatman(msg: String):Number {
        return 1;
    }

    callBatman('Hola');

    function vacio():void {
        console.log('Un saludo para Pedro!')
    }

    vacio();

    function test(x:String): String {
        return "Hola";
    }
    
    console.log(test("x"));

    const a = ():void => {
        console.log("Saludo");
    }

    a()

})();