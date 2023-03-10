import React from "react"
import {useState} from "react"
import './SearchForm.css'

export default function SearchForm() {

    return(
    <form>
        <input type="text" placeholder="search by artist"></input>
        <button type="submit">Play</button>
    </form>
    )
}