import React, { useState } from "react";


const Edit = () => {

    const [input, setInput] = useState({

        name: "",
        number: "",
        email: "",
        description: ""

    })

    const setData = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)

        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })

    }

    return (
        <div>
            <div className="form-container mt-4">


                <form>
                    <div class="row">
                        <div class="col-12 col-lg-12 col-xl-12 ">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Profilegggg</label>
                                <input class="form-control" type="file" name="profile" id="formFile" style={{ borderRadius: "2rem ", width: "30%" }} />
                            </div>

                        </div>
                        <div class="col-12 col-lg-6 col-xl-6 ">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control" onChange={setData} name="name" value={input.name} id="exampleInputEmail1" />

                            </div>

                        </div>
                        <div class="col-12 col-lg-6 col-xl-6 ">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone number</label>
                                <input type="text" class="form-control" onChange={setData} name="number" value={input.number} id="exampleInputEmail1" />
                            </div>

                        </div>
                        <div class="col-12 col-lg-6 col-xl-6 ">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" onChange={setData} name="email" value={input.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                        </div>
                        <div class="col-12 col-lg-6 col-xl-6 ">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Description</label>
                                <textarea type="text" class="form-control" name="description" onChange={setData} value={input.description} id="exampleInputEmail1" cols="25" rows="3" ></textarea>

                            </div>

                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Edit