export const printObject = (argument: any) => {
    console.log(argument)
}

export function genericFunction<T>(params:T):T {
    return params;
}

export const AnotherGenericFunction = <T>(params: T): T => params; export interface Hero {
    name: string,
    realName: string
}