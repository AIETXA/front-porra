import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VerifyMagicLink() {
    const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token')

if(!token) {
    alert('Token no encontrado')
    return;
}

fetch(`http://localhost:3000/api/user/auth/${token}`)
.then(res => res.json())
.then(data => {
    if(data.token) {
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard')
    } else {
        alert('Error' + data.message);
    }
}) .catch (error => { console.error(error);
    alert('Error al verificar el token')

});
}, [navigate]);

return <p>Verificando enlace ...</p>
}

export default VerifyMagicLink;