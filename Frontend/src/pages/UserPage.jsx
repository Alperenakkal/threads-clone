import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'


const UserPage = () => {
    return (
        <div>
            <UserHeader/>
            <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about "/>
            <UserPost likes={123} replies={481} postImg="/post2.png" postTitle="Nice toturiol "/>
            <UserPost likes={81} replies={2} postImg="/post3.png" postTitle="Elon guys "/>
            <UserPost likes={1} replies={1}  postTitle="Thrads ilk paylaşımım "/>
            

            
           
        </div>
    )
}

export default UserPage