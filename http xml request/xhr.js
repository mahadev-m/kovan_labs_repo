const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    if (data) {
      xhr.setRequestHeader("content-Type", "aoolicartion/json");
    }
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject("somthing went wrong!");
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData.data);

    var lst = document.getElementById("list");
    lst.innerHTML = "<table id='tblData'></table>";
    var tbl = document.getElementById("tblData");
    tbl.innerHTML = "<tr><th>First Name</th></tr>";

    responseData.data.map((x) => {
      console.log(x.first_name);
      tbl.innerHTML += "<tr><th>" + x.first_name + "</th></tr>";

      //responseData.data.map((x) => {
      // console.log(x.email);
      // tbl.innerHTML += "<tr><th>" + x.email + "</th></tr>";
    });
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((response) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
