const name1 = document.querySelector(".nameText");
const description1 = document.querySelector(".descriptionText");
const job1 = document.querySelector(".jobText");
const cancel1 = document.querySelector(".cancel");
const save1 = document.querySelector(".save");
cancel1.addEventListener("click", () => {
  name1.value = "";
  description1.value = "";
  job1.value = "";
});
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

save1.addEventListener("click", () => {
  if (name1.value != "" && description1.value != "" && job1.value != "") {
    localStorage.setItem("inputname", name1.value);
    localStorage.setItem("inputdescription", description1.value);
    localStorage.setItem("inputjob", job1.value);
    // const s1 = localStorage.getItem("inputname");
    // const s2 = localStorage.getItem("inputdescription");
    // const s3 = localStorage.getItem("inputjob");
    // first.value = "Name = `${s1}`";
    // second.value = "Name = `${s1}`";
    // third.value = "Name = `${s1}`";
    name1.value = "";
    description1.value = "";
    job1.value = "";
  }
});

// const del1 = document.querySelector(".del");
// const textBox11 = document.querySelector(".tetxBox1");
// var para = document.querySelector("p");
// del1.addEventListener("click", () => {
//   textBox11.removeChild("para");
// });
