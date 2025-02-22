const data = [
  {
    name: "Jack",
    age: 23,
  },
  {
    name: "Arul",
    age: 25,
  },
  {
    name: "Sanjana",
    age: 27,
  },
];

const response = new Promise((resolve, reject) => {
  //   resolve(data);
  reject("Sorry not available");
});

// response
//   .then((info) => {
//     console.log("From then", info);
//   })
//   .catch((err) => {
//     console.log("Err", err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

async function getData() {
  try {
    const info = await response;
    console.log(info);
  } catch (error) {
    console.log("Err", error);
  }
}

getData();
