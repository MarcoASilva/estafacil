function logar() {
    $.post(
        "/login",
        JSON.stringify({ user: 'jeanc', password: '1234' }),
        function (data) {
            console.log('page content: ' + data);
        }
        );
}