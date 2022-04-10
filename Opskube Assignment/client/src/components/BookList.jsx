import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../ReduxStore/actions/BookActions";
import "./booklist.css";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function Submit(){
  alert("Thank you for shopping")
}

function BookList() {
  const totalBooks = useSelector((state) => state.totelBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = () => {
      fetch("http://localhost:5000/getBooks")
        .then((res) => {
          res.json().then((res) => {
            dispatch(setBooks(res.object));
          });
        })
        .catch((err) => console.log(err));
    };
    fetchBooks();
  }, []);

  return (
    <div className="books">
      <input
        className="search"
        defaultValue={searchTerm}
        type="text"
        placeholder="Search here"
        name="search"
        id="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="container">
        {totalBooks
          .filter((book) => book.Book_name.indexOf(searchTerm) >= 0)
          .map((book, index) => {
            return (
              <div key={index}>
                <div className="box">
                  <div>
                    <img src={book.img} />
                  </div>
                  <div className="bookname">{book.Book_name}</div>
                  <div className="authorname">{book.Author_name}</div>
                  <div className="date">{book.Release_date}</div>
                  <button className = "select"
                    onClick={() => {
                      openForm();
                    }}
                  >
                    select
                  </button>
                </div>
              </div>
            );
          })}

        <div className="form-popup" id="myForm">
          <div className="form-container">
            <div id="left">
              <img
                src="https://www.rd.com/wp-content/uploads/2020/02/50FavoriteBookQuotes-51.jpg"
                style={{ height: "100%", width: "100%", margin: "0px" }}
              />
            </div>
            <div id="right">
              <div
                id="cross"
                onClick={() => {
                  closeForm();
                }}
              >
                {" "}
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                    margin: "0px",
                    cursor: "pointer",
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAADU1NTOzs4VFRXR0dEQEBANDQ2+vr7GxsbKysrs7Oz5+flKSkry8vLa2tqenp4vLy+zs7OSkpLm5uZSUlIlJSUfHx8+Pj6srKxra2vsZw4OAAAD/UlEQVR4nO3di7aqIBAG4Ohq9+xe7/+gZ1uuo6bADBLg9H8PwGJCBkSg0QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKzXmaH0yFbnj2WeS7LXHss09Emu1zV22173Hkpc3fc3soyr5flxkuZzrK7qssfHsp85I0y75mHMl1tnurTtm8z7ratMp/RmnGdtyqj1HTfq8z9tKPMPFJ3XHfUpTDrUeZMU2aUEDddLfgycS5zoisyj/Ggtvvg/wfVNcRJ1yP69vRad5JMWxml5m4hTuaGMoNn1M3dUBulxg5Fjo0l3kM/p6YmdAvRHKBSyy9EYXKx1EdxB429rcDLV+LQWl9tFWIOGrphonINO2IsrRXipRtjkimFfUxt3bDAGDQMw0QlbDY9EGqkFtQHdbagFHf4akSfTpQqUTOqLYuWTl+OqYnUhsQQrVm0FLYNKf2QGCKxBUP3Q0IuLdnSjXay3RI2l55v9hq9WTIqKYu+3HyuAxG038SdQqQHqLbBYns7kmumFvq+OCYNE2/HgNEVdtr33w66EMlJ5k/uZx2P4cGonWYaTh0mXnys4jHRe6LqnobbJ9s1oXthYUdPEn99sZ1uJow+qKbBn9EC6yFrZVRGFlX8t01PWI/ZvPmgzgivS5U+C5S98NqhnlE5WdR97c4DVl+qhch6wDv6cED0WWU9RFYL9lhg9sKlsm4/SzSsEF9rN5Q1mYQC5CcN9/QUDatNphknQMfPA97xWoXzcyQS4Gi0Yg0aZItV7MAqrNkNWbSZTBfeoEGTRJKp+A8xsQD9h5hcgJ4zajpZtI43VzFKZRz8xJtvmiQaoL9BI6lhoslPukkwyVR8hJh0gNSPnQbkz6rR9Bw00hwmmlZ9Bo15QpNtvT6DxgBasOCebhJPMhXXEAcToGuIAwrQaY4ad+GXb8UdNKaDyKJ1zHFxCOPgJ8aXfhVhC3B/4ttQfD8Un0vFj4fi5zTi56Xi3y3Evx+Kf8cXv04jfq1N/Hqp+DVv8d8txH97Ev/9UPw3YPHf8cXvxRC/n0b8nijx+9rE700Uv79U/B5h8fu8xe/VF3/eQvyZGd65p2Y1B3HuiXd27XN+MoCza/LPH4o/Q8o6B9w9pqV9Dlj+WW7OeXx9Jkz5PD69FxrfDxhz1MA9Uf69GPLvNpF/P43PO4aoIeKeKL/k3/VFuq+NvhhI2kGV3D1RA79zj3BvIu+11T5oBL430X73JXcByZpuAt99+QP3l8q/g9bYiI6rY8a3/gibiA13Qbt+MzIMGhHugv6B+7y1d7L3Wd3UhRjr2nnp9+r/wH8jjOT/v8UowH+UZJH/o6Qg/H9mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACg6R8qNzKTFbvGxAAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>

              <form style={{ marginTop: "50px" }}>
                <input type="text" required= "True" placeholder="Name" className="FT" />
                <br />
                <br />
                <br />
                <input
                  type="number"
                  required= "True"
                  placeholder="Mobile Number"
                  className="FT"
                />
                <br />
                <br />
                <br />
                <input type="text" required= "True" placeholder="Email ID" className="FT" />
                <br />
                <br />
                <br />
                <input type="text" required= "True" placeholder="Address" className="FT" />
                <br />
                <br />
                <button classname = "order" style = {{fontSize:"20px"}}
                  onClick={() => {
                    Submit();
                  }}
                  id="exit"
                >
                  {" "}
                  Order Now{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;
