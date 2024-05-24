

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is cInitialized!');
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text(Saksham, 50, 300);
}



function gotPoses(results)
{
    if(results.lenght > 0)
        {
            console.log(results);
            textX = results[0].pose.text.x;
            textY = results[0].pose.text.y;
            console.log("textX = " + textX +" textY = " +textY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

            console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = "  + difference);

            
        }
}