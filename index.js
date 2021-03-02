const docRef = db.collection("Hotstar").doc("livetelecast");
const guideList= document.getElementById('list');
docRef.get().then((doc) => {
    if (doc.exists) {
        let html = '';
    const theory = doc.data();
      const li = `
      
        <a href="${theory.E01}">E01</a>
        <hr>
        <a href="${theory.E01}">E02</a>
        <video playsinline controls src="${theory.E02}">E02</video>
        <hr>
          <a href="${theory.E01}">E03</a>
        <video playsinline controls src="${theory.E03}">E03</video>
        <hr>
          <a href="${theory.E01}">E04</a>
        <video playsinline controls src="${theory.E04}">E04</video>
        <hr>
          <a href="${theory.E01}">E05</a>
        <video playsinline controls src="${theory.E05}">E05</video>
        <hr>
          <a href="${theory.E01}">E06</a>
        <video playsinline controls src="${theory.E06}">E06</video>
        <hr>
          <a href="${theory.E01}">E07</a>
        <video playsinline controls src="${theory.E07}">E07</video>
        <!--  <hr>
          <a href="${theory.E01}">E08</a>
  <video playsinline controls src="${theory.E08}">E08</video>-->

      `;
      html += li
        guideList.innerHTML = html;
     console.log("Document data:", doc.data());
    }    else {
        // doc.data() will be undefined in this case
        guideList.innerHTML = '<h5 class="center-align"> Login to view the Theories.</h5>';
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
