import React from "react";
import './CompanyCard.css';
import {
    Tr,
    Td,
    Button
  } from '@chakra-ui/react';

 function CompanyCard(props) { 
    const { type, name, website, cmc_link, description, technology, white_paper, country} = props.company;

  return (

    <Tr>
      <Td>{name}</Td>
      <Td>{type}</Td>
      <Td>{description}</Td>
      <Td>{technology === "N/A" ? "N/A" : <a href={technology}><Button size='xs'>github</Button></a>}</Td>
      <Td>{cmc_link === "N/A" ? "N/A" : <a href={cmc_link}><Button size='xs'>coinmarketcap</Button></a>}</Td>
      <Td>{white_paper === "N/A" ? "N/A" :<a href={white_paper}><Button size='xs' >white paper</Button></a>}</Td>
      <Td>{website === "N/A" ? "N/A" : <a href={website}><Button size='xs' >website</Button></a>} </Td>
      <Td>{country}</Td>
    </Tr>

  )
}

export default CompanyCard;