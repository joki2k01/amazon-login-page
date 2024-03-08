document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    console.log(`Name: ${name}`);
    console.log(`Mobile: ${mobile}`);
    console.log(`Password: ${password}`);
});