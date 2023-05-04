import usersAPI from "./config.js"

export default function handleCreate () {

    $("#itemInput").val("")
    $("#adressInput").val("")
    $("#categoryInput").val("")
    $("#descriptionInput").val("")
    $("#imageInput").val("")

    let dataFetch = {}

    // agrega titulo correspondiente
    $("#title").html("Create")

    document.getElementById("form").style.opacity = "1";
    document.getElementById("form").style.visibility = "visible";

    $("#form").show();
    $("#modal-overlay").show();

    // deshabilito button submit
    let submitForm = $("#submitForm")
    submitForm[0].disabled = true

    submitForm.on("click", function(event){

        event.preventDefault()

        $.ajax({
            type: 'POST',
            url: usersAPI,
            contentType: 'application/json',
            data: JSON.stringify(dataFetch)
        })
        .done(function(){
            alert('Create Success')
            location.reload()
        })
        .fail(function(error){
            console.log('Respuesta del sevidor:', error)
        })
    })

    // selecciono todos los inputs
    let inputItem = $("#itemInput")
    let inputPrice = $("#priceInput")
    let inputCategory = $("#categoryInput")
    let inputDescription = $("#descriptionInput")
    let inputImage = $("#imageInput")

    inputItem.on("change", function(){
        if(inputItem.val()===""){
            delete dataFetch.item
        } else {
            dataFetch.item = inputItem.val()
        }

        Object.entries(dataFetch).length !== 5
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputPrice.on("change", function(){
        if(inputPrice.val()===""){
            delete dataFetch.price
        } else {
            dataFetch.price = inputPrice.val()
        }

        Object.entries(dataFetch).length !== 5
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputCategory.on("change", function(){
        if(inputCategory.val()===""){
            delete dataFetch.category
        } else {
            dataFetch.category = inputCategory.val()
        }

        Object.entries(dataFetch).length !== 5
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputDescription.on("change", function(){
        if(inputDescription.val()===""){
            delete dataFetch.description
        } else {
            dataFetch.description = inputDescription.val()
        }

        Object.entries(dataFetch).length !== 5
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputImage.on("change", function(){
        if(inputImage.val()===""){
            delete dataFetch.image
        } else {
            dataFetch.image = inputImage.val()
        }

        Object.entries(dataFetch).length !== 5
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })
}
