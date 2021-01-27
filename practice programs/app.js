fetch("https://randomuser.me/api/?gender=female&results=10")
  .then((response) => response.json())
  .then((data) =>
    data.reults.map((runner) => {
      const list = document.createElement("li");

      const image = document.createElement("img");
      image.innerHTML = runner.picture.medium;
      const span = document.createElement("span");
      span.textContent = runner.name.first + "" + runner.name.last;
      (list.innerHTML = image), span;
      document.getElementById("runners").appendChild(list);
      const und = document.createElement("ul");
    })
  );
//     let li = createNode("li"),
//     imag = createNode("img"),
//     span = createNode("span");
//   imag.src = runner.picture.medium;
//   span.innerHTML = `${runner.name.first}
//     ${runner.name.last}`;
//   append(li, img);
//   append(li, span);
//   append(ul, li);

//   .then((data) => console.log(data));
// let runners = data.results;
// return runners.map((runner) => {

// });
