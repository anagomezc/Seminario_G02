import React, { useEffect, useState } from 'react';

const Dropdown = () => {
    const [colegios, setColegios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        
          try {
            let response = await fetch(`https://teach-track-backend.onrender.com/colegios`);
            let data = await response.json();
           
            setColegios(data);
           
          } catch (error) {
            console.error('Error en la solicitud:', error);
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
    }, []);

    const [selectedCollege, setSelectedCollege] = useState(1);
    console.log(colegios)
    const handleChange = (event) => {
        const selectedOption = colegios.find(college => college.id === parseInt(event.target.value));
        setSelectedCollege(selectedOption);
        console.log("Seleccionado: ",selectedOption.id)
    };

 return (
    <div>
         {colegios && (
            <select className="dropdown" value={selectedCollege.id} onChange={handleChange}>
                {colegios.map(colegio => (
                <option key={colegio.id} value={colegio.id}>
                    {colegio.nombre}
                </option>
                ))}
            </select>
           /*  <p>College selected: {selectedCollege.name}</p> */
         )}
    </div>
 );
};

export default Dropdown