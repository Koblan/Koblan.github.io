$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        var cook = localStorage.getItem('loftonclose');
        var now = new Date();
        if (cook == null || (now.getTime()-cook)>(24*3600)) {
            $('#comeback-modal').modal();
            var date = new Date;
            localStorage.setItem('loftonclose', date.getTime());
        }
    }
});

function sendRequest(form) {

    var params = {
        first_name: $('[name=first_name]',form).val(),
        phone: $('[name=phone]',form).val(),
        email: $('[name=email]',form).val(),
        adrequest: $('[name=ad-request]',form).val()
    }

    if(!params.adrequest) return alert('Вы не дали согласие на обработку персональных данных');
    if(!params.first_name) return alert('Введите Ваше имя');
    if(typeof params.phone != "undefined" && !params.phone) return alert('Введите Ваш телефон');
    if(typeof params.email != "undefined" && !params.email) return alert('Введите Ваш E-mail');

    if(typeof params.phone != "undefined") {
        params.form_name = 'thanks';
    }

    if(typeof params.email != "undefined") {
        params.form_name = 'comeback';
    }

    fetch('https://api.sdcdd.com/projects/5ba3dd7c0798ea15ed4f8d76/leads', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(params)
    }).then(r => r.json()).then(r => {
        if(!r.ok) {
        return alert('Что-то случилось! Попробуйте позже.');
    } else {
        window.location.href = '/thanks_1.html'
    }

}).catch( e => alert('Что-то случилось! Попробуйте позже.'));
}
