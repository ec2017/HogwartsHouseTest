function test_it(entry) {
if (entry.value!=null && entry.value.length!=0) {
entry.value=""+ eval(entry.value);
}
computeForm(entry.form);
}
function computeForm(form) {
var total=0



for (var count=0; count<4; count++)
{
if (form.a[count].checked){
var total=total+parseInt(form.a[count].value);
}
}

for (var count=0; count<4; count++)
{
if (form.b[count].checked){
var total=total+parseInt(form.a[count].value);
}
}
for (var count=0; count<4; count++)
{
if (form.c[count].checked){
var total=total+parseInt(form.a[count].value);
}
}
for (var count=0; count<4; count++)
{
if (form.d[count].checked){
var total=total+parseInt(form.a[count].value);
}
}
for (var count=0; count<4; count++)
{
if (form.e[count].checked){
var total=total+parseInt(form.a[count].value);
}
}


if (total<6){ window.location="Gryffindor.html" }
else if (total<11){ window.location="Hufflepuff.html" }
else if (total<15){ window.location="Ravenclaw.html" }
else if (total<21){ window.location="Slytherin.html" }
else { window.location="Slytherin.html" }
}
