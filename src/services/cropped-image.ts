
function CroppedImage(url:string) {

    if(!url) return "";
    let targetIndex = url.indexOf('media/') + 'media/'.length;
    return url.slice(0,targetIndex) + 'crop/600/400/' + url.slice(targetIndex);
}

export default CroppedImage;