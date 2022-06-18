import react from "react";
import react, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

import Style from "./divulgacao_cientifica.module.css";

const divulgacao_list = require("./divulgacao_cientifica.json");

export default function Divulgacao_cientifica() {
  return (
    <div className={Style.background}>
      <Header />
      <div className={Style.title_bar}>
        <span className={Style.text_title}>Divulgação Científica</span>
      </div>
      <Footer />
    </div>
  );
}
