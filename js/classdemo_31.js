const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
  switch (item) {
    case 'w02_intro_31':
      p.innerHTML = `<iframe src='./demo/w02_intro_31/index.html' width="100%" height="100%" />`
      break
  }
  switch (item) {
    case 'w03_card_31':
      p.innerHTML = `<iframe src='./demo/w03_card_31/index.html' width="100%" height="100%" />`
      break
  }
  switch (item) {
    case 'w06_blog_31':
      p.innerHTML = `<iframe src='./demo/w06_blog_31/index.html' width="100%" height="100%" />`
      break
  }
}
