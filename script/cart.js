// export var usritems=[],j=0;
var table=document.getElementById("tableBody");
var totalprice=document.getElementById("totalprice");
var coupon=document.getElementById("formGroupExampleInput");
var Applycoupon=document.getElementById("Applycoupon");
var discount,disvalue=0,total=0;
console.log(items)
// console.log(items[0].email===localStorage.getItem("useremail"))
// ---------handling  multiy user tasks
// for(let i=0;i<items.length;i++)
// {
//  if(items[i].email===localStorage.getItem("useremail"))
//  { 
//    usritems[j]=items[i]
// //    console.log(i)
// //    console.log(j)
// //    console.log(items[i])
//    j++;
//  }
// }
// console.log(usritems)
// items=usritems

for(i=0;i<items.length;i++)
{
var selected_product=`
<tr class="table-group-divider align-middle" data-id="${products[[items[i].pid]-1].product_id}">
<th class="remove"scope="row"><i class="bi bi-x-circle-fill fs-5 text-danger"></i></th>
<td><img class="w-75" src="${products[[items[i].pid]-1].product_img}" alt=""></td>
<td style="display:none"><input type="hidden" value="${products[[items[i].pid]-1].product_id}"/></td>
<td >${products[[items[i].pid]-1].product_name}</td>
<td >${products[[items[i].pid]-1].price} <sub>EGP</sub></td>
<td style="padding-left:3vw"><input type="text" value="${items[i].count}"name="" id=""></td>
<td>${products[[items[i].pid]-1].price *  items[i].count} <sub>EGP</sub></td>
<td style="padding-left:3.2vw">${items[i].size}</td>
</tr>
`
total+=products[[items[i].pid]-1].price *  items[i].count
table.insertAdjacentHTML("afterbegin", selected_product);
}
totalprice.innerHTML=`${total}`
Applycoupon.onclick = function () {
    if(coupon.value!=="")
    {
        discount=coupon.value;
       
        switch (discount)
        {
            case "dejavo20":
                disvalue=0.2
                break;
                case "sale40":
                    disvalue=0.4
                    break;
                case "deja60":
                    disvalue=0.6
                    break;
                default:
                    disvalue=0    
                        
                    }
                }
                totalprice.innerHTML=`${total-(total*disvalue)} EGP`;
            }
            localStorage.setItem("total", total);
 // Click On Task Element
table.addEventListener("click", (e) => {
    // Delete Button
     
if (e.target.parentElement.classList.contains("remove")) {
      // Remove Element From Page
      // console.log(e.target.parentElement.parentElement)
      e.target.parentElement.parentElement.remove();
      // Remove Task From Local Storage
      // console.log(e.target.parentElement.parentElement.getAttribute("data-id"))
      deleteTaskWith(e.target.parentElement.parentElement.getAttribute("data-id"));
    }
});
function deleteTaskWith(taskId) {

    items = items.filter((item) => item.pid != taskId);
    addDataToLocalStorageFrom(items);
  }
  
