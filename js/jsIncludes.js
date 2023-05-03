//AGREGANDO EL HEADER AL INDEX
fetch('../includes/header.html')
    .then(response => response.text())
    .then(data => {
        //Se agrega los datos dentro de la captura de un Id
        document.getElementById('headerS1').innerHTML = data;
    });


//AGREGANDO LA SECTION 1
fetch('../includes/section01.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section01').innerHTML = data;
         
    });
    //AGREGANDO LA SECTION 2
fetch('../includes/section02.html')
.then(response => response.text())
.then(data => {
    
    document.getElementById('Section02').innerHTML = data;
     
});
//AGREGANDO LA SECTION 3
fetch('../includes/section03.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section03').innerHTML = data;
         
    });
//AGREGANDO LA SECTION 4
fetch('../includes/section04.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section04').innerHTML = data;
         
    });
//AGREGANDO LA SECTION 6
fetch('../includes/section06.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section06').innerHTML = data;
         
    });
    //AGREGANDO LA SECTION 7
fetch('../includes/section07.html')
.then(response => response.text())
.then(data => {
    
    document.getElementById('Section07').innerHTML = data;
     
});
//AGREGANDO LA SECTION 8
fetch('../includes/section08.html')
.then(response => response.text())
.then(data => {
    
    document.getElementById('Section08').innerHTML = data;
     
});
//AGREGANDO LA SECTION 9
fetch('../includes/section09.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section09').innerHTML = data;
         
    });
    //AGREGANDO LA SECTION 10
fetch('../includes/section10.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section10').innerHTML = data;
         
    });

