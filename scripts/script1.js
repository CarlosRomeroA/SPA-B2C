import handleEdit from "./handleEdit.js"
import handleDelete from "./handleDelete.js"
import handleCreate from "./handleCreate.js"
import usersAPI from "./config.js"

$(document).ready(function(){

    $.get(usersAPI, function(data, status){
        let /* There is no variable named `user` in the provided code. */
        users = data.map(el=> 
            `<div class="col-sm-3">
                <div class="card" style="width: 19rem;">
                    <div class="position-relative">
                        <img src="${el.image}" class="card-img-top rounded-0" alt="...">
                        <div class="px-3 py-1 bg-light text-dark" style="position: absolute; bottom: 0px; left: 12px; font-size: 15px">${el.price}</div>
                        <a href="#" id="${el.id}" class="edit btn-link" style="position: absolute; top: 5px; right: 52px; font-size: 22px;"><i class="bi bi-pencil text-dark" ></i></a>
                        <a href="#" id="${el.id}" class="delete btn-link" data-bs-toggle="modal" data-bs-target="#productModal" style="position: absolute; top: 5px; right: 15px; font-size: 22px;"><i class="bi bi-trash text-dark" ></i></a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${el.item}</h5>
                        <p class="card-text">${el.category}</p>
                        <p class="card-text" style="font-size: 13px;">${el.description}</p>
                    </div>
                </div>
            </div>`
        ).join('')

        let row = $('<div class="row"></div>');
        row.append(users);
    

        $('#usersList').html(row)
        console.log(data, status)
        
        let editButton = $(".edit")
        let deleteButton = $(".delete")
        let createButton = $("#create")
        let closeButton = $("#close")

        for(let button of editButton){
            button.onclick = function() {
                handleEdit(button.id)
            }
        }

        for(let button of deleteButton){
            button.onclick = function() {
                handleDelete(button.id)
            }
        }

        createButton.click(function() {
            handleCreate()
        })

        closeButton.click(function(){
            $("#itemInput").val("")
            $("#priceInput").val("")
            $("#categoryInput").val("")
            $("#descriptionInput").val("")
            let form = $("#form")
            form.toggle(300)
        })
    })

})
