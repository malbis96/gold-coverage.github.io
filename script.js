// Function to translate the page content to Spanish
function translatePage() {
    document.body.innerHTML = document.body.innerHTML.replace(/Health Insurance/g, "Seguro de Salud");
    document.body.innerHTML = document.body.innerHTML.replace(/Accident Insurance/g, "Seguro de Accidentes");
    document.body.innerHTML = document.body.innerHTML.replace(/Life Insurance/g, "Seguro de Vida");
    document.body.innerHTML = document.body.innerHTML.replace(/Hospital Indemnity Insurance/g, "Seguro de Indemnización Hospitalaria");
    document.body.innerHTML = document.body.innerHTML.replace(/Contact Us/g, "Contáctenos");
    document.body.innerHTML = document.body.innerHTML.replace(/Phone/g, "Teléfono");
    document.body.innerHTML = document.body.innerHTML.replace(/Email/g, "Correo Electrónico");
    document.body.innerHTML = document.body.innerHTML.replace(/Don't wait for the unexpected!/g, "¡No espere lo inesperado!");
    document.body.innerHTML = document.body.innerHTML.replace(/Your Trusted Partner in Health, Accident, Life, and Hospital Indemnity Insurance/g, "Su Socio Confiable en Seguro de Salud, Accidentes, Vida e Indemnización Hospitalaria");
}
