// object definition
const student1 = {
  name: "Jack",
  introduction: function (score) {
    console.log(this.name + "scored " + score + " in an exam.");
  },
};

// object definition
const student2 = {
  name: "Jimmy ",
};

// passing two parameters student2 and '95'
let result = student1.introduction.bind(student2, 95);

// invoking result() function
result(); // Jimmy scored 95 in an exam.