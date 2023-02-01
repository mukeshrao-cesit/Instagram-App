import domtoimage from 'dom-to-image';
export const domToImage = (ref: any) => {
  var scale = 2;
  const result = domtoimage
    .toBlob(ref, {
      width: ref.clientWidth * scale,
      height: ref.clientHeight * scale,
      style: {
        transform: 'scale(' + 1 + ')'
      }
    })
    .then((dataUrl) => {
      return dataUrl;
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  return result;
};
