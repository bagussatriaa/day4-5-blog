let blogData = [];
console.log(blogData);
alert("Select an image before you click submit");
function addPost(event) {
  event.preventDefault();
  let projectName = document.getElementById("project-name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let desc = document.getElementById("desc").value;
  // checkbox declared
  let js = document.getElementById("js").checked;
  let java = document.getElementById("java").checked;
  let vuejs = document.getElementById("vuejs").checked;
  let bootstrap = document.getElementById("bootstrap").checked;

  let duration = "";

  if (startDate < endDate) {
    duration = new Date(endDate - startDate);
  } else {
    return alert("Incorrect date entry");
  }

  if (js) {
    js = document.getElementById("js").value;
  } else {
    js = "";
  }
  if (java) {
    java = document.getElementById("java").value;
  } else {
    java = "";
  }
  if (vuejs) {
    vuejs = document.getElementById("vuejs").value;
  } else {
    vuejs = "";
  }
  if (bootstrap) {
    bootstrap = document.getElementById("bootstrap").value;
  } else {
    bootstrap = "";
  }

  let image = document.getElementById("image").files;
  image = URL.createObjectURL(image[0]);

  if (projectName == "") {
    return alert("The project name is required.");
  } else if (desc == "") {
    return alert("The description is required too sir..");
  } else if (js == "" && java == "" && vuejs == "" && bootstrap == "") {
    return alert("Take at least 1 technologies");
  }
  // if (startDate == "" || endDate == "") {
  //   return alert("isi bos");
  // }
  let blog = {
    projectName,
    startDate,
    endDate,
    desc,
    js,
    java,
    vuejs,
    bootstrap,
    image,
    duration,
  };

  console.log(blog);

  blogData.push(blog);
  console.log(blogData);
  renderPost();
}

function renderPost() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < blogData.length; i++) {
    document.getElementById("contents").innerHTML += `
    <div id="contents" class="contents">
    <div class="grid-item">
      <div class="img">
        <img src="${blogData[i].image}" />
      </div>
      <h2>${blogData[i].projectName}</h2>
      <h6>Duration : ${blogData[i].duration}</h6>
      <p>${blogData[i].desc}</p>
      <i class="fa-brands fa-${blogData[i].js}"></i>
      <i class="fa-brands fa-${blogData[i].java}"></i>
      <i class="fa-brands fa-${blogData[i].vuejs}"></i>
      <i class="fa-brands fa-${blogData[i].bootstrap}"></i>
      <div class="button">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  </div>
    `;
  }
}

let contentBase = `
<div id="contents" class="contents">
          <div class="grid-item">
            <div class="img">
              <img src="assets/download-removebg-preview.png" alt="Ddd" />
            </div>
            <h2>Title</h2>
            <h6>Duration :</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa nesciunt odit placeat laboriosam velit laudantium iure ad adipisci ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore t</p>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-js"></i>
            <div class="button">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </div>
`;
