const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_f363x44a.json'
})