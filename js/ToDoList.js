//------------------------------------To Do List--------------------

class ToDoItem {
    constructor(name, dueDate, important) {
      this.name = name;
      this.dueDate = dueDate;
      this.important = important;
    }

    // Method
    calcArea() {
      return this.name + this.important;
    }
}


$(".fa-plus").click(function (e) { 

    $(".fa-plus").css({"transform": "rotate(90deg)", "transition": "0.1s"});

    $("#todo .newItem").html("   ");

    var newItem = $("#todo .newItem")
    //var listArea = $("#todo .list-area")
    var itemRow = `<div class="item-row">
                        <input type="text" class="item-name" placeholder="Name">
                        <input type="date" name="" id="" class="item-dueDate">
                        <label for="">Important</label>
                        <input type="checkbox" name="" id="" class="item-important">
                        <label for="">Done</label>
                        <input type="checkbox" name="" id="" class="item-done">
                    </div>`


    $(newItem).append(itemRow);

    $(".item-done").click(function (e) { 

        // let name = 
        // let dueDate = 
        // let important = 
        // debugger;

        // let item = new ToDoItem(name, dueDate, important)

        // localStorage.setItem("ToDoItem")
        
        var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

        if(document.querySelector(".item-important").checked){
            var setImportant = true
        }


        var newItem = 
        {
        'name': $(".item-name").val(),
        'dueDate': $(".item-dueDate").val(),
        'important': setImportant
        };

        oldItems.push(newItem);

        localStorage.setItem('itemsArray', JSON.stringify(oldItems));

        $("#todo .newItem").html("   ");
        loadItems()
    });
});

$(".fa-times-circle").click(function (e) { 
    window.localStorage.removeItem('itemsArray');
    Swal.fire('To do list has been cleared')
    loadItems()
});

loadItems()
function loadItems(){
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

    var listArea = $(".list-area")
    $(listArea).html("   ")

    $.each(oldItems, function (indexInArray, valueOfElement) { 

        if (oldItems[indexInArray].important == true){
            var markAsImportant = '<i class="fas fa-exclamation-circle"></i>'
        }

        var itemRow = `<div class="item-row">
                            <p>` + oldItems[indexInArray].name + `</p>
                            <p>` + oldItems[indexInArray].dueDate + `</p>
                            <p>` + markAsImportant + `</p>
                        </div>`

        $(listArea).append(itemRow);
    });
}