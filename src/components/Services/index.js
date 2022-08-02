import React from 'react';
import Icon1 from '../images/svg-1.svg';
import Icon2 from '../images/svg-2.svg';
import Icon3 from '../images/svg-3.svg';
import { 
  ServicesContainer, 
  ServicesH1, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServicesH2, 
  ServicesP 
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce Gastos</ServicesH2>
          <ServicesP>Te ayudamos a reducir tus comisiones y a incrementar tus beneficios</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Oficina Virtual</ServicesH2>
          <ServicesP>Puedes acceder a la plataforma online de donde quieras</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Beneficios Premium</ServicesH2>
          <ServicesP>Desbloquea la tarjeta de membresia especial y obten un 5% de devolución</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services