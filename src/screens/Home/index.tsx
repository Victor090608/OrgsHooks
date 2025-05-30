import React from "react";
import Top from '../components/Top';
import Producers from "../components/Producers";
import top from "../../mock/top";

export default function Home() {
    // return <>
    //     {/*<Top />*/}
    //     <Producers />
    // </>
    return <Producers top={Top} />
}