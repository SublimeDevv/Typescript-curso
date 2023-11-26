(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string):string;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: "Juan",
    age: 19,
    address: {
      id: 125,
      zip: 55931,
      city: "Cancun",
    },
    getFullAddress(id: string) {
        return this.address.city;
    },
  };
})();
