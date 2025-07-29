import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyMagicLink() {
    const navigate = useNavigate();
    const [ loading, setLoading] = useState(true)

  useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token')
        const apiUrl = import.meta.env.VITE_API_URL;

        if(!token) {
            alert('Token no encontrado')
            setLoading(false)
            return;
        }
        
        fetch(`${apiUrl}/api/user/auth/${token}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
        })
        
        .then(res => {
            if (!res.ok) {

    return res.text().then(text => {
      throw new Error(`Error ${res.status}: ${text}`);
    });
  }
  return res.json(); 
})
    
            
        .then(data => {
            if(data.token) {
                localStorage.setItem('authToken', data.token);
                navigate('/home')
            } else {
                alert('Error' + (data?.message || 'No se pudo verificar el token'));
            }
        }) 
        .catch (error => { console.error(error);
            alert('Error al verificar el token')
        
    })
    .finally(() => setLoading(false))
}, [navigate]);

    return (
        <div className="spinner"></div>
    )
}
export default VerifyMagicLink;