var login = prompt('Enter ur name', '');
if (login == 'admin'){
    var possword = prompt('Enter ur password');
    if (possword == 'passw0rd'){
        alert('Welcome home');
    }else if(possword == null){
        alert('Cancel');
    }else {
        alert('Wrong password');
    }
}else if (login == null){
    alert('Cancel');
}else{
    alert('Access denied');
}
