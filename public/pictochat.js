let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);

    socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
        socket.emit('join_room', "room_name");
        socket.on('mouse', socketDragged);
    })
}

function socketDragged(data) {
    noStroke();
    fill(255);
    ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
    const data = {
        x: mouseX,
        y: mouseY
    };

    socket.emit('mouse', { data, roomName: "room_name" });

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}

function draw() { }