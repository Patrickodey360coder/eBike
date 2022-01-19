const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_f363x44a.json'
})

const svgBiker = document.getElementById('bike-svg');
const animItem2 = bodymovin.loadAnimation({
  wrapper: svgBiker,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets5.lottiefiles.com/packages/lf20_azp4pamb.json'
});





