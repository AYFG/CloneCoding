function result() {
  let yes_count = 0;
  let no_count = 0;

  let elements = document.getElementsByClassName("yes-button");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      yes_count++;
    }
  }

  elements = document.getElementsByClassName("no-button");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      no_count++;
    }
  }

  elements = document.getElementsByClassName("maybe-button");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      yes_count++;
    }
  }

  if (yes_count + no_count != 2) {
    alert("모든 문제에 답해주세요.");
    return;
  }

  if (yes_count == 2) {
    location.href = "result_3.html";
  } else if (yes_count == 1) {
    location.href = "result_2.html";
  } else {
    location.href = "result_1.html";
  }
}
