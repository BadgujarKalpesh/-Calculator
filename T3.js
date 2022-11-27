function valueBtn(T1){
    form.screen.value+=T1.value;
}
function Clear(){
    form.screen.value=null;
}
function equals(){
    form.screen.value=eval(form.screen.value);
}