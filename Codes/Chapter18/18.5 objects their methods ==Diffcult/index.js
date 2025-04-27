/// creating an object slow way
let computer={
    cpu: "i3",
    gpu: "rtx",
    ram: "16"
}
///creating an object fast way using a function we call it object factory
function Computer(cpu,gpu,ram){ /// we use Computer instead of computer cause it is how we define object for other programmers
    this.cpu= cpu;
    this.gpu= gpu;
    this.ram= ram;
    this.buy= function(){ //// what is new ? using methods!
        alert("i will buy");
        buyWholePc();
        move();
    }
}

let Computer1=new Computer("i4","gtx","8");
console.log(Computer1);

Computer1.buy();/// calling  a Method