import usersAPI from "./config.js"

export default function handleEdit(id){

    let dataFetch = {}
    let dataEdit = {}
    let usersIdAPI = usersAPI + id

    // agrega titulo correspondiente
    $("#title").html("Edit")

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
            type: 'PUT',
            url: usersIdAPI,
            contentType: 'application/json',
            data: JSON.stringify(dataEdit)
        })
        .done(function(){
            alert('Update Success')
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

    // hago el fetch a la API para pedir datos actualizados
    $.get(usersIdAPI, function(data, status){
        dataFetch = data
        inputItem.val(data.item)
        inputPrice.val(data.price)
        inputCategory.val(data.category)
        inputDescription.val(data.description)
        inputImage.val(data.image)
    })

    // agrego onChanges a cada input y controlo sus valores para habilitar el button
    inputItem.on("change", ()=>{

            if(inputItem.val()!== dataFetch.item) {
                dataEdit.item = inputItem.val()
            }else{
                delete dataEdit.item
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

        inputPrice.on("change", ()=>{

            if(inputPrice.val()!== dataFetch.price) {
                dataEdit.price = inputPrice.val()
            }else{
                delete dataEdit.price
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

        inputCategory.on("change", ()=>{

            if(inputCategory.val()!== dataFetch.category) {
                dataEdit.category = inputCategory.val()
            }else{
                delete dataEdit.category
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

        inputDescription.on("change", ()=>{

            if(inputDescription.val()!== dataFetch.description) {
                dataEdit.description = inputDescription.val()
            }else{
                delete dataEdit.description
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

        inputImage.on("change", ()=>{

            if(inputImage.val()!== dataFetch.image) {
                dataEdit.image = inputImage.val()
            }else{
                delete dataEdit.image
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

}
