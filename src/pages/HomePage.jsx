import { Controls } from "../components/Controls";
import { List } from "../components/UI/List";
import { Card } from "../components/Card";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/UI/Container";
import Pagination from "../components/UI/Pagination";

export const HomePage = ({ setCountries, countries }) => {
  const [filtredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();
  const [countriesPerPage] = useState(12);
  const[currentPage, setCurrentPage]=useState(1)
  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
    setCurrentPage(1);
  };

  const lastCountryIndex = currentPage*countriesPerPage;
  const firstCountryIndex = lastCountryIndex-countriesPerPage;
  const currentCountry = filtredCountries.slice(firstCountryIndex, lastCountryIndex)
  const paginate = pageNumber=>(setCurrentPage(pageNumber))

  useEffect(() => {
    if (!countries.length)
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => setCountries(data));
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
    <Container>
      <Controls onSearch={handleSearch} />
      <List>
        {currentCountry.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population,
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        totalCountries = {filtredCountries.length}
      />
      </Container>
    </>
  );
};
