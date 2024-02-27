var pets = []

function Pet(name, age, breed, service, phone){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.service = service;
    this.phone = phone;
}

function isValid(pet){
    let validation=true;

    if (pet.name==""){
        notifications("alert-error", "La edad debe ser un número mayor que 0.");
        validation = false;
    }

    if (pet.age <= 0 || isNaN(pet.age)){
        notifications("alert-error", "La edad debe ser un número mayor que 0.");
        validation = false;
    }

    if (pet.breed == "") {
        alert("La raza no puede estar vacía.");
        validation = false;
    }

    if (pet.service == "") {
        alert("El servicio no puede estar vacío.");
        validation = false;
    }

    if (pet.phone == "" || !(/^\d+$/.test(pet.phone))) {
        alert("El teléfono no puede estar vacío y debe contener solo números.");
        validation = false;
    }

    
    return validation 
}

function register(){
    var inputName=$("#txtName").val();
    var inputAge=$("#txtAge").val();
    var inputBreed=$("#txtBreed").val();
    var inputService=$("#selType").val();
    var inputPhone=$("#txtPhone").val();

    let newPet = new Pet(inputName, inputAge, inputBreed, inputService, inputPhone);
    if(isValid(newPet)){
        pets.push(newPet);
        displayPet(newPet);
        notifications("alert-success, Successful registration");
    }else{
        notifications("alert-error, Add all the required fields");
    }
}

function displayPet(pet){
    let table = $("#petTable");
    let petHTML= `
    <tr><td>${pet.name}</td><td>${pet.age}</td><td>${pet.breed}</td><td>${pet.service}</td><td>${pet.phone}</td></tr>
    `;
    table.append(petHTML)
}

function notifications(type,msg){
    let div = $("#notifications");
    div.removeClass("hide");
    div.slideDown("slow")
    div.addClass(type);
    div.text(msg);
    div.slideUp(3000);
}

function displayArray(){

}


function init(){
    $("#btnRegister").click(register);
}

window.onload = init;

//arreglo de errores que agrupe todos los errores y los muestre en una sola notificacion