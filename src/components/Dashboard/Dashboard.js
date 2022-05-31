import React, { useEffect, useState, useRef } from "react";
import Header from "../Header/Header";
import './Dashboard.css'
import profile from '../../assets/person-fill.svg'
import pencil from '../../assets/pencil-square.svg'
import Blog from "../Blog/Blog";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const userData = {
    name: "John Doe",
    username: "johndoe",
    blogsNumber: 0,
    favouritesNumber: 2,
    blogs: [],
    favourites: []
}

// const blogData = [{
//     card: {
//         title: "Title",
//         publishedDate: "01-01-2020",
//         authorName: "John Doe",
//     }
// }]

const blogData =[]


const Dashboard = () => {
    const [profileHeight, setProfileHeight] = useState(0);

    useEffect(() => {
        const height = document.getElementById('profile-con').clientHeight;
        setProfileHeight(height);
    })

    const ref = useRef(null)
    const { height, width } = useWindowDimensions();
    // console.log("dimensions", height, width);

    // const [data, setData] = useState();
    // const [error, setError] = useState(false);
    // useEffect(() => {
    //     fetch('http://localhost:8080/blog/all')
    //         .then(async response => {
    //             console.log(response)
    //             if(response.ok){
    //                 const data = await response.json();
    //                 setData(data)
    //                 console.log(data)
    //             }


    //             // check for error response
    //             if (!response.ok) {
    //                 return Promise.reject(data);
    //             }
    //         })
    //         .catch(errorResponse => {
    //             setError(true)
    //             console.log(errorResponse)
    //         });
    // }, [])
    // console.log(document.getElementById('profile-con').clientHeight);

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="dashboard_container">
                <div className="flex-container">
                    <div className="profile-container" style={{ width: `${width / 4}px` }} ref={ref} id="profile-con">
                        <img src={profile} alt="Logo" width="50" height="50" className="profile-logo" />
                        <br />
                        <div className="profile-item-container">
                            <div className="profile-item-header">
                                <h4>Name</h4>
                            </div>
                            <div className="profile-item-body">
                                {userData.name}
                            </div>
                        </div>
                        <div className="profile-item-container">
                            <div className="profile-item-header">
                                <h4>Username</h4>
                            </div>
                            <div className="profile-item-body">
                                {userData.username}
                            </div>
                        </div>
                        <div className="profile-item-container">
                            <div className="profile-item-header">
                                <h4>Blogs</h4>
                            </div>
                            <div className="profile-item-body">
                                {userData.blogsNumber}
                            </div>
                        </div>
                        <div className="profile-item-container">
                            <div className="profile-item-header">
                                <h4>Favourites</h4>
                            </div>
                            <div className="profile-item-body">
                                {userData.favouritesNumber}
                            </div>
                        </div>
                    </div>
                    <div className="all-blogs-container" style={{ width: `${3 * (width / 4)}px`, height: profileHeight }}>
                        <div className="new-blog-container">
                            <div className="new-blog-header">
                                Something on your mind? Start writing a blog!
                            </div>
                            <div className="new-blog-body">
                                <button className="new-blog-button">
                                    Let's start
                                    <img src={pencil} alt="Profile" width="25" height="25" />
                                </button>
                            </div>
                        </div>
                        <div className="blogs-container">
                            <div className="user-blogs-container">
                                <div className="blog-container-header">
                                    <h4>My Blogs</h4>
                                </div>
                                {userData.blogsNumber === 0 ?
                                    <div className="no-blogs-container">
                                        <h4>No blogs yet!</h4>
                                    </div> :
                                    <Blog cards={userData.blogs} />
                                }
                            </div>
                            <div className="user-favourites-container">
                                <div className="blog-container-header">
                                    <h4>Favourite Blogs</h4>
                                </div>
                                {userData.blogsNumber === 0 ?
                                    <div className="no-blogs-container">
                                        <h4>No blogs yet!</h4>
                                    </div> :
                                    <Blog cards={userData.favourites} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-blogs-container">
                    <div className="blog-container-header">
                        <h4>Recent Blogs</h4>
                    </div>
                    {blogData.length === 0 ?
                        <div className="no-blogs-container">
                            <h4>No blogs yet!</h4>
                        </div> :
                        <Blog cards={blogData} />
                    }
                    {/* {error? <div className="error">An error occurred</div> :
                        <div className="blogs-list">{}</div>
                       } */}

                </div>
            </div>
        </>
    )
}

export default Dashboard;