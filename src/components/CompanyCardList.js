import React, { useState, useEffect } from 'react';
import CompanyCard from "./CompanyCard";
import './CompanyCardList.css';
import axios from 'axios';
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

function CompanyCardList (props) { 
    const [allCompanies, setAllCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [coFetched, setCoFetched] = useState(false);

  // fetch api w/ useEffect
  useEffect(() => {
      async function getCompanies() {
        const results = await axios('https://hc-block-api.herokuapp.com/');
        // console.log(typeof(results.data), "line 15")
        setAllCompanies(results.data)
      }
      getCompanies()
  },[])

  // show all companies
  function showCo(arr) {
    return arr.map(company => {
      return (
        <CompanyCard key={company.name} company={company}/>
      )
    })
  }

  function filterCompanies() {
    // console.log(typeof(allCompanies));
    const newArr = [...allCompanies.data];
    const searchWord = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    
    const resultArr = [];
    //filter companies based on search term
    for(let i=0;i<newArr.length; i++) {
        if(newArr[i].name.includes(searchWord)) {
            resultArr.push(<CompanyCard key={newArr[i].id} company={newArr[i]} />)
        }
    }
    return resultArr;
}

  return (
    <div classname="companies-container">
      <div>A directory of healthcare blockchain companies, projects, and conferences.</div>
      <Table variant='simple' size='sm' colorScheme="linkedin">
      <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type of Company</Th>
            <Th>Description</Th>
            <Th>Technology</Th>
            <Th>Coinmarketcap link (if relevant)</Th>
            <Th>White Paper</Th>
            <Th>Website</Th>
            <Th>Country</Th>
          </Tr>
        </Thead>
          <Tbody>
            {showCo(allCompanies)}
          </Tbody>
      </Table>
    </div>
  )
}

export default CompanyCardList;