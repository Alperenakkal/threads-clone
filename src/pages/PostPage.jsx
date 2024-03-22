import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comment from '../components/Comment'

const PostPage = () => {
  const [liked,setLiked] =useState(false)
  return (
    <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar name='Mark Zuckerberg' src='/zuck-avatar.png' size={"md"} />
        <Flex>
          <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
          <Image src={"/verified.png"} w={4} h={4} ml={4} />
        </Flex>
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
        <BsThreeDots />
      </Flex>
    </Flex>
    <Text m={3}> Let's talk abaout Threads.</Text>

    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
        <Image src={"/post1.png"} w={"full"}></Image>

    </Box>
    <Flex gap={3} my={3}>
      <Actions liked={liked} setLiked={setLiked}></Actions>
      
    </Flex>

    <Flex gap={2} alignItems={"center"}>
      <Text color={"gray.light"}>238 replies</Text>
      <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
      <Text color={"gray.light"}>
        {200 +(liked ? 1: 0)} likes
        </Text>
    </Flex>
    <Divider m={4}/>
    <Flex justifyContent={"space-between"}>
    <Flex gap={2} alignItems={"center"}>
      <Text fontSize={"2xl"}>👋</Text>
      <Text color={"gray.light"}> get the app to like , reply and post.</Text>
    </Flex>
    <Button>Get</Button>
    </Flex>
    <Divider m={4}/>
    <Comment
    comment ="Looks realasy good!"
    createdAt="2d"
    likes={100}
    username="alperenakkal"
    userAvatar ="https://bit.ly/dan-abramov"
    />
     <Comment
    comment ="Çok iyi"
    createdAt="1h"
    likes={12}
    username="alperen0614"
    userAvatar ="https://bit.ly/kent-c-dodds"
    />
     <Comment
    comment ="Muhteşem bir insansin!"
    createdAt="30d"
    likes={2000}
    username="emine70aydinli"
    userAvatar ="https://bit.ly/ryan-florence"
    />
    
 
 

    </>
  )
}

export default PostPage