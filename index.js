

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7FURGoGht8wANriDV0YIRYKoawmJzL2k",
  authDomain: "klozetassignment.firebaseapp.com",
  databaseURL: "https://klozetassignment.firebaseio.com",
  projectId: "klozetassignment",
  storageBucket: "klozetassignment.appspot.com",
  messagingSenderId: "1010237150996",
  appId: "1:1010237150996:web:6e36eab587110fe6325401",
  measurementId: "G-ZMTXY1H73H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


$(document).ready(function() {

	// Confirm browser supports HTML5 File API
	var browserSupportFileUpload = function() {
		var isCompatible = false;
		if(window.File && window.FileReader && window.FileList && window.Blob) {
			isCompatible = true;
		}
		return isCompatible;
	};

	// Upload selected file and create array
	var uploadFile = function(evt) {
		var file = evt.target.files[0];
		var reader = new FileReader();
		reader.readAsText(file);
		reader.onload = function(event) {
			//Jquery.csv
			createArray($.csv.toArrays(event.target.result));			
		};
	};

	// Validate file import
	var createArray = function(data) {	
		if(data !== null && data !== "" && data.length > 1) {
			// this.data=[]
			for(var i=1;i<data.length;i++){
				// this.data.push(data[i])

				var node={};
				node[data[0][0]]=data[i][0]
				node[data[0][1]]=data[i][1]
				node[data[0][2]]=data[i][2]
				node[data[0][3]]=data[i][3]
				node[data[0][3]]=data[i][4]
				node[data[0][5]]=data[i][5]
				node[data[0][6]]=data[i][6]
				firebase.database().ref().push(
					node
					// "Designer Name":data[i][0],
					// "Outfit Name":data[i][1],
					// "Description":data[i][2],
					// "Retail price":data[i][3],
					// "Rental price":data[i][4],
					// "Ocassion":data[i][5],
					// "Outfit type":data[i][6]
				);
			}
			
			
		
				


            
			
		}	
	};
	
	// event listener for file upload
	if (browserSupportFileUpload()) {
			document.getElementById('txtFileUpload').addEventListener('change', uploadFile, false);
		} else {
			$("#introHeader").html('The File APIs is not fully supported in this browser. Please use another browser.');
		}	
});