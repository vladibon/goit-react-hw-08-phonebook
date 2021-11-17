import Notiflix from 'notiflix';

Notiflix.Report.init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#f8f8f8',
  borderRadius: '10px',
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  fontFamily: 'Quicksand',
  svgSize: '80px',
  plainText: true,
  titleFontSize: '18px',
  messageFontSize: '16px',
  buttonFontSize: '14px',
  cssAnimation: true,
  cssAnimationDuration: 300,
  cssAnimationStyle: 'fade',

  warning: {
    svgColor: '#eebf31',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#eebf31',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(0,0,0,0.5)',
  },
});
