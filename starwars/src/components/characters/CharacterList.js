import React, { useState, useEffect } from "react";
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [characters2, setCharacters2] = useState([]);
    const [characters3, setCharacters3] = useState([]);
    const [characters4, setCharacters4] = useState([]);
    const [characters5, setCharacters5] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response);
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
        axios
            .get("https://swapi.co/api/people?page=2")
            .then(response => {
                console.log(response);
                setCharacters2(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
        axios
            .get("https://swapi.co/api/people?page=3")
            .then(response => {
                console.log(response);
                setCharacters3(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
        axios
            .get("https://swapi.co/api/people?page=4")
            .then(response => {
                console.log(response);
                setCharacters4(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
        axios
            .get("https://swapi.co/api/people?page=4")
            .then(response => {
                console.log(response);
                setCharacters4(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
        axios
            .get("https://swapi.co/api/people?page=5")
            .then(response => {
                console.log(response);
                setCharacters5(response.data.results);
            })
            .catch(error => {
                console.log("No data returned!", error);
            });
    }, []);

    return (
        <Container className="card-container">
            <Row className="character-list">          
                {
                    page === 1 ?
                    characters.map((item, index) => {
                        return (
                            <CharacterCard
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            birthYear={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            eyeColor={item.eye_color}
                            />
                        )
                    })
                    : page === 2 ?
                    characters2.map((item, index) => {
                        return (
                            <CharacterCard
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            birthYear={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            eyeColor={item.eye_color}
                            />
                        )
                    })
                    : page === 3 ?
                    characters3.map((item, index) => {
                        return (
                            <CharacterCard
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            birthYear={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            eyeColor={item.eye_color}
                            />
                        )
                    })
                    : page === 4 ?
                    characters4.map((item, index) => {
                        return (
                            <CharacterCard
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            birthYear={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            eyeColor={item.eye_color}
                            />
                        )
                    })
                    : page === 5 ?
                    characters5.map((item, index) => {
                        return (
                            <CharacterCard
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            birthYear={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            eyeColor={item.eye_color}
                            />
                        )
                    })
                    : null
                }
            </Row>

            <Row className="pagination">
                 <Col>
                    <Pagination aria-label="Page navigation" className="full-width">
                        <PaginationItem>
                            <PaginationLink first className="inactive" onClick={() => {setPage(1)}} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous className="inactive" onClick={() => {page > 1 ? setPage(page - 1) : setPage(5)}} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={page === 1 ? "active" : "inactive"} onClick={() => {setPage(1)}}>
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={page === 2 ? "active" : "inactive"} onClick={() => {setPage(2)}}>
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={page === 3 ? "active" : "inactive"} onClick={() => {setPage(3)}}>
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={page === 4 ? "active" : "inactive"} onClick={() => {setPage(4)}}>
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={page === 5 ? "active" : "inactive"} onClick={() => {setPage(5)}}>
                            5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next className="inactive" onClick={() => {page < 5 ? setPage(page + 1) : setPage(1)}} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last className="inactive" onClick={() => {setPage(5)}} />
                        </PaginationItem>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default CharacterList;