import domtoimage from 'dom-to-image';
export const domToImage = (ref: any) => {
  const result = domtoimage
    .toBlob(ref)
    .then((dataUrl) => {
      return dataUrl;
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  return result;
};
