/*
    
    main.js
    Proje icin yazilmis javascriptler bulunur.
    
*/

$(document).ready(function() {
    $('#login-toggle').on('click', function() {
        if ($('.login-input-pw').attr('psswd-shown') == 'false') {
            $('.login-input-pw').removeAttr('type');
            $('.login-input-pw').attr('type', 'text');
            $('.login-input-pw').removeAttr('psswd-shown');
            $('.login-input-pw').attr('psswd-shown', 'true');
            $(this).html('GİZLE');
        } else {
            $('.login-input-pw').removeAttr('type');
            $('.login-input-pw').attr('type', 'password');
            $('.login-input-pw').removeAttr('psswd-shown');
            $('.login-input-pw').attr('psswd-shown', 'false');
            $(this).html('GÖSTER');
        }
    });
    $('#signup-toggle').on('click', function() {
        if ($('.signup-input-pw').attr('psswd-shown') == 'false') {
            $('.signup-input-pw').removeAttr('type');
            $('.signup-input-pw').attr('type', 'text');
            $('.signup-input-pw').removeAttr('psswd-shown');
            $('.signup-input-pw').attr('psswd-shown', 'true');
            $(this).html('GİZLE');
        } else {
            $('.signup-input-pw').removeAttr('type');
            $('.signup-input-pw').attr('type', 'password');
            $('.signup-input-pw').removeAttr('psswd-shown');
            $('.signup-input-pw').attr('psswd-shown', 'false');
            $(this).html('GÖSTER');
        }
    });
});