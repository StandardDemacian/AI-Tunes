import React from "react"
import { Component } from "react"

export default function ArtistSearch(){
    return (
        <>
        <form className="artistForm">
            <input type="string" placeholder={"Search Artist"}></input>
            <button type="submit" placeholder="Search">Search</button>
        </form>
        </>
    )
}