var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


    //Touch screen
    var width = screen.width;

    newWidth = screen.width - 70;
    newHeight = screen.height - 300;

    if (width < 992){
       document.getElementById('myCanvas').width = newWidth;
       document.getElementById('myCanvas').height = newHeight;
       document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", touch_start);
    function touch_start(e){
        console.log("Touchstart is used");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", touch_move);
    function touch_move(e){
        console.log("Touchmove is used");
        current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("X = " + current_touch_x + "Y = " + current_touch_y);
        ctx.lineTo(current_touch_x, current_touch_y);
        ctx.stroke();
        last_position_of_x = current_touch_x;
        last_position_of_y = current_touch_y;
    }
    
    function clear_area(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        console.log("Cleared");
    }

    function fill_canvas(){
        ctx.fillStyle = color;
        ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
        console.log("Filled");
    }