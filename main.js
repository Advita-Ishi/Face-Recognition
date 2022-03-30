

Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

    camera = document.getElementById("cam");
    Webcam.attach(camera);

    function capture() {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
    }
    console.log("ml5 version is",ml5.version);

    var classifier = ml5.imageClassifier("//link",modelloaded);
    function modelloaded() {
        console.log("model is loaded");
    }

    function gotResult(error, results) {
        if(error) {
            console.error(error);
        }else{
            console.log(results);
            document.getElementById("object_name").innerHTML = results [0].label;
            document.getElementById("accuracy").innerHTML = results [0].confidence.toFixed(3);
        }
        }