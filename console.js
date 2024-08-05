let total=0
function add(){
    let cost= document.getElementById('cost').value
    let name=document.getElementById('name').value
    let category= document.getElementById('category').value
    let date=document.getElementById('date').value
    let tot=document.getElementById('Total')
    if(cost.trim()!="" && name.trim()!="" && date.trim()!=""){
    console.log(name.value + cost.value)
    let ans=document.getElementById('expenseTableBody')
    let rows=document.createElement('tr')
    let tabcost=document.createElement('td')
    tabcost.innerHTML=cost
    total=Number(total)+Number(cost)
    let tabexpen=document.createElement('td')
    tabexpen.innerHTML=name
    let tabcatg=document.createElement('td')
    tabcatg.innerHTML=category
    let tabdd=document.createElement('td')
    tabdd.innerHTML=date
    let del=document.createElement('button')
    let edit=document.createElement('button')
    edit.innerHTML="Edit"
    del.innerHTML="Delete"
    let buttd=document.createElement('td')
    rows.appendChild(tabexpen)
    rows.appendChild(tabcost)
    rows.appendChild(tabcatg)
    rows.appendChild(tabdd)
    buttd.appendChild(edit)
    buttd.appendChild(del)
    rows.appendChild(buttd)
     ans.appendChild(rows)
    tot.innerHTML="Total :"+total
     document.getElementById('name').value=""
     document.getElementById('cost').value=""
     document.getElementById('date').value=""
     del.onclick=function(){
        ans.removeChild(rows)
     }
     edit.onclick = function() {
        document.getElementById('name').value = tabexpen.innerHTML;
        document.getElementById('cost').value = tabcost.innerHTML;
        document.getElementById('category').value = tabcatg.innerHTML;
        document.getElementById('date').value = tabdd.innerHTML;
        document.getElementById('ad').innerHTML = 'Update';
        
        document.getElementById('ad').onclick = function() {
            total=Number(total)-Number(tabcost.innerHTML)
            tabcost.innerHTML = document.getElementById('cost').value;
            tabexpen.innerHTML = document.getElementById('name').value;
            tabcatg.innerHTML = document.getElementById('category').value;
            tabdd.innerHTML = document.getElementById('date').value;
            document.getElementById('ad').innerHTML = 'Add';
            document.getElementById('name').value = "";
            document.getElementById('cost').value = "";
            document.getElementById('date').value = "";
            total=Number(total)+Number(tabcost.innerHTML)
            tot.innerHTML="Total :"+total
            document.getElementById('ad').onclick = add;
            filter()
        }
    }
}
    else{
        alert("Enter all details")
    }
}
function filter() {
    let filterValue = document.getElementById('categoryselect').value;
    let rows = document.querySelectorAll('#expenseTableBody tr');
    let ntotal=0
    rows.forEach(row => {
        let categoryCell = row.cells[2];
        let costcell=row.cells[1]
        if (categoryCell) {
           
            if (filterValue === "" || categoryCell.innerHTML === filterValue || filterValue=="All") {
                row.style.display = "";
                if(categoryCell.innerHTML === filterValue)
                ntotal+=Number(costcell.innerHTML)
                document.getElementById('Total').innerHTML="Total :"+ntotal
            } 
            else if(categoryCell!==filterValue){
                document.getElementById('Total').innerHTML="Total : 00"
                row.style.display = "none";
            }
            else {
                row.style.display = "none";
            }
        }
    });
}
