const user1 = {
  name: "Anton",
  age: 28,
  phone: 9388323423,
  email: "anton@gmail.com",
  print() {
    console.log(this.name + " is of age " + this.age);
  },
};

let unknown = "email";

// console.log(user1[unknown]);

// copy by value
// copy by reference

// let a = 10;
// let b = a;
// a = 20;
// console.log(b);

// spread operator - ...

const user2 = user1;
// const user2 = { ...user1 };

user2.email = "aon@gmail.com";

console.log(user1[unknown]);

console.log(user2[unknown]);

user2.print();
