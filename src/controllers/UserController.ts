import { Request, Response } from "express";
import axios from '../helper/axiosHelper';
require('dotenv').config()


    
export default {
  async index(request: Request, response: Response) {
    let url = process.env.API_BASE
    let endPoint = "login"  
    const {email, senha, agente} = request.body

    let dados = {
        "email": `${email}`,
        "senha": `${senha}`,
        "agente": `${agente}`
    }
    
    let arryResponser = await axios.post(url, endPoint, dados)
    console.log(arryResponser[1])
    if (arryResponser[1] == undefined){
      let msg = "Api Esta fora do Ar"
      return response.status(500).json(msg);
    }

    return response.status(arryResponser[1]).json(arryResponser[0]);
    
  }, 


  async register(request: Request, response: Response) {
    let url = "http"
    let rota = "sadas"
    let body = ''
    let requestAxios = await axios.post(url, rota, body)
    return response.status(200).json(requestAxios[1]);
  }, 

  








  // async show(request: Request, response: Response) {
  //   const { id } = request.params;

  //   const userRepository = getRepository(User);

  //   const user = await userRepository.findOne(id);

  //   return response.status(200).json(user);
  // },

  // async create(request: Request, response: Response) {
  //   const { name, age } = request.body;

  //   const userRepository = getRepository(User);

  //   const data = {
  //     name,
  //     age,
  //   };

  //   const user = userRepository.create(data);

  //   await userRepository.save(user);

  //   return response.status(201).json(user);
  // }
}