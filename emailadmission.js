document.getElementById('form3').addEventListener('submit',(e)=>{
    e.preventDefault();
    var templateParams={
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        pschool: document.getElementById('p-school').value,
        pschoolperc: document.getElementById('p-school-perc').value,
        fathername: document.getElementById('father-name').value,
        ph1: document.getElementById('ph1').value,
        ph2: document.getElementById('ph2').value,
        email: document.getElementById('email').value,
        paddress: document.getElementById('p-address').value,
        caddress: document.getElementById('c-address').value,
        class1: document.getElementById('class').value,
    };
    emailjs.send('service_m3qpujr','template_5pyd1tb',templateParams)
    .then((response)=>{
        console.log('SUCCESS!', response.status, response.text);
        alert("CONGRATULATIONS ! WE WILL CONTACT YOU SOON")
    })
    .catch((err)=>{
        console.log('Error sending email:',err)
        alert("SORRY FOR INCONVINIENCE")
    })
})