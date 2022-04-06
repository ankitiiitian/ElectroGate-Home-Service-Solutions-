import React, {useState, useEffect} from 'react'
import "./AC.css";
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Table ,Button, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import{
    MDBBtn,
    MDBBtnGroup,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink
} from "mdb-react-ui-kit";
import {  Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';





function Vacum() {

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit] = useState(4);
    const [sortFilterValue, setSortFilterValue] = useState("");
    const [operation, setOperation] = useState("");


    const sortOptions = ["name", "email", "phone", "service", "address", "pincode", "status" ];  

    useEffect(() => {

        loadUsersData(0,4,0);
    }, []);

    const loadUsersData = async ( start, end, increase, optType=null, filterOrSortValue) => {
        switch (optType) {
            case "search":
                setOperation(optType);
                setSortValue("");
                return await axios
                        .get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`)
                        .then((response) => {
                            setData(response.data);
                            setCurrentPage( currentPage + increase);
                           
                        })
                        .catch((err) => console.log(err));
            
            case "sort":
                setOperation(optType);
                setSortFilterValue(filterOrSortValue);
                return await axios
                    .get(`http://localhost:5000/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage( currentPage + increase);
                    })
                    .catch((err) => console.log(err));

            case "filter":
                setOperation(optType);
                setSortFilterValue(filterOrSortValue);
                return await axios
                    .get(`http://localhost:5000/users?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage( currentPage + increase);
                    })
                    .catch((err) => console.log(err));

            default:
                return await axios
                .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
                .then((response) => {
                    setData(response.data);
                    setCurrentPage(currentPage + increase);
                })
                .catch ((err) => console.log(err));
        }
       
    };

    console.log("data", data);

    const handleReset = () => {
        
        setOperation("");
        setValue("");
        setSortFilterValue("");
        setSortValue("");
        loadUsersData(0 , 4, 0);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        loadUsersData(0,4,0, "search");

        // return await axios
        // .get(`http://localhost:5000/users?q=${value}`)
        // .then((response) => {
        //     setData(response.data);
        //     setValue("");
        // })
        // .catch((err) => console.log(err));
    };

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);

        loadUsersData(0,4,0,"sort",value);
        // return await axios
        // .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
        // .then((response) => {
        //     setData(response.data);
        // })
        // .catch((err) => console.log(err));
    };

    const handleFilter = async (value) => {
       
        loadUsersData(0, 4, 0, "filter", value);
        // return await axios
        // .get(`http://localhost:5000/users?status=${value}`)
        // .then((response) => {
        //     setData(response.data);
        // })
        // .catch((err) => console.log(err));
    };

    const renderPagination = () => {
        if(data.length < 4  && currentPage === 0) return null;
        if(currentPage === 0) {
            return (
                <MDBPagination className='ac_container'>
                    <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        {/* <MDBBtn  style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData(4, 8, 1, operation, sortFilterValue) }>Next</MDBBtn> */}
                        <Button style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px",}} onClick={() => loadUsersData(4, 8, 1, operation, sortFilterValue)}>Next</Button>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else if( currentPage <  pageLimit-1  && data.length === pageLimit) {
            return (
            <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        {/* <MDBBtn style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage -1 )*4, (currentPage )* 4, -1, operation, sortFilterValue)}>Prev</MDBBtn> */}
                        <Button style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage -1 )*4, (currentPage )* 4, -1, operation, sortFilterValue)}>Prev</Button>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
              
                <MDBPaginationItem>
                    {/* <MDBBtn style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage + 1)*4, (currentPage + 2)*4, 1, operation, sortFilterValue)}>Next</MDBBtn> */}
                    <Button style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage + 1 )*4, (currentPage + 2 )* 4, 1, operation, sortFilterValue)}>Next</Button>
                </MDBPaginationItem>
            </MDBPagination>
            );
        }else {
            return(
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        {/* <MDBBtn style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage -1 )*4, (currentPage )* 4, -1, operation, sortFilterValue)}>Prev</MDBBtn> */}
                        <Button style={{color: "white", background: "darkblue",fontSize: "15px", padding: "7px", width: "70px"}} onClick={() => loadUsersData((currentPage -1 )*4, (currentPage )* 4, -1, operation, sortFilterValue)}>Prev</Button>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            )
        }
    };

  return (
     
    <div className='ac'>
        <img className="ac_image" src="https://c4.wallpaperflare.com/wallpaper/68/859/599/color-carpet-cleaning-vacuum-cleaner-wallpaper-preview.jpg" alt=""/>
        <form style={{
            //  margin: "auto",
            padding: "10px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
        >
            <input
            type="text"
            className="ac_form_control"
            placeholder="Search Pincode... "
            value={value}
            onChange= {(e) => setValue(e.target.value)}
            />
            
            <ButtonGroup className="me-2" aria-label="First group">
                <Button type='submit' style={{color: "white", background: "black",fontSize: "15px", margin:"5px", padding: "5px",}}>Search</Button>
                <Button  style={{color: "white", background: "blue",fontSize: "15px",margin:"5px", padding: "5px",}} color="info" onClick={() => handleReset()}>Reset</Button>
                <Button  style={{width: "60px", color: "white", background: "Red",fontSize: "15px",margin:"5px", padding: "5px", marginLeft: "10px"}} color="info" onClick={() => window.open("/order")}>Order</Button>
            </ButtonGroup>
            
           
        </form>
        <div style={{marginTop: "10px"}}>
            <h2 style={{ color:"white", textAlign: "center"}}>Service Care at your door step</h2>
            
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                    <th width="100px" scope='col'>No.</th>
                    <th width="100px" scope='col'>Name</th>
                    <th width="100px" scope='col'>Email</th>
                    <th  scope='col'>Phone</th>
                    <th  scope='col'>Service</th>
                    <th width="100px" scope='col'>Address</th>
                    <th width="100px" scope='col'>Pincode</th>
                    <th width="100px" scope='col'>Status</th>
                    </tr>
                </thead>
                {data.length === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={8} className="ac_nodata">No Data Found</td>
                        </tr>
                    </tbody>
                ) : (
                    data.map((item, index) =>(
                        <tbody key={index}>
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td width="100px">{item.name}</td>
                                <td width="100px">{item.email}</td>
                                <td >{item.phone}</td>
                                <td >{item.service}</td>
                                <td width="100px">{item.address}</td>
                                <td width="100px">{item.pincode}</td>
                                {/* <td>{item.id}</td> */}
                                <td width="100px">{item.status}</td>
                            </tr>
                        </tbody>
                    ))
                )}
                
            </Table>
           
        </div>
        <div 
            style = {{padding: "10px",
                    maxWidth: "250px",
                    alignContent: "center",
                    }}
           >
                {renderPagination()}
        </div>
        {data.length > 0 && (
            <Row>
                
                <Col size='4'>
                    <h5 style={{ color: "white"}}> Filter By Status : </h5>
                    <ButtonGroup className="me-2" aria-label="First group" style={{ marginBottom: "20px"}}>
                        <Button  style={{color: "white", background: "black",fontSize: "15px", margin:"5px", padding: "5px",}} onClick={() => handleFilter("Active")} >Active</Button>
                        <Button  style={{color: "white", background: "blue",fontSize: "15px",margin:"5px", padding: "5px",}} color="danger" onClick={() => handleFilter("Inactive")}>Inactive</Button>
                    </ButtonGroup>
                
                </Col>

            </Row>
        )}
        
    </div>
    
  )
}

export default Vacum
