//NOT TO USE FORM TAG IN HTML ------ WHEN WE CLICK BUTTON IT WILL REFRESH THE PAGE
const list_box = document.getElementById('list');
const i_txt = document.getElementById('i_txt');
const btn = document.getElementById('btn');



//counter to save in localstorage
//temp represent no of tasks

var temp = localStorage.getItem("totalTask");
if (temp === null) {
  temp = 0;
  var task = [];

} else {
  temp = parseInt(temp);
  var task = localStorage.getItem("task");
  task = JSON.parse(task);
  for (let i = 0; i < temp; i++) {
    //let x=JSON.parse(localStorage.getItem("task"));  
    printing_data_in_screen(task[i].tak, i, task[i].status);
  }
}




btn.addEventListener('click', add);
i_txt.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    add();
  }
});



function add() {
  if (i_txt.value === '') {
    return;
  }

  printing_data_in_screen(i_txt.value, temp);


  var task = localStorage.getItem("task");
  if (task != null) {
    task = JSON.parse(task);

  } else {
    console.log("array created");
    task = [];
  }
  task[temp] = {
    "tak": i_txt.value,
    "status": false
  };

  localStorage.setItem("task", JSON.stringify(task));

  let i = 1;

  i_txt.value = "";
  temp++;
  localStorage.setItem("totalTask", temp);
}

function printing_data_in_screen(value, index, sta) {

  let task = document.createElement('div');
  let cb_con = document.createElement('div');
  let content = document.createElement('div');
  let m_box = document.createElement('div');

  list_box.appendChild(task);
  task.appendChild(cb_con);
  task.appendChild(content);
  task.appendChild(m_box);

  task.classList.add('task');
  cb_con.classList.add('cb_con');
  content.classList.add('content');
  m_box.classList.add('m_box');

  content.innerHTML = value;
  if (sta === true) {
    content.style.textDecoration = "line-through";
    cb_con.innerHTML = "✔";
  }

  cb_con.addEventListener('click', () => {

    if (content.style.textDecoration != "line-through") {
      content.style.textDecoration = "line-through";
      cb_con.innerHTML = "✔";
      let temp = localStorage.getItem("task");
      temp = JSON.parse(temp);
      temp[index].status = true;
      localStorage.setItem("task", JSON.stringify(temp));


    } else {
      content.style.textDecoration = "none";
      cb_con.innerHTML = "";


      let temp = localStorage.getItem("task");
      temp = JSON.parse(temp);
      temp[index].status = false;
      localStorage.setItem("task", JSON.stringify(temp));
    }
          //storing entire  data in temp eats ram but i will fix it later

  });

  m_box.addEventListener('click', () => {
         console.log(index);
        m_box.parentElement.style.display="none";
         list_box.removeChild(document.getElementsByClassName('task')[index]);
       m_box.parentElement.in
       list_box.childElementCount
    let temp = localStorage.getItem("task");
      temp = JSON.parse(temp);
      temp.slice(index,1);
      localStorage.removeItem("task");
      localStorage.setItem("task", JSON.stringify(temp));
  
   
  });

}



