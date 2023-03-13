import React from "react"
import { useEffect, useState } from "react"
import SearchForm from '../../components/SearchForm/SearchForm'
import './MainPage.css'

export default function MainPage() {
    return(
        <>
        <h1>Hello, my name is Elton John.</h1>
        < SearchForm />
        </>
    )
}