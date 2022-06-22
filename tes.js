let tes1 = [];
function abc() {
  let start = document.getElementById('start').value;
  let end = document.getElementById('end').value;
  let duration;
  duration = takeTheTime(start, end);
  let blog = {
    duration,
  };
  tes1.push(blog);
  renderPost();
}

function renderPost() {
  document.getElementById('pos').innerHTML = '';

  for (let i = 0; i < tes1.length; i++) {
    document.getElementById('pos').innerHTML += `
      <div id="pos">
      <p>durasi :${tes1[i].duration}</p>
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
    one - two;
  }
  console.log(result);
  let msecond = 1000;
  let secInHours = 3600;
  let hoursInDay = 24;

  let distanceInDays = Math.floor(result / (msecond * secInHours * hoursInDay));
  let distanceInMonth = Math.floor(result / (msecond * secInHours * hoursInDay * 30));
  let distanceInYears = Math.floor(result / (msecond * secInHours * hoursInDay * 30 * 12));
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
// let tes1 = [];

// function abc() {
//   let start = document.getElementById('start').value;
//   let end = document.getElementById('end').value;
//   // let duration;
//   // duration = distanceInDays;
//   let blog = {
//     start,
//     end,
//   };
//   start.addEventListener('change', () => abc());

//   end.addEventListener('change', () => abc());
//   tes1.push(blog);
//   console.log(tes1);
//   console.log(blog);
//   // takeTheTime(start, end);
//   // console.log(ngetes);
//   renderPost(start, end);
//   // console.log(takeTheTime(start, end));
//   //   console.log(hasil);
// }

// function renderPost(start, end) {
//   document.getElementById('pos').innerHTML = '';

//   for (let i = 0; i < tes1.length; i++) {
//     document.getElementById('pos').innerHTML += `
//       <div id="pos">
//       <p>durasi :${takeTheTime(start, end)}</p>
//     </div>
//       `;
//   }
// }

// function takeTheTime(start, end) {
//   // const ngetes = 'ngetes';
//   // return ngetes;
//   let hasil;
//   let satu = new Date(start);
//   let dua = new Date(end);
//   //   console.log(satu, dua);

//   if (satu < dua) {
//     hasil = dua - satu;
//   } else if (hasil == undefined) {
//     return alert('eror');
//   }

//   // console.log(hasil);
//   let msecond = 1000;
//   let secInHours = 3600;
//   let hoursInDay = 24;

//   let distanceInDays = Math.floor(hasil / (msecond * secInHours * hoursInDay));
//   let distanceInMonth = Math.floor(hasil / (msecond * secInHours * hoursInDay * 30));
//   let distanceInYears = Math.floor(hasil / (msecond * secInHours * hoursInDay * 30 * 12));
//   if (distanceInDays == 1) {
//     return `${distanceInDays} Day`;
//   } else if (distanceInMonth > 12) {
//     return `${distanceInYears} Years`;
//   } else if (distanceInDays >= 30) {
//     return `${distanceInMonth} Month `;
//   } else if (distanceInDays > 1) {
//   } else if (distanceInDays > 1) {
//     return `${distanceInDays} Days`;
//   }
//   //   return distanceInDays;
// }
