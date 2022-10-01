// CONECTANDO A API
const fetchmonster = async () => {
    APIResponse = await fetch(`https://mhw-db.com/monsters`);
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }}
// FUNCAO DE ADICIONAR A UMA LISTA, PRECISA CONTER O ELEMENTO 'li'
function addition(term,lista){
  if (!menulist.includes(term)) {
    menulist.push(term)
    const cell = document.createElement('li');
    newText = document.createTextNode(term);
    cell.appendChild(newText);
    cell.className = 'teste'
    const box = document.getElementById(lista);
    box.appendChild(cell);
  }}
// COLOCANDO OS DADOS NAS LISTAS CRIADAS
const menulist = []
const rendermonster = async () => { 
  const data = await fetchmonster();
  if (data) {
    for(let i = 0; i < 60; i++){
    const id = data[i].id;
    const name = data[i].name;
    addition(name,'boxing3')
    const locations = data[i].locations[0].name;
    addition(locations,'boxing1')
    const weaknesses_old = data[i].weaknesses[0].element;
    const weaknesses = weaknesses_old.charAt(0).toUpperCase() + weaknesses_old.slice(1);
    addition(weaknesses,'boxing2')
        let row = tbody.insertRow(-1);
        let cell = row.insertCell(0);
        newText = document.createTextNode(weaknesses);
        cell.appendChild(newText);
          cell = row.insertCell(0);
          newText = document.createTextNode(locations);
          cell.appendChild(newText);
            cell = row.insertCell(0);
            let a = document.createElement('a'); 
            let conect = document.createTextNode(name);
            a.appendChild(conect); 
            a.title = 'Link'; 
            a.href = 'https://monsterhunterworld.wiki.fextralife.com/'+ name;
            cell.appendChild(a);
              cell = row.insertCell(0);
              newText = document.createTextNode(id);
              cell.appendChild(newText);
   }}}
// // RODANDO A FUNCTION
rendermonster()

// const menulist = []
// const rendermonster = async () => { 
//   const data = await fetchmonster();
//   loadTable(data)
// }

// window.onload = async () => {
//   const data = await fetchmonster();
//   let array = ['pore'];
//   // for(let i = 0; i < 60; i++) {
    
//   //   const name = data[i].name;
//   //   array.push(name);
//   // }
//   console.log(array);


//   loadTable(data);
// }

// function loadTable(data){
//   let dataHTML = '';
//   const tablebody = document.getElementById('tbody');
//   for(let i = 0; i < 60; i++) {
//     // const name = data[i].name;
//     // console.log(id);
//     // dataHTML += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].locations[0].name}</td><td>${data[i].weaknesses[0].element}</td></tr>`;
//     dataHTML += `<tr><td>roger</td><td>tre</td><td>roger</td><td>name</td></tr>`;
//   }
//   console.log(dataHTML)
//   tablebody.innerHTML = dataHTML;
// }



// rendermonster()

// FUNCAO PARA FAZER APARECER OU SUMIR UM ELEMENTO
function opacidade(box) {
  const boxy = document.getElementById(box)
  if ( boxy.style.cssText == 'opacity: 1; z-index: 1;'){
    boxy.style.cssText = 'opacity: 0; z-index: 0;'
  } else {
    boxy.style.cssText = 'opacity: 1; z-index: 1;'
  }}
// ALTERACAO DO CABECALHO
const button1 = document.getElementById('loc');
button1.addEventListener("click", function(){opacidade('box')});
const button2 = document.getElementById('weak');
button2.addEventListener("click", function(){opacidade('box2')});
const button3 = document.getElementById('mons');
button3.addEventListener("click", function(){opacidade('box3')});

// const filtrando = document.getElementsByClassName('types');

// filtrando.addEventListener("click", myFilter);

// function myFilter() {
//   let filter = 'Ancient Forest';
//   let table = document.getElementById('mytable');
//   let tr = table.getElementsByTagName("tr");
//   console.log(tr.length)
//   for (i = 0; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName("td")[2];
//     if (td) {
//       let txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }}}}

// myFilter();
