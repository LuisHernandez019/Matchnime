import { useEffect, useState } from "react";
import axios from 'axios';

const useGetPeople = () => {
   const [user, setUser] = useState();
   const [people, setPeople] = useState([]);

   useEffect(async () =>{
      const loggedInUser = localStorage.getItem("user");
      const preferredGender = localStorage.getItem("preferredGender")
      console.log(preferredGender)

      if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
         setUser(foundUser);
      }

      if (preferredGender === 'M') {
         const response = await axios("https://flink-web-test.herokuapp.com/api/v1/getWaifus");
         setPeople(response.data.waifus);
      } else if (preferredGender === 'H') {
         const response = await axios("https://flink-web-test.herokuapp.com/api/v1/getHusbandos");
         setPeople(response.data.husbandos);
      } else {
         const response = await axios("https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos");
         setPeople(response.data.allWaifusAndHusbandos);
      }
   }, [])

   return people;
};

export default useGetPeople;