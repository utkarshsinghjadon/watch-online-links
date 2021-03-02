const docRef = db.collection("Hotstar").doc("livetelecast");
const guideList= document.getElementById('list');
docRef.get().then((doc) => {
    if (doc.exists) {
        let html = '';
    const theory = doc.data();
      const li = `
      <h1>Hotstar Live Telecast Season 1</h1>
        <a href="${theory.E01}">E01</a>
        <a href="${theory.E02}">E02</a>
        <a href="${theory.E03}">E03</a>
        <a href="${theory.E04}">E04</a>
        <a href="${theory.E05}">E05</a>
        <a href="${theory.E06}">E06</a>
        <a href="${theory.E07}">E07</a>
<!--    <a href="${theory.E08}">E08</a>-->

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
