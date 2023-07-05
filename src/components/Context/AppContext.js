import React, { useEffect } from 'react'
import { createContext, useState } from 'react'
import { Topics } from '../data/Topics'

export const AppContext = createContext();

export function AppContextprovider(props) {

  const [topics, setTopic] = useState([]);


  useEffect(() => {
    setTopic(Topics)
  }, []);

  const [Coment, setComent] = useState("");

  useEffect(() => {
    console.log(Coment);
  }, [Coment]);

  function createComent(name, email, message) {
    console.log(Coment);
    const newComent = {
      id: new Date(),
      name: name,
      email: email,
      message: message,
    }

    setComent(newComent);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  function handleClick(ref){
    ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <AppContext.Provider value={{ topics, createComent, modal, toggleModal, Coment, handleClick}}>
      {props.children}
    </AppContext.Provider>
  )
};