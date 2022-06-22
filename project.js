let blogData = [];
console.log(blogData);
// alert("Select an image before you click submit");
function addPost(event) {
  event.preventDefault();
  let projectName = document.getElementById('project-name').value;
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;
  let desc = document.getElementById('desc').value;
  // checkbox declared
  let js = document.getElementById('js').checked;
  let java = document.getElementById('java').checked;
  let vuejs = document.getElementById('vuejs').checked;
  let bootstrap = document.getElementById('bootstrap').checked;

  let duration;
  duration = takeTheTime(startDate, endDate);

  if (js) {
    js = document.getElementById('js').value;
  } else {
    js = '';
  }
  if (java) {
    java = document.getElementById('java').value;
  } else {
    java = '';
  }
  if (vuejs) {
    vuejs = document.getElementById('vuejs').value;
  } else {
    vuejs = '';
  }
  if (bootstrap) {
    bootstrap = document.getElementById('bootstrap').value;
  } else {
    bootstrap = '';
  }
  let image = document.getElementById('image').files;
  if (image.length == 0) {
    return alert('Image empty');
  }
  image = URL.createObjectURL(image[0]);

  if (projectName == '') {
    return alert('The project name is required.');
  }

  if (desc == '') {
    return alert('The description is required too sir..');
  } else if (js == '' && java == '' && vuejs == '' && bootstrap == '') {
    return alert('Take at least 1 technologies');
  } else if (startDate == '' || endDate == '') {
    return alert('Fill the date');
  }

  let blog = {
    projectName,
    duration,
    desc,
    js,
    java,
    vuejs,
    bootstrap,
    image,
  };

  console.log(blog);

  blogData.push(blog);
  console.log(blogData);
  renderPost();
}

function renderPost() {
  document.getElementById('contents').innerHTML = '';

  for (let i = 0; i < blogData.length; i++) {
    document.getElementById('contents').innerHTML += `
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

function takeTheTime(start, end) {
  let result;
  let one = new Date(start);
  let two = new Date(end);

  if (one < two) {
    result = two - one;
  } else {
    alert('Wrong date');
  }

  const msecond = 1000;
  const secInHours = 3600;
  const hoursInDay = 24;
  const dayInMonth = 30;
  const monthInYears = 12;

  let distanceInDays = Math.floor(result / (msecond * secInHours * hoursInDay));
  let distanceInMonth = Math.floor(result / (msecond * secInHours * hoursInDay * dayInMonth));
  let distanceInYears = Math.floor(result / (msecond * secInHours * hoursInDay * dayInMonth * monthInYears));
  if (distanceInDays == 1) {
    return `${distanceInDays} Day`;
  } else if (distanceInMonth > 12) {
    return `${distanceInYears} Years`;
  } else if (distanceInDays >= 30) {
    return `${distanceInMonth} Month `;
  } else if (distanceInDays > 1) {
  } else if (distanceInDays > 1) {
    return `${distanceInDays} Days`;
  }
}

// let contentBase = `
//   <div id="contents" class="contents">
//             <div class="grid-item">
//               <div class="img">
//                 <img src="assets/download-removebg-preview.png" alt="Ddd" />
//               </div>
//               <h2>Title</h2>
//               <h6>Duration :</h6>
//               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa nesciunt odit placeat laboriosam velit laudantium iure ad adipisci ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore t</p>
//               <i class="fa-brands fa-js"></i>
//               <i class="fa-brands fa-js"></i>
//               <div class="button">
//                 <button>edit</button>
//                 <button>delete</button>
//               </div>
//             </div>
//           </div>
//   `;
