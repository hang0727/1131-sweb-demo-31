const p = document.querySelector('.show-midterm-answer')
console.log('p', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_31':
      p.innerHTML = `<iframe src='./p1_31/p1_31.html' width="100%" height="100%" />`
      break
  }
  switch (item) {
    case 'p2_31':
      p.innerHTML = `<iframe src='./p2_31/p2_31.html' width="100%" height="100%" />`
      break
  }
  switch (item) {
    case 'p3_31':
      p.innerHTML = `<iframe src='./p3_31/p3_31.html' width="100%" height="100%" />`
      break
  }
}
