import React, { useState } from "react";
import { Button, Container, Chip, Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const BarraSearch = (props) => {
  const [filterValue, setFilterValue] = useState([]);
  const navigate = useNavigate()

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    navigate("/filtros");
    const filterArray = props.Data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div>
      <div classname="searchBox">
      <input style={{backgroundColor: '#b5bea7', border: "2px solid #2e5137", borderRadius: '50px', minWidth: '40rem', height: "2.5rem", paddingLeft: "1%", position:"absolute", zIndex:"10", top:"0.5em", left:"12em"}}
        type="text"
        placeholder={props.Placeholder}
        onChange={handleSearch}
      />

      </div>
      <div>
        {filterValue.length !== 0 &&
          filterValue.map((e) => {
            return (
              <Grid
                container
                style={{ backgroundColor: "#fbf1e3" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
        <Container
          key={e.id}
          style={{
            marginTop: "4em",
            marginBottom: "3em",
            marginLeft: "1em",
            marginRight: "1em",
            backgroundColor: "#fdf7f0",
            padding: "2em",
            borderRadius: "6px",
            minWidth: "22rem",
            maxWidth: "22rem",
            textAlign: "center",
            height: "25rem",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"
          }}
        >
          <img src={e.img} width="250px" height="150px" alt="bike"></img>
          <Box style={{ marginTop: "0.5em" }}>
            <Chip
              label={e.tag1}
              variant="outlined"
              style={{ width: "80px", height: "25px" , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
            <Chip
              label={e.tag2}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em"  , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
            <Chip
              label={e.tag3}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em"  , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
          </Box>
          <Box style={{paddingTop: "1rem"}}>
        <Typography
          variant="h6"
          color="#2e5137">
            {e.title}
          </Typography>
          <Typography
          variant="body1"
          fontWeight="200"
          color="#2e5137">
              {e.price}€/persona
            </Typography>
          <Link to={`/detalle/${e.id}`}>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginTop: "1rem",
                textTransform: "none",
                width: "8rem"
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Link>
          </Box>
                </Container>
              </Grid>
            );
          })}
      </div>
    </div>
  );
};
export default BarraSearch;
