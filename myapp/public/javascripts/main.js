window.onload = function(){
    let submit = document.querySelector('.submit');
    submit.addEventListener('click', function(){
        let user = document.querySelector('.user').value;
        let pwd = document.querySelector('.pwd').value;
        let data = {
            user: user,
            pwd: pwd
        }
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/db/search', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.addEventListener('load', function(){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                let req = xhr.response;
                if(req.code !== 200){
                    alert(req.msg);
                }
                else{
                    alert('bingo!');
                }
            }
        });
        try{
            xhr.send(JSON.stringify(data));
        }catch(e) {
            console.log(e);
        }
    });
};