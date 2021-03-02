const docRef = db.collection("Hotstar").doc("livetelecast");
const guideList= document.getElementById('list');
docRef.get().then((doc) => {
    if (doc.exists) {
        let html = '';
    const theory = doc.data();
      const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${theory.E01}</div>
        <div class="collapsible-body white">${theory.E02}</div>
          
        </li>
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
