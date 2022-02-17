import React, { useState, useEffect } from 'react';
import CompanyCard from "./CompanyCard";
import axios from 'axios';
import {
  Table,
  // Thead,
  // Tbody,
  // Tfoot,
  // Tr,
  // Th,
  // Td,
  TableCaption,
  Text,
  Center
} from '@chakra-ui/react';

function CompanyCardList (props) { 
    const [allCompanies, setAllCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    // const [coFetched, setCoFetched] = useState(false);

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
    const newArr = [...allCompanies];
    const searchWord = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    
    const resultArr = [];
    //filter companies based on search term
    for(let i=0;i<newArr.length; i++) {
        if(newArr[i].description.includes(searchWord) || newArr[i].name.includes(searchWord)) {
            resultArr.push(<CompanyCard key={newArr[i].id} company={newArr[i]} />)
        }
    }
    return resultArr;
}

  return (
    <div className="companies-container">
      <Center>
        <Text fontSize='sm'>A directory of healthcare blockchain companies, projects, and conferences. </Text>  
      </Center>
      <br></br>

      <form onSubmit={ e =>
          {
              e.preventDefault();
              filterCompanies();
          }}>
          <Center>
            <div className="search-box"> 
              <Text fontSize='sm'>Search for a company: </Text>
              <input type="text" placeholder="Search for a company..." 
                style={{color: "black"}}
                value={searchTerm}
                onChange={e => {
                    setSearchTerm(e.target.value)
                }}
              />
            </div>   
          </Center> 
          <Table>
            <TableCaption>Built by <a href="https://github.com/ehp2021/">Emily Park</a></TableCaption>
            {searchTerm ? filterCompanies(allCompanies, searchTerm) : showCo(allCompanies)}
          </Table>
      </form> 


    </div>
  )
}

export default CompanyCardList;