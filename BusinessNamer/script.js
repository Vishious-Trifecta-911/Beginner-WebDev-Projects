generateName = () => {
  let n1 = Math.floor(Math.random() * 3);
  let n2 = Math.floor(Math.random() * 3);
  let n3 = Math.floor(Math.random() * 3);

  if (n1 === 0) {
    n1++;
  }
  if (n2 === 0) {
    n2++;
  }
  if (n3 === 0) {
    n3++;
  }

  let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
  };
  let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments",
  };
  let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
  };
  let random = {
    num1: n1,
    num2: n2,
    num3: n3,
  };

  if (
    random.num1 in Object.keys(obj1) &&
    random.num2 in Object.keys(obj2) &&
    random.num3 in Object.keys(obj3)
  ) {
    document.getElementsByTagName("h1")[0].innerHTML =
      obj1[random.num1] + " " + obj2[random.num2] + " " + obj3[random.num3];
  }
};
