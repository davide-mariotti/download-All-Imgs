(function() {
  const images = Array.from(document.images);
  let imageURLs = images.map(img => img.src);

  // Remove duplicates
  imageURLs = [...new Set(imageURLs)];

  console.log("Total Unique Images:", imageURLs.length);
  console.log("Unique Image URLs:");
  imageURLs.forEach((url, index) => {
    console.log(`${index + 1}. ${url}`);
    let a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop().split("?")[0];
    /*WARNING*/
    //a.click();
  });
})();

/*
if you remove the comment on line 16 you instant download all the imgs
if you keep commented you can just write the imgs urls in console
*/
