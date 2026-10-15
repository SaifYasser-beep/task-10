let users = [];

function createUser() {
  let username = prompt("أدخل اسم المستخدم:");
  let password = prompt("أدخل كلمة المرور:");

  if (username && password) {
    let NewUser = {
      username: username,
      password: password
    };
    users.push(NewUser);
    alert("تم إضافة المستخدم بنجاح!");
  } else {
    alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
  }
} 

function readUsers() {
  if (users.length === 0) {
    alert("لا يوجد مستخدمين لعرضهم.");
  }

  console.log("قائمة المستخدمين:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. اسم المستخدم: ${user.username}, كلمة المرور: ${user.password}`);
  });
} 