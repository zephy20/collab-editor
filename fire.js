import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAH-D94woFVdcq2aVyl8UV864JbIAC0wC4",
    authDomain: "collabeditor-1b4c1.firebaseapp.com",
    databaseURL: "https://collabeditor-1b4c1.firebaseio.com",
    projectId: "collabeditor-1b4c1",
    storageBucket: "collabeditor-1b4c1.appspot.com",
    messagingSenderId: "669997405600"
    	};


var fire = firebase.initializeApp(config);

export default fire;
