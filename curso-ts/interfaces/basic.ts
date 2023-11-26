(() => {
  interface heroe {
    name: string;
    age: number;
    powers: number[];
    getName: () => string;
  };

  let flash: heroe = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2],
    getName() {
      return this.name;
    },
  };

  let superman: heroe = {
    name: "Clark Kent",
    age: 60,
    powers: [1],
    getName() {
      return this.name;
    },
  };
})();
