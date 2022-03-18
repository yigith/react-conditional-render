import React from 'react';

function Listele(props) {
    if (!props.ogeler || props.ogeler.length == 0)
        return (
            <p>Gösterilecek bir öğe bulunamadı.</p>
        );
    
    return (
        <ul>
            {props.ogeler.map((x,i) => <li key={i}>{x}</li>)}
        </ul>
    );
}

export default Listele;