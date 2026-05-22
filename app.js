let boxes = document.querySelectorAll(".box");
    let clear = document.querySelector("#but");
    let winmsg = document.querySelector("#winners");

    let turnx = true;

    const winpatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ]

    boxes.forEach((box) =>
        box.addEventListener('click', function () {
            if (turnx) {
                box.textContent = "X";
                turnx = false;
                box.disabled = true;
            }
            else {
                box.textContent = "O";
                turnx = true;
                box.disabled = true;
            }
            checkwinner();
            draw();
        })
    )

    function checkwinner() {
        for (let patterns of winpatterns) {
            let pos1 = boxes[patterns[0]].textContent;
            let pos2 = boxes[patterns[1]].textContent;
            let pos3 = boxes[patterns[2]].textContent;

            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 == pos2 && pos2 == pos3) {
                    winmsg.textContent = `Congrats, Winner is ${pos1}`;
                    boxes.forEach((box) => {
                        box.disabled = true;
                    })
                }
            }
        }
    }

    clear.addEventListener('click', function () {
        boxes.forEach((box) => {
            box.textContent = "";
            box.disabled = false;
            winmsg.textContent = "";
        })
    })

    function draw() {
        if (boxes[0].textContent != "" && boxes[1].textContent != "" && boxes[2].textContent != "" && boxes[3].textContent != "" && boxes[4].textContent != "" &&
            boxes[5].textContent != "" && boxes[6].textContent != "" && boxes[7].textContent != "" && boxes[8].textContent != "" && winmsg.textContent == ""
        )
        {
            winmsg.textContent = "Its a Draw";
        }
    }