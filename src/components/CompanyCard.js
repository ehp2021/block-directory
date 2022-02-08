import React from "react";
import './CompanyCard.css';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react';

 function CompanyCard(props) { 
    const { id,type, name, website, cmc_link, description, technology, white_paper, country} = props.company;

  return (

    <Tr>
      <Td>{name}</Td>
      <Td>{type}</Td>
      <Td>{description}</Td>
      <Td>{technology}</Td>
      <Td><a href={cmc_link}>{cmc_link === "N/A" ? "N/A" : "link"}</a></Td>
      <Td><a href={white_paper}>link</a></Td>
      <Td><a href={website}>link</a> </Td>
      <Td>{country}</Td>
    </Tr>

  )
}

export default CompanyCard;