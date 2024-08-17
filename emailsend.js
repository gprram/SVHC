document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault();

    var templateParams = {
      name: document.getElementById("name").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      p_school_name: document.getElementById("p-school-name").value,
      p_school_sub: document.getElementById("p-school-sub").value,
      exp: document.getElementById("exp").value,
      exp_my: document.getElementById("exp-my").value,
      phone1: document.getElementById("phone1").value,
      phone2: document.getElementById("phone2").value,
      email: document.getElementById("email").value,
      p_address: document.getElementById("p-address").value,
      c_address: document.getElementById("c-address").value,
      declaration: document.getElementById("declaration").checked,
    }
    const serviceId="service_m3qpujr";
const templateId="template_k8msvyn";
emailjs.send(serviceId,templateId,templateParams)
.then(function(response) {
    document.getElementById("name1").value=''
    document.getElementById("dob").value=''
    document.getElementById("gender").value=''
    document.getElementById("p-school-name").value=''
    document.getElementById("p-school-sub").value=''
    document.getElementById("exp").value=''
    document.getElementById("exp-my").value=''
    document.getElementById("phone1").value=''
    document.getElementById("phone2").value=''
    document.getElementById("email").value=''
    document.getElementById("p-address").value=''
    document.getElementById("c-address").value=''
    document.getElementById("declaration").checked=false
    console.log(response)
    alert("your message sent successfully")

})
.catch(err => console.log(err));
})



