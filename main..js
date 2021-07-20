Webcam.set({
    width: 350,
    height: 320,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera");


Webcam.attach("#camera");


function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xpk003O1I/model.json', modelLoaded)

function modelLoaded() {
    console.log("modelloaded");
}
function check(){
    img=document.getElementById('selfie_img')
classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results);
    document.getElementById("r_o_n").innerHTML=results[0].label
    document.getElementById("r_a_n").innerHTML=results[0].confidence.toFixed(3)
}
}