import request from "supertest";
import app from "../app";
import { response } from "express"
import { text } from "node:stream/consumers"
import { describe } from "node:test";

describe{"Pruebas CRUD Usuario", () => {

    //Registrar un usuario

    test{"Debe de crear un usuario", async () => {
        const response = await request(app)
        .post("/user")
        .send({
            nombre: "William"
            email:"william@gmail.com"
        })

        expectCookies(response.status).toBe(200)

        expect(response.body).toHaveProperty{
            "mensaje",
            "Usuario creado"
        }
    }}
}}