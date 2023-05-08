const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function render() {
  let output = ""

  const thisMonth = months[new Date().getMonth()]

  for (let month of months) {
    const active = thisMonth == month ? "active" : ""
    output += `<div class="${active}">${month}</div>`
  }

  return output
}

app.querySelector("main").innerHTML = render()
app.querySelector("header span").innerHTML = new Date().getFullYear()
